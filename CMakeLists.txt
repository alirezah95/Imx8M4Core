# CROSS COMPILER SETTING
set(CMAKE_SYSTEM_NAME Generic)
cmake_minimum_required(VERSION 3.16.0)

# THE VERSION NUMBER
set(MCUXPRESSO_CMAKE_FORMAT_MAJOR_VERSION 2)
set(MCUXPRESSO_CMAKE_FORMAT_MINOR_VERSION 0)

include(ide_overrides.cmake OPTIONAL)

if(CMAKE_SCRIPT_MODE_FILE)
  message("${MCUXPRESSO_CMAKE_FORMAT_MAJOR_VERSION}")
  return()
endif()

# ENABLE ASM
enable_language(ASM)

set(CMAKE_STATIC_LIBRARY_PREFIX)
set(CMAKE_STATIC_LIBRARY_SUFFIX)

set(CMAKE_EXECUTABLE_LIBRARY_PREFIX)
set(CMAKE_EXECUTABLE_LIBRARY_SUFFIX)

# CURRENT DIRECTORY
set(ProjDirPath ${CMAKE_CURRENT_SOURCE_DIR})

set(EXECUTABLE_OUTPUT_PATH ${ProjDirPath}/build/${CMAKE_BUILD_TYPE})
set(LIBRARY_OUTPUT_PATH ${ProjDirPath}/build/${CMAKE_BUILD_TYPE})

project(Imx8M4Core VERSION 0.1)

set(MCUX_BUILD_TYPES debug release ddr_debug ddr_release flash_debug
                     flash_release)
set(MCUX_SDK_PROJECT_NAME Imx8M4Core.elf)

if(NOT DEFINED SdkRootDirPath)
  set(SdkRootDirPath ${ProjDirPath}/SDK_2_14_0_EVK-MIMX8MM)
endif()

include(${ProjDirPath}/cmake/flags.cmake)
include(${ProjDirPath}/cmake/config.cmake)

add_executable(
  ${MCUX_SDK_PROJECT_NAME}
  "${ProjDirPath}/src/imx8corem4.c"
  "${ProjDirPath}/src/peripherals.c"
  "${ProjDirPath}/src/peripherals.h"
  "${ProjDirPath}/src/FreeRTOSConfig.h"
  "${ProjDirPath}/src/pin_mux.c"
  "${ProjDirPath}/src/pin_mux.h"
  "${ProjDirPath}/src/rpmsg_config.h"
  "${ProjDirPath}/src/rsc_table.c"
  "${ProjDirPath}/src/rsc_table.h"
  "${ProjDirPath}/src/remoteproc.h"
  "${ProjDirPath}/src/board.c"
  "${ProjDirPath}/src/board.h"
  "${ProjDirPath}/src/clock_config.c"
  "${ProjDirPath}/src/clock_config.h"
  "${ProjDirPath}/src/fsl_iomuxc.h"
  "${ProjDirPath}/src/fsl_gpio.h"
  "${ProjDirPath}/src/fsl_gpio.c"
  "${ProjDirPath}/src/pulse_generator.h"
  "${ProjDirPath}/src/pulse_generator.c")

target_include_directories(${MCUX_SDK_PROJECT_NAME} PRIVATE ${ProjDirPath}/
                                                            ${ProjDirPath}/src)

set_source_files_properties(
  "${ProjDirPath}/../FreeRTOSConfig.h"
  PROPERTIES COMPONENT_CONFIG_FILE "middleware_freertos-kernel_template")

include(${SdkRootDirPath}/devices/MIMX8MM6/all_lib_device.cmake)

if(NOT DEFINED TARGET_LINK_SYSTEM_LIBRARIES)
  set(TARGET_LINK_SYSTEM_LIBRARIES "-lm -lc -lgcc -lnosys")
endif()

target_link_libraries(${MCUX_SDK_PROJECT_NAME} PRIVATE -Wl,--start-group)
target_link_libraries(${MCUX_SDK_PROJECT_NAME}
                      PRIVATE ${TARGET_LINK_SYSTEM_LIBRARIES})
target_link_libraries(${MCUX_SDK_PROJECT_NAME} PRIVATE -Wl,--end-group)

add_custom_command(
  TARGET ${MCUX_SDK_PROJECT_NAME}
  POST_BUILD
  COMMAND
    ${CMAKE_OBJCOPY} -Obinary
    ${EXECUTABLE_OUTPUT_PATH}/${MCUX_SDK_PROJECT_NAME}
    ${EXECUTABLE_OUTPUT_PATH}/Imx8M4Core.bin)

set_target_properties(
  ${MCUX_SDK_PROJECT_NAME}
  PROPERTIES ADDITIONAL_CLEAN_FILES
             "output.map;${EXECUTABLE_OUTPUT_PATH}/Imx8M4Core.bin")
