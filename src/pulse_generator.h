#ifndef _PULSE_GENERATOR_H
#define _PULSE_GENERATOR_H

#define APP_TASK_STACK_SIZE (256)

//! Creates pulse task
void create_pulse_task(uint32_t pin, unsigned long ton, unsigned long toff);

//! Destroys pulse task
void destroy_pulse_task();

//! The is the method that is run for pulse generator task
void pulse_task(void* param);

#endif //! _PULSE_GENERATOR_H