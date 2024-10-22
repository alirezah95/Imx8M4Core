# Add set(CONFIG_USE_component_ii2c_adapter true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_driver_common AND CONFIG_USE_driver_ii2c)

target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}/fsl_adapter_ii2c.c
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

else()

message(SEND_ERROR "component_ii2c_adapter.MIMX8MM6 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
