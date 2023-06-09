input.onButtonPressed(Button.A, function () {
    music.playTone(330, music.beat(BeatFraction.Eighth))
    rope += -0.5
})
input.onButtonPressed(Button.B, function () {
    music.playTone(494, music.beat(BeatFraction.Eighth))
    rope += 0.5
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(rope, 2)
})
