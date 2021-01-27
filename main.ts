while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 0 || input.rotation(Rotation.Pitch) < 0) {
        light.showAnimation(light.rainbowAnimation, 100)
    } else {
        light.clear()
    }
    
}
