basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 16)
    basic.pause(1000)
})
