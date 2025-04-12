let playerCar: game.LedSprite = null
let gameOn = false
let car0: game.LedSprite = null
let car1: game.LedSprite = null
let car2: game.LedSprite = null
let car3: game.LedSprite = null
let car4: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
function controlCar (car: game.LedSprite) {
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car)) {
                gameOn = false
            } else {
                game.setScore(game.score() + 1)
                car.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
}
basic.forever(function () {
    game.setScore(0)
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(100)
    }
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car0 = game.createSprite(0, 0)
        controlCar(car0)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car1 = game.createSprite(1, 0)
        controlCar(car1)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car2 = game.createSprite(2, 0)
        controlCar(car2)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car3 = game.createSprite(3, 0)
        controlCar(car3)
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car4 = game.createSprite(4, 0)
        controlCar(car4)
    }
})
