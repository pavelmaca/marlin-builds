module.exports = {
    board_env: "LPC1768",
    active: true,
    meta: {
        stable_name: "ender_3_skr13_ubl_0.1-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_skr13_ubl_0.1-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV1/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(pavelmaca, Ender-3 Pro)"],
            ["MOTHERBOARD",  "BOARD_BTT_SKR_V1_3"],
            ["SERIAL_PORT",  -1],
            ["SERIAL_PORT_2",  0],
            ["X_DRIVER_TYPE",   "TMC2209"],
            ["Y_DRIVER_TYPE",   "TMC2209"],
            ["Z_DRIVER_TYPE",   "TMC2209"],
            ["E0_DRIVER_TYPE",  "TMC2209"],

            // enable filament change and nozzle park on pause
            // - init from EEPROM needed to load new FILAMENT_CHANGE_UNLOAD_LENGTH values
            ["EXTRUDE_MAXLENGTH", 410],
            "NOZZLE_PARK_FEATURE",

            // TODO popis
            //RESTORE_LEVELING_AFTER_G28

            // preheat for PETG and restore bed leveling after homing
            ["PREHEAT_2_LABEL",       "PETG"],
            ["PREHEAT_2_TEMP_HOTEND", 240],
            ["PREHEAT_2_TEMP_BED",     60],

            // PID tuning
            ["DEFAULT_Kp", 25.46],
            ["DEFAULT_Ki", 1.89],
            ["DEFAULT_Kd", 85.80],

            //E-steps calibration
            ["DEFAULT_AXIS_STEPS_PER_UNIT", [ 80, 80, 400, 95.87629 ]],
           
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            ["E0_AUTO_FAN_PIN", "FAN1_PIN"],
            "SDCARD_CONNECTION ONBOARD",
            "MONITOR_DRIVER_STATUS",
            "TMC_DEBUG",

             // increase babysteps multiplicator for Z to 10
             ["BABYSTEP_MULTIPLICATOR_Z",  10],

             //
            "ADVANCED_PAUSE_FEATURE",
            ["FILAMENT_CHANGE_UNLOAD_LENGTH",      410],  // (mm) The length of filament for a complete unload.
            ["FILAMENT_CHANGE_FAST_LOAD_LENGTH",   410],  // (mm) Load length of filament, from extruder gear to nozzle.
            "PARK_HEAD_ON_PAUSE",                    // Park the nozzle during pause and filament change.

            //octoprint - M73, commands
            //- allow M73 command to set print progress via octoprint
            //- EMERGENCY_PARSER to process stop print quickly
            //- HOST_ACTION_COMMANDS to send pause/stop action to octoprint
            "LCD_SET_PROGRESS_MANUALLY",
            "EMERGENCY_PARSER",
            "HOST_ACTION_COMMANDS",
            "HOST_PROMPT_SUPPORT",
            "HOST_SHUTDOWN_MENU_ITEM",     // Add a menu item that tells the host to shut down

            // cooldown hotend after 5min of inactivity
            "HOTEND_IDLE_TIMEOUT",

            //Display remaining time
            "SHOW_REMAINING_TIME",         // Display estimated time to completion
            "USE_M73_REMAINING_TIME",    // Use remaining time from M73 command instead of estimation
            "ROTATE_PROGRESS_DISPLAY",   // Display (P)rogress, (E)lapsed, and (R)emaining time

        ],
        disable: []
    }
};