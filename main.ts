namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
function levelStart () {
    info.setScore(0)
    for (let index = 0; index < enemy_directions_list.length; index++) {
        enemy_directions_list.pop()
    }
    for (let index = 0; index < enemy_sprite_list.length; index++) {
        enemy_sprite_list.pop()
    }
    enemy_projectile.destroy()
    projectile.destroy()
    if (level == 0) {
        // Это карта уровня
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 1) {
        // Это карта уровня
        tiles.setTilemap(tilemap`level2`)
    } else if (level == 2) {
        // Это карта уровня
        tiles.setTilemap(tilemap`level3`)
    } else if (level == 3) {
        // Это карта уровня
        tiles.setTilemap(tilemap`level4`)
    } else {
        game.over(true, effects.confetti)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`tile1`)
    level += 1
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.startEffect(effects.ashes, 200)
    tiles.placeOnRandomTile(sprite, assets.tile`tile0`)
    pick_direction(sprite)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . 4 5 5 . . . . 
        . . . . 4 5 5 . . . . 
        5 5 5 . 4 5 5 . 5 5 5 
        4 4 4 . 4 5 5 . 4 4 4 
        5 5 5 5 5 5 5 3 5 5 5 
        4 4 4 e e e e e 4 4 4 
        5 5 5 e 4 2 2 e 5 5 5 
        4 4 4 e 4 2 2 e 4 4 4 
        5 5 5 e 4 4 4 e 5 5 5 
        4 4 4 e e e e e 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 . 4 5 5 . 4 4 4 
        5 5 5 . . . . . 5 5 5 
        `)
    mySprite.setVelocity(0, -10)
    direction = -100
})
function pick_direction (mySprite: Sprite) {
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                b b b . . . . . b b b 
                1 1 1 . . . . . 1 1 1 
                b b b . c c c . b b b 
                1 1 1 c c c c c 1 1 1 
                b b b e e e e e b b b 
                1 1 1 e b b b e 1 1 1 
                b b b e b 3 3 e b b b 
                1 1 1 e b 3 3 e 1 1 1 
                b b b e e e e e b b b 
                1 1 1 c c c c c 1 1 1 
                b b b c b c c c b b b 
                1 1 1 . b c c . 1 1 1 
                b b b . b c c . b b b 
                . . . . b c c . . . . 
                . . . . b c c . . . . 
                `)
            mySprite.setVelocity(0, randint(10, 30))
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 100
        } else {
            mySprite.setImage(img`
                . . . . b c c . . . . 
                . . . . b c c . . . . 
                b b b . b c c . b b b 
                1 1 1 . b c c . 1 1 1 
                b b b c b c c c b b b 
                1 1 1 c c c c c 1 1 1 
                b b b e e e e e b b b 
                1 1 1 e b 3 3 e 1 1 1 
                b b b e b 3 3 e b b b 
                1 1 1 e b b b e 1 1 1 
                b b b e e e e e b b b 
                1 1 1 c c c c c 1 1 1 
                b b b . c c c . b b b 
                1 1 1 . . . . . 1 1 1 
                b b b . . . . . b b b 
                `)
            mySprite.setVelocity(0, randint(-30, -10))
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -100
        }
    } else {
        if (Math.percentChance(50)) {
            mySprite.setImage(img`
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                . . . c e e e e e c c . . . . 
                . . c c e b b b e c b b b b b 
                . . c c e b 3 3 e c c c c c c 
                . . c c e b 3 3 e c c c c c c 
                . . . c e e e e e c c . . . . 
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                b 1 b 1 b 1 b 1 b 1 b 1 b . . 
                `)
            mySprite.setVelocity(randint(10, 30), 0)
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = 200
        } else {
            mySprite.setImage(img`
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                . . . . . c e e e e e c . . . 
                b b b b b c e b b b e c c . . 
                c c c c c c e 3 3 b e c c . . 
                c c c c c c e 3 3 b e c c . . 
                . . . . . c e e e e e c . . . 
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                . . b 1 b 1 b 1 b 1 b 1 b 1 b 
                `)
            mySprite.setVelocity(randint(-30, -10), 0)
            enemy_directions_list[enemy_sprite_list.indexOf(mySprite)] = -200
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Math.abs(direction) == 100) {
        projectile = sprites.createProjectileFromSprite(img`
            5 
            5 
            5 
            `, mySprite, 0, direction)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            5 5 5 
            `, mySprite, direction, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (enemy_projectile.overlapsWith(otherSprite)) {
        sprite.destroy()
        mySprite.startEffect(effects.fire, 100)
        info.changeLifeBy(-1)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        . . 5 e e e e e 5 . . . . . 
        . 5 5 e 4 4 4 e 5 4 4 4 4 4 
        . 5 5 e 4 2 2 e 5 5 5 5 5 5 
        . 5 5 e 4 2 2 e 5 5 5 5 5 5 
        . . 5 e e e e e 5 . . . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        `)
    mySprite.image.flipX()
    mySprite.setVelocity(-10, 0)
    direction = -200
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    pick_direction(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        . . 5 e e e e e 5 . . . . . 
        . 5 5 e 4 4 4 e 5 4 4 4 4 4 
        . 5 5 e 4 2 2 e 5 5 5 5 5 5 
        . 5 5 e 4 2 2 e 5 5 5 5 5 5 
        . . 5 e e e e e 5 . . . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        5 4 5 4 5 4 5 4 5 4 5 . . . 
        `)
    mySprite.setVelocity(10, 0)
    direction = 200
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . 4 5 5 . . . . 
        . . . . 4 5 5 . . . . 
        5 5 5 . 4 5 5 . 5 5 5 
        4 4 4 . 4 5 5 . 4 4 4 
        5 5 5 5 5 5 5 3 5 5 5 
        4 4 4 e e e e e 4 4 4 
        5 5 5 e 4 2 2 e 5 5 5 
        4 4 4 e 4 2 2 e 4 4 4 
        5 5 5 e 4 4 4 e 5 5 5 
        4 4 4 e e e e e 4 4 4 
        5 5 5 5 5 5 5 5 5 5 5 
        4 4 4 . 4 5 5 . 4 4 4 
        5 5 5 . . . . . 5 5 5 
        `)
    mySprite.image.flipY()
    mySprite.setVelocity(0, 10)
    direction = 100
})
info.onLifeZero(function () {
    info.changeScoreBy(level * 10)
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile.overlapsWith(otherSprite)) {
        sprite.destroy()
        otherSprite.destroy(effects.fire, 200)
        enemy_sprite_list.removeAt(enemy_sprite_list.indexOf(otherSprite))
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    sprite.startEffect(effects.fire, 100)
    enemy_sprite_list.removeAt(enemy_sprite_list.indexOf(otherSprite))
    info.changeLifeBy(-1)
})
let enemy_projectile: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let direction = 0
let enemy_directions_list: number[] = []
let enemy_sprite_list: Sprite[] = []
let level = 0
info.setLife(10)
level = 0
enemy_sprite_list = [sprites.create(img`
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    . . . c e e e e e c . . . . . 
    . . c c e b b b e c b b b b b 
    . . c c e b 3 3 e c c c c c c 
    . . c c e b 3 3 e c c c c c c 
    . . . c e e e e e c . . . . . 
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    b 1 b 1 b 1 b 1 b 1 b 1 b . . 
    `, SpriteKind.Enemy)]
enemy_directions_list = [200]
let enemy_count = 3
direction = -100
mySprite = sprites.create(img`
    . . . . 4 5 5 . . . . 
    . . . . 4 5 5 . . . . 
    5 5 5 . 4 5 5 . 5 5 5 
    4 4 4 . 4 5 5 . 4 4 4 
    5 5 5 5 5 5 5 3 5 5 5 
    4 4 4 e e e e e 4 4 4 
    5 5 5 e 4 2 2 e 5 5 5 
    4 4 4 e 4 2 2 e 4 4 4 
    5 5 5 e 4 4 4 e 5 5 5 
    4 4 4 e e e e e 4 4 4 
    5 5 5 5 5 5 5 5 5 5 5 
    4 4 4 . 4 5 5 . 4 4 4 
    5 5 5 . . . . . 5 5 5 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
projectile = sprites.createProjectileFromSide(img`
    5 5 5 5 
    `, 50, 100)
enemy_projectile = sprites.createProjectileFromSide(img`
    5 
    5 
    5 
    5 
    `, 50, 100)
levelStart()
forever(function () {
    if (info.score() >= 10) {
        game.setDialogTextColor(6)
        game.showLongText("NEXT LEVEL", DialogLayout.Center)
        levelStart()
    }
})
game.onUpdateInterval(500, function () {
    if (enemy_sprite_list.length <= enemy_count && Math.percentChance(30)) {
        enemy_directions_list.push(200)
        enemy_sprite_list.push(sprites.create(img`
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            . . . c e e e e e c . . . . . 
            . . c c e b b b e c b b b b b 
            . . c c e b 3 3 e c c c c c c 
            . . c c e b 3 3 e c c c c c c 
            . . . c e e e e e c . . . . . 
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            b 1 b 1 b 1 b 1 b 1 b 1 b . . 
            `, SpriteKind.Enemy))
    }
    for (let value of enemy_sprite_list) {
        if (Math.percentChance(30)) {
            if (Math.abs(enemy_directions_list[enemy_sprite_list.indexOf(value)]) == 100) {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    9 
                    9 
                    9 
                    `, value, 0, enemy_directions_list[enemy_sprite_list.indexOf(value)])
            } else {
                enemy_projectile = sprites.createProjectileFromSprite(img`
                    9 9 9 
                    `, value, enemy_directions_list[enemy_sprite_list.indexOf(value)], 0)
            }
        }
    }
})
