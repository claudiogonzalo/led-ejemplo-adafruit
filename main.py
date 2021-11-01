def on_forever():
    while True:
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(100)
        basic.clear_screen()
        basic.pause(100)
basic.forever(on_forever)
