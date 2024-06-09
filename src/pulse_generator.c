#include <stdint.h>

#include "FreeRTOS.h"
#include "MIMX8MM6_cm4.h"
#include "board.h"
#include "clock_config.h"
#include "fsl_debug_console.h"
#include "fsl_gpio.h"
#include "fsl_iomuxc.h"
#include "projdefs.h"
#include "pulse_generator.h"
#include "rsc_table.h"
#include "task.h"

#define PULSE_GPIO_CHIP GPIO5

static uint32_t gpioPin = 0;
static unsigned long timeon = 1000; //! In micorseconds
static unsigned long timeoff = 1000; //! In micorseconds
static TaskHandle_t pulse_task_handle = NULL;

volatile bool pinCurrentState = false;

//! Creates pulse task
void create_pulse_task(uint32_t pin, unsigned long ton, unsigned long toff)
{
    if (pulse_task_handle != NULL) {
        return;
    }

    PRINTF("Pulse Task on : %d with %d, %d times\r\n", pin, ton, toff);

    gpioPin = pin;
    timeon = ton;
    timeoff = toff;

    if (pulse_task_handle == NULL
        && xTaskCreate(pulse_task, "PULSE_TASK", APP_TASK_STACK_SIZE, NULL,
               tskIDLE_PRIORITY + 1, &pulse_task_handle)
            != pdPASS) {
        PRINTF("\r\nFailed to create application PULSE TASK\r\n");
    }
}

//! Destroys pulse task
void destroy_pulse_task()
{
    if (pulse_task_handle) {
        vTaskDelete(pulse_task_handle);
        pulse_task_handle = NULL;
    }
}

//! The is the method that is run for pulse generator task
void pulse_task(void* param)
{
    /* Define the init structure for the output LED pin*/
    gpio_pin_config_t pin_config = { kGPIO_DigitalOutput, 0, kGPIO_NoIntmode };

    //! This should be changed to handle any pin, it only works for GPIO5 IO11.
    IOMUXC_SetPinMux(IOMUXC_ECSPI2_MOSI_GPIO5_IO11, 0);
    IOMUXC_SetPinConfig(IOMUXC_ECSPI2_MOSI_GPIO5_IO11, 0x157);

    GPIO_PinInit(PULSE_GPIO_CHIP, gpioPin, &pin_config);

    while (true) {
        if (pinCurrentState) {
            SDK_DelayAtLeastUs(timeon, SDK_DEVICE_MAXIMUM_CPU_CLOCK_FREQUENCY);

            GPIO_PinWrite(PULSE_GPIO_CHIP, gpioPin, 0U);
            pinCurrentState = false;
        } else {
            SDK_DelayAtLeastUs(timeoff, SDK_DEVICE_MAXIMUM_CPU_CLOCK_FREQUENCY);

            GPIO_PinWrite(PULSE_GPIO_CHIP, gpioPin, 1U);
            pinCurrentState = true;
        }
    }
}