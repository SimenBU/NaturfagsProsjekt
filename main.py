CO2 = "Verdi"
CO2_Verdi = 0

def ReadSensor():
    return pins.analog_read_pin(AnalogPin.P2)

def on_forever():
    CO2_Verdi
    CO2_Verdi = ReadSensor()*4
    serial.write_value(CO2, CO2_Verdi)
    basic.pause(60000)
basic.forever(on_forever)
