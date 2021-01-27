while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) > 9 or input.rotation(Rotation.PITCH) < -9:
       light.show_animation(light.rainbow_animation, 100)
    else:
        light.clear()