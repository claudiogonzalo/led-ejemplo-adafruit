basic.forever(function on_forever() {
    while (true) {
        led.toggle(randint(0, 4), randint(0, 4))
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
