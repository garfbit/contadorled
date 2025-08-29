let numero = 0
for (let index = 0; index < 7; index++) {
    numero += 1
    basic.showNumber(numero)
}
pins.digitalWritePin(DigitalPin.P0, 1)
