makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        d1 = randint(1, 7)
        if (d1 != d2) {
            if (d1 == 1) {
                cbit_小车类.RGB_Car_Big(60, 0, 0)
                basic.pause(500)
            } else {
            	
            }
            if (d1 == 2) {
                cbit_小车类.RGB_Car_Big(0, 60, 0)
                basic.pause(500)
            } else {
            	
            }
            if (d1 == 3) {
                cbit_小车类.RGB_Car_Big(0, 0, 60)
                basic.pause(500)
            }
            if (d1 == 4) {
                cbit_小车类.RGB_Car_Big(30, 30, 0)
                basic.pause(500)
            }
            if (d1 == 5) {
                cbit_小车类.RGB_Car_Big(30, 0, 30)
                basic.pause(500)
            }
            if (d1 == 6) {
                cbit_小车类.RGB_Car_Big(0, 30, 30)
                basic.pause(500)
            }
            if (d1 == 7) {
                cbit_小车类.RGB_Car_Big(30, 30, 30)
                basic.pause(500)
            }
            cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.OFF)
            basic.pause(500)
        } else {
            d1 = d1 - 1
            if (d1 == 1) {
                cbit_小车类.RGB_Car_Big(60, 0, 0)
                basic.pause(500)
            } else {
            	
            }
            if (d1 == 2) {
                cbit_小车类.RGB_Car_Big(0, 60, 0)
                basic.pause(500)
            } else {
            	
            }
            if (d1 == 3) {
                cbit_小车类.RGB_Car_Big(0, 0, 60)
                basic.pause(500)
            }
            if (d1 == 4) {
                cbit_小车类.RGB_Car_Big(30, 30, 0)
                basic.pause(500)
            }
            if (d1 == 5) {
                cbit_小车类.RGB_Car_Big(30, 0, 30)
                basic.pause(500)
            }
            if (d1 == 6) {
                cbit_小车类.RGB_Car_Big(0, 30, 30)
                basic.pause(500)
            }
            if (d1 == 0) {
                cbit_小车类.RGB_Car_Big(30, 30, 30)
                basic.pause(500)
            }
            d2 = d1
        }
    }
})
let d2 = 0
let d1 = 0
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.Keyestudio)
basic.forever(function () {
	
})
