while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 9 || input.acceleration(Dimension.X) < -9) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else {
        light.clear()
    }
    
}
