module.exports = {
    board_env: "LPC1768",
    active: true,
    only: "stable",
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
            ["MOTHERBOARD",  q`BOARD_BTT_SKR_V1_4`],
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
        ],
        disable: []
    }
};