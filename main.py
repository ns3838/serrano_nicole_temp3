f = input.temperature(TemperatureUnit.FAHRENHEIT)
if 65<f>75:
    light.set_all(light.rgb(0,255,0))
elif f>75:
    light.set_all(light.rgb(255,0,0))
else:
    light.set_all(light.rgb(0,0,255))
