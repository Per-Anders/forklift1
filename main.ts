radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P1, 90)
    }
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 15)
    }
    if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    }
    if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 100)
    }
    if (receivedNumber == 5) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    }
    if (receivedNumber == 6) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 100)
    }
})
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    radio.setGroup(1)
})
