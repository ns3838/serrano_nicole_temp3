let f = input.temperature(TemperatureUnit.Fahrenheit)
if (65 < f && f > 75) {
    light.setAll(light.rgb(0, 255, 0))
} else if (f > 75) {
    light.setAll(light.rgb(255, 0, 0))
} else {
    light.setAll(light.rgb(0, 0, 255))
}

