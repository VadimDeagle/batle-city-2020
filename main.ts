namespace SpriteKind {
    export const PC_projectile = SpriteKind.create()
}
function levelStart () {
    info.setScore(0)
    info.changeLifeBy(1)
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
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000605000000030000000000000000000105000000030000000001000000020101010000040000000000000400000000030000030000000006010100000400000000000000000000000000`, img`
            . . . . . . 2 2 . . 
            . 2 . . . . . . . . 
            . 2 2 . . . 2 . . . 
            . 2 . . . . 2 2 2 . 
            . 2 . . . . . . 2 . 
            . . . 2 . . 2 . . . 
            . 2 2 2 . . 2 . . . 
            . . . . . . . . . . 
            `, [myTiles.tile0,myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 3))
    } else if (level == 1) {
        // Это карта уровня
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000003000000000000000000010500010101010500000000000100000000000006010101000101050000000000000201000000000605000601010105000000000000040000000000030000000000000300`, img`
            . 2 . . . . . . . . 
            . 2 2 . 2 2 2 2 2 . 
            . . . . 2 . . . . . 
            . 2 2 2 2 . 2 2 2 . 
            . . . . . . 2 . . . 
            . 2 2 . 2 2 2 2 2 . 
            . . . . . 2 . . . . 
            . 2 . . . . . . 2 . 
            `, [myTiles.tile0,myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 4))
    } else if (level == 2) {
        // Это карта уровня
        tiles.setTilemap(tiles.createTilemap(hex`0a0008000300030003000300060104000400040004000004000000000000000000000105000300030003000301000000000000000001040004000400040006010002000000000000000006010500030003000605`, img`
            2 . 2 . 2 . 2 . 2 2 
            2 . 2 . 2 . 2 . . 2 
            . . . . . . . . . . 
            2 2 . 2 . 2 . 2 . 2 
            2 . . . . . . . . 2 
            2 . 2 . 2 . 2 . 2 2 
            . . . . . . . . . . 
            2 2 2 . 2 . 2 . 2 2 
            `, [myTiles.tile0,myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
    } else if (level == 3) {
        // Это карта уровня
        tiles.setTilemap(tiles.createTilemap(hex`0a00100000000000000000030006000101010105000100000001000000000001000000040000030000010003000000000100000400010605000001000000000100000000010006010101030003000400000001000100010000000000010001000100020003000400040004000300010000000000000001000101010106010101010004000000000000000000000003000006010101000601010000000000040000000000`, img`
            . . . . . . . 2 . 2 
            . 2 2 2 2 2 . 2 . . 
            . 2 . . . . . 2 . . 
            . 2 . . 2 . . 2 . 2 
            . . . . 2 . . 2 . 2 
            2 2 . . 2 . . . . 2 
            . . . . 2 . 2 2 2 2 
            2 . 2 . 2 . . . 2 . 
            2 . 2 . . . . . 2 . 
            2 . 2 . . . 2 . 2 . 
            2 . 2 . 2 . 2 . . . 
            . . . . 2 . 2 2 2 2 
            2 2 2 2 2 . 2 . . . 
            . . . . . . . . 2 . 
            . 2 2 2 2 . 2 2 2 . 
            . . . . 2 . . . . . 
            `, [myTiles.tile0,myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen))
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 9))
        spawn_time = 3000
    } else if (level == 4) {
    	
    } else if (level == 5) {
    	
    } else if (level == 6) {
    	
    } else if (level == 6) {
    	
    } else {
        game.over(true, effects.confetti)
    }
    level += 1
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.startEffect(effects.ashes, 200)
    tiles.placeOnRandomTile(sprite, myTiles.tile0)
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
            mySprite.setVelocity(0, randint(10, 30))
            mySprite.image.flipY()
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
                `)
            mySprite.image.flipX()
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
let spawn_time = 0
let enemy_directions_list: number[] = []
let enemy_sprite_list: Sprite[] = []
let level = 0
info.setLife(10)
level = 0
enemy_sprite_list = sprites.allOfKind(SpriteKind.Enemy)
enemy_directions_list = []
spawn_time = 5500
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
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
enemy_projectile = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 50, 100)
levelStart()
game.onUpdateInterval(spawn_time, function () {
    if (enemy_sprite_list.length <= enemy_count) {
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
})
forever(function () {
    if (info.score() >= 10) {
        game.setDialogTextColor(6)
        game.showLongText("NEXT LEVEL", DialogLayout.Center)
        levelStart()
    }
})
game.onUpdateInterval(500, function () {
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
