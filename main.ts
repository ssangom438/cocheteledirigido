bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 250)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 250)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        music.setVolume(127)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        led.enable(true)
        led.setBrightness(255)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        led.enable(false)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.showIcon(IconNames.Heart)
