let CO2 = "Verdi"
let CO2_Verdi = 0
function ReadSensor(): number {
    return pins.analogReadPin(AnalogPin.P2)
}

basic.forever(function on_forever() {
    let CO2_Verdi: number;
    CO2_Verdi
    CO2_Verdi = ReadSensor() * 4
    serial.writeValue(CO2, CO2_Verdi)
    basic.pause(1000)
})
