radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P1, 100)
    }
    if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    }
    if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (receivedNumber == 5) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    }
    if (receivedNumber == 6) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (receivedNumber == 7) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    }
    if (receivedNumber == 8) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (receivedNumber == 9) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 100)
    }
    if (receivedNumber == 10) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    radio.setGroup(1)
})
