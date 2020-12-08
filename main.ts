let changer = 0
let nombre_1 = 0
let nombre_2 = 0
let simbole = 0
input.onButtonPressed(Button.AB, function () {
    if (changer == 0) {
        nombre_1 += 1
        basic.showNumber(nombre_1)
    }
    if (changer == 1) {
        nombre_2 += 1
        basic.showNumber(nombre_2)
    }
    simbole += 1
    if (simbole == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
    } else {
        if (simbole == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.clearScreen()
        } else {
            if (simbole == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(200)
                basic.clearScreen()
            } else {
                if (simbole == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(200)
                    basic.clearScreen()
                } else {
                	
                }
                if (true) {
                	
                } else {
                	
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    changer += 1
    if (changer == 2) {
        if (simbole == 0) {
            basic.showNumber(nombre_1 + nombre_2)
        } else {
            if (simbole == 1) {
                basic.showNumber(nombre_1 + nombre_2)
            } else {
                simbole = 0
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    simbole = 0
    changer = 0
    nombre_1 = 0
    nombre_2 = 0
})
