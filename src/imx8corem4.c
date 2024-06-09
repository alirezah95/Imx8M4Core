/*
 * Copyright 2016-2024 NXP
 * All rights reserved.
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @file    test_elf.c
 * @brief   Application entry point.
 */
#include <stdio.h>

#include "FreeRTOS.h"
#include "MIMX8MM6_cm4.h"
#include "board.h"
#include "clock_config.h"
#include "fsl_debug_console.h"
#include "fsl_gpio.h"
#include "fsl_uart.h"
#include "peripherals.h"
#include "pin_mux.h"
#include "rpmsg_lite.h"
#include "rpmsg_ns.h"
#include "rpmsg_queue.h"
#include "rsc_table.h"
#include "task.h"

#include "pulse_generator.h"

/*******************************************************************************
 * Definitions
 ******************************************************************************/
#define RPMSG_LITE_SHMEM_BASE (VDEV0_VRING_BASE)
#define RPMSG_LITE_LINK_ID (RL_PLATFORM_IMX8MM_M4_USER_LINK_ID)
#define RPMSG_LITE_NS_ANNOUNCE_STRING "rpmsg-virtual-tty-channel-1"
#define APP_TASK_STACK_SIZE (256)
#ifndef LOCAL_EPT_ADDR
#define LOCAL_EPT_ADDR (30)
#endif

/* Globals */
static char
    app_buf[512]; /* Each RPMSG buffer can carry less than 512 payload */

/*******************************************************************************
 * Prototypes
 ******************************************************************************/

/*******************************************************************************
 * Code
 ******************************************************************************/
static TaskHandle_t rpmsg_task_handle = NULL;

static struct rpmsg_lite_instance* volatile rpmsg_instance = NULL;
static struct rpmsg_lite_endpoint* volatile rpmsg_ept = NULL;
static volatile rpmsg_queue_handle rpmsg_que_handle = NULL;

void app_destroy_task(void)
{
    if (rpmsg_task_handle) {
        vTaskDelete(rpmsg_task_handle);
        rpmsg_task_handle = NULL;
    }

    if (rpmsg_ept) {
        rpmsg_lite_destroy_ept(rpmsg_instance, rpmsg_ept);
        rpmsg_ept = NULL;
    }

    if (rpmsg_que_handle) {
        rpmsg_queue_destroy(rpmsg_instance, rpmsg_que_handle);
        rpmsg_que_handle = NULL;
    }

    if (rpmsg_instance) {
        rpmsg_lite_deinit(rpmsg_instance);
        rpmsg_instance = NULL;
    }
}

void app_task(void* param)
{
    volatile uint32_t remote_addr;
    void* rx_buf;
    uint32_t len;
    int32_t result;
    void* tx_buf;
    uint32_t size;

    /* Print the initial banner */
    PRINTF("\r\n--------------------------------------------------\r\n");
    PRINTF("RPMSG String Echo FreeRTOS RTOS API Demo...\r\n");

#ifdef MCMGR_USED
    uint32_t startupData;

    /* Get the startup data */
    (void)MCMGR_GetStartupData(kMCMGR_Core1, &startupData);

    rpmsg_instance = rpmsg_lite_remote_init(
        (void*)startupData, RPMSG_LITE_LINK_ID, RL_NO_FLAGS);

    /* Signal the other core we are ready */
    (void)MCMGR_SignalReady(kMCMGR_Core1);
#else
    rpmsg_instance = rpmsg_lite_remote_init(
        (void*)RPMSG_LITE_SHMEM_BASE, RPMSG_LITE_LINK_ID, RL_NO_FLAGS);
#endif /* MCMGR_USED */

    rpmsg_lite_wait_for_link_up(rpmsg_instance, RL_BLOCK);
    PRINTF("Link is up with the OS\r\n");

    rpmsg_que_handle = rpmsg_queue_create(rpmsg_instance);
    rpmsg_ept = rpmsg_lite_create_ept(
        rpmsg_instance, LOCAL_EPT_ADDR, rpmsg_queue_rx_cb, rpmsg_que_handle);
    (void)rpmsg_ns_announce(
        rpmsg_instance, rpmsg_ept, RPMSG_LITE_NS_ANNOUNCE_STRING, RL_NS_CREATE);

    for (;;) {
        /* Get RPMsg rx buffer with message */
        result = rpmsg_queue_recv_nocopy(rpmsg_instance, rpmsg_que_handle,
            (uint32_t*)&remote_addr, (char**)&rx_buf, &len, RL_BLOCK);
        if (result != 0) {
            assert(false);
        }

        /* Copy string from RPMsg rx buffer */
        assert(len < sizeof(app_buf));
        memcpy(app_buf, rx_buf, len);
        app_buf[len] = 0; /* End string by '\0' */

        if (!((len == 2) && (app_buf[0] == 0xd) && (app_buf[1] == 0xa))) {
            PRINTF("Get Message From Master Side : \"%s\" [len : %d]\r\n",
                app_buf, len);

            //! Other tasks can be started when a message is received, for example a pulse
            //! generation on a GPIO
        }

        /* Get tx buffer from RPMsg */
        tx_buf = rpmsg_lite_alloc_tx_buffer(rpmsg_instance, &size, RL_BLOCK);
        assert(tx_buf);
        /* Copy string to RPMsg tx buffer */
        memcpy(tx_buf, app_buf, len);
        /* Echo back received message with nocopy send */
        result = rpmsg_lite_send_nocopy(
            rpmsg_instance, rpmsg_ept, remote_addr, tx_buf, len);
        if (result != 0) {
            assert(false);
        }
        /* Release held RPMsg rx buffer */
        result = rpmsg_queue_nocopy_free(rpmsg_instance, rx_buf);
        if (result != 0) {
            assert(false);
        }
    }
}

void app_create_task(void)
{
    if (rpmsg_task_handle == NULL
        && xTaskCreate(app_task, "APP_TASK", APP_TASK_STACK_SIZE, NULL,
               tskIDLE_PRIORITY + 2, &rpmsg_task_handle)
            != pdPASS) {
        PRINTF("\r\nFailed to create application task\r\n");
        for (;;)
            ;
    }
}

/*!
 * @brief Main function
 */
int main(void)
{
    BOARD_InitBootPins();
    BOARD_BootClockRUN();
    BOARD_InitBootPeripherals();
    BOARD_InitDebugConsole();
    BOARD_InitMemory();

    /* Initialize standard SDK demo application pins */
    /* Board specific RDC settings */
    BOARD_RdcInit();

    copyResourceTable();

    PRINTF("M4 Core Firmware\r\n");

#ifdef MCMGR_USED
    /* Initialize MCMGR before calling its API */
    (void)MCMGR_Init();
#endif /* MCMGR_USED */

    create_pulse_task(11, 100000, 100000);

    app_create_task();
    vTaskStartScheduler();

    PRINTF("Failed to start FreeRTOS on core0.\n");
}