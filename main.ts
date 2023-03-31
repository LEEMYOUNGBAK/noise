OLED.init(128, 64)
basic.forever(function () {
    if (Environment.ReadNoise(AnalogPin.P1) > 60) {
        OLED.writeStringNewLine("It's so loud")
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    } else {
        OLED.clear()
        basic.clearScreen()
    }
})
