radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 90)
    }
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P1, 15)
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
