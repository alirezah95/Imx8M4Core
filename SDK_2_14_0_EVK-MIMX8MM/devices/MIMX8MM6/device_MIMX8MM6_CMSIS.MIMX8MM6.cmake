# Add set(CONFIG_USE_device_MIMX8MM6_CMSIS true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_CMSIS_Include_core_cm AND (CONFIG_DEVICE_ID STREQUAL MIMX8MM6xxxLZ OR CONFIG_DEVICE_ID STREQUAL MIMX8MM6xxxKZ))

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

else()

message(SEND_ERROR "device_MIMX8MM6_CMSIS.MIMX8MM6 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
