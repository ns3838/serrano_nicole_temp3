while True:
    print ("Current Temperature : " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" )
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 75:
        light.set_all (light.rgb(255,0,0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < 65:
        light.set_all (light.rgb(0,0,255))
    else:
        light.set_all (light.rgb(0,255,0))
