while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 9 || input.rotation(Rotation.Pitch) < -9) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else {
        light.clear()
    }
    
}
