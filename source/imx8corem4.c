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
#include "board.h"
#include "peripherals.h"
#include "pin_mux.h"
#include "clock_config.h"
#include "MIMX8MM6_cm4.h"
#include "fsl_debug_console.h"
#include "fsl_gpio.h"
/* TODO: insert other include files here. */

/* TODO: insert other definitions and declarations here. */
#define EXAMPLE_LED_GPIO     GPIO5
#define EXAMPLE_LED_GPIO_PIN 11U


/* The PIN status */
volatile bool g_pinSet = false;

/*
 * @brief   Application entry point.
 */
int main(void) {

    /* Init board hardware. */
    BOARD_InitBootPins();
    BOARD_BootClockRUN();
    BOARD_InitBootPeripherals();
    BOARD_InitDebugConsole();
//    BOARD_InitMemory();

    /* Define the init structure for the output LED pin*/
    gpio_pin_config_t led_config = {kGPIO_DigitalOutput, 0, kGPIO_NoIntmode};

    /* Board pin, clock, debug console init */
    /* Board specific RDC settings */
    BOARD_RdcInit();

    PRINTF("Hello From IMX8\r\n");
    PRINTF("Generating A Pulse\r\n");

    /* Initialize the pin */
    GPIO_PinInit(EXAMPLE_LED_GPIO, EXAMPLE_LED_GPIO_PIN, &led_config);

    while(1) {
    	SDK_DelayAtLeastUs(10, SDK_DEVICE_MAXIMUM_CPU_CLOCK_FREQUENCY);

#if (defined(FSL_FEATURE_IGPIO_HAS_DR_TOGGLE) && (FSL_FEATURE_IGPIO_HAS_DR_TOGGLE == 1))
		GPIO_PortToggle(EXAMPLE_LED_GPIO, 1u << EXAMPLE_LED_GPIO_PIN);
#else
		if (g_pinSet) {
			GPIO_PinWrite(EXAMPLE_LED_GPIO, EXAMPLE_LED_GPIO_PIN, 0U);
			g_pinSet = false;
		} else {
			GPIO_PinWrite(EXAMPLE_LED_GPIO, EXAMPLE_LED_GPIO_PIN, 1U);
			g_pinSet = true;
		}
#endif
    }
    return 0 ;
}
