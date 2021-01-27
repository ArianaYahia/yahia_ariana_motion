while True:
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 9 or input.acceleration(Dimension.X) < -9:
       light.show_animation(light.rainbow_animation, 100)
    else:
        light.clear()
