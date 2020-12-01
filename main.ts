while (true) {
    console.log("Current Temperature : " + input.temperature(TemperatureUnit.Fahrenheit) + "°F")
    if (input.temperature(TemperatureUnit.Fahrenheit) > 75) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < 65) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(0, 255, 0))
    }
    
}
