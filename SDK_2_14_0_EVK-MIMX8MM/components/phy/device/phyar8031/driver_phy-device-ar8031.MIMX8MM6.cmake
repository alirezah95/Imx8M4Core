# Add set(CONFIG_USE_driver_phy-device-ar8031 true) in config.cmake to use this component

include_guard(GLOBAL)
message("${CMAKE_CURRENT_LIST_FILE} component is included.")

if(CONFIG_USE_driver_phy-common)

target_sources(${MCUX_SDK_PROJECT_NAME} PRIVATE
  ${CMAKE_CURRENT_LIST_DIR}/fsl_phyar8031.c
)

target_include_directories(${MCUX_SDK_PROJECT_NAME} PUBLIC
  ${CMAKE_CURRENT_LIST_DIR}/.
)

else()

message(SEND_ERROR "driver_phy-device-ar8031.MIMX8MM6 dependency does not meet, please check ${CMAKE_CURRENT_LIST_FILE}.")

endif()
