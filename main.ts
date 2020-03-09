namespace SpriteKind {
    export const key = SpriteKind.create()
    export const key2 = SpriteKind.create()
    export const key3 = SpriteKind.create()
    export const portal = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
f f f f f f f f e f f f f f f f 
e e e e e e e f f f e e e e e e 
e e f e e e e e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e e f f f f f f 
e e e e e e e f f f f e e e e e 
e e e e e e e e e e e e e e e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
`
}
function beginning_credits () {
    game.splash("You have been brought back to the past.  ")
    game.splash("Navigate your way through 4 levels for the 12 keys and escape back to the present! ")
    game.splash("Use ^ to move up, S to move down, and < and > to move Left and Right. ")
    game.splash("Beware, you're nt the only one here.")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_3.destroy()
})
function bad_guy () {
    // This creates the villlan and spawns him in specific
    // position.
    Villan = sprites.create(img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . 2 e 2 2 2 2 e 2 . f 1 1 
. . . . 2 2 2 e 2 2 e 2 2 d d . . 
. . . d d 2 2 2 e e 2 2 d d f . . 
. . d d 2 2 2 2 e e 2 2 2 . . . . 
. . d . . 2 2 2 e e 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
    Villan.setPosition(400, 600)
    Villan.follow(Carlos, 60)
    Villan.setKind(SpriteKind.Enemy)
}
function main_character () {
    // This makes my sprite
    Carlos = sprites.create(img`
. . . . . f f f f f . . . . . . . 
. . . . f f d d d f f . . . . . . 
. . . . f d 1 d 1 d f . . . . . . 
. . . . d d f d f d d . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d f d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . . 
. . . . 5 5 1 1 1 5 5 . . . . . . 
. . . 5 5 5 1 2 1 5 5 5 . . . . . 
. . . 5 . 5 1 2 1 5 . 5 . . . . . 
. . . 5 . 5 1 1 1 5 . d . . . . . 
. . . d . 5 5 5 5 5 . d . . . . . 
. . . . . 8 8 8 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . f f f . f f f . . . . . . 
`, SpriteKind.Player)
    // This moves my sprite
    controller.moveSprite(Carlos, 70, 70)
    // This set's my sprite's postion/spawn point
    Carlos.setPosition(400, 750)
    Carlos.setKind(SpriteKind.Player)
    // This follows the sprite
    scene.cameraFollowSprite(Carlos)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    // This organizes the amount of animations
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f f f f f . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . f . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . . f f . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . 1 1 . 1 f f 1 1 1 1 . . . . 
. . 1 1 f . 1 1 1 1 1 1 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. 1 1 1 . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 8 8 . . . . . 
. . . . . . . . . . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . 1 . . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f . . 2 2 2 2 2 2 1 . . . . 
. 1 1 1 f . 2 2 2 2 2 2 2 . . . . 
. 1 1 . d d 2 2 2 2 2 2 2 . . . . 
. 1 . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
// This will annimate the sprite based on what button
// is pressed
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . d . . . d d d d . . d . . . . 
. . d d . . 5 5 5 5 . d d . . . . 
. . . d d 5 5 5 5 5 5 d . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f 8 8 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d d . . . . 
. . . d . . 5 5 5 5 . . d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kays_2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    level += 1
})
function background () {
    // This creates the whole map.
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b e e b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f 
f b e e b b b b b b b b b b b b b b b b b f f b b b b b b b b b b b b b b b b b b b b b b b b f b f 
f b e e 3 e e e e e e e e e e e e e e e b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e 3 e e e e e e e e e e 4 e e e 4 b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e b b b b b b b b b b b b b b e e b f f b e e b b b b b b b b b b b b b b b b b b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b b b b b b b b b b b b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b 4 e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e 4 b f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b b b b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e e e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e 4 e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e 4 e e b b b b b b b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b b b b b b b b b e e b e e e b b b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e b b b e e b f b f 
f b e e b b b b b b b b b b b b b b b b b b b b e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b b b b e e e b f b e e b f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b b b b e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e b b b b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e b f b b b b f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e e e e e e e b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e e e e e e e b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b b b b b b b b b b b b b e e b b b b b b b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b b b b b b b b b b b b b b b b b b b b b b b e e b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b 1 1 1 1 1 1 b b b b b b b b b 
1 1 b b b b b 1 1 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
    // This will add a specific design to the colored
    // coded block.
    scene.setTile(14, img`
e f e e e e e e e e e e e e e e 
e e e e e e e e e e e f e e e e 
e e f f f f f f e e e e e e e e 
f f e e e e e e f f f e e e e e 
f e e e f e e e e e e f f f f f 
e e e e e e e e e e e e e e e e 
f f f f f f f f e f e e e e e e 
f e e e e e e f f f f f f f f f 
e e e e e e f e e e e e e e e e 
e e e e e e e e e e e e f e e e 
f f f f f f f f f f e e e f f f 
e f e e e e e e e f f f f f e e 
e e e e e e f e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e f e e e 
`, false)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    // This subtracts the main character's life by 1 when
    // touched by villain sprite
    info.changeLifeBy(-1)
    Carlos.destroy()
    main_character()
    Villan.follow(Carlos, 100)
})
// This function creates the 1/3 keys and positions
// them in 3 specific places.
function key_1 () {
    kays = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays.setPosition(500, 400)
    kays.say("Key 1")
    kays.setKind(SpriteKind.key)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    // This will delete the key as the character has
    // collected them.
    kays.destroy()
})
function lEvel_2 () {
    // This creates the whole map.
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f 1 1 1 f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 1 1 1 f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f f f f f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f f f f f f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f 1 1 1 1 f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f 1 f f 1 f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 f f 1 f 1 f f 1 1 1 1 1 1 1 1 1 1 f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 1 1 1 1 f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(1, img`
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
f f f 1 1 1 f f f 1 1 1 f f f 1 
1 1 1 f f f 1 1 1 f f f 1 1 1 f 
`, true)
}
function key_2 () {
    kays_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays_2.setPosition(100, 550)
    kays_2.say("Key 2")
    kays_2.setKind(SpriteKind.key2)
}
function Key_unlocks () {
    // If the score is 3, the wall that was locked
    // previously is now walk-able
    if (info.score() == 3) {
        scene.setTile(3, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, false)
        scene.setTile(4, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
    } else {
        scene.setTile(3, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, true)
        scene.setTile(4, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    }
}
function key_3 () {
    kay_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_3.setPosition(500, 625)
    kay_3.say("Key 3")
    kay_3.setKind(SpriteKind.key3)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 f . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . f f f f . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . f 8 8 . . . . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . f . 8 8 f f . . . . . . 
. . . . . f f 8 8 . . . . . . . . 
. . . . . . f f . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f . f f f . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . f 
. . . . . . 1 1 1 1 1 1 1 . . f 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 f f f . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 . . f . 
. . . . . . 2 2 2 2 2 2 1 . f 1 f 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d 1 1 
. . . . . . 2 2 2 2 2 2 d d f . 1 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f 8 f f f . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function Portal () {
    portall = sprites.create(img`
. . . . f f f f f f f f f f f f f . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 3 3 3 3 3 1 1 1 f . . . 
. . . . f 1 1 1 3 1 1 1 1 3 1 1 f . . . 
. . . . f 1 1 3 3 1 1 1 1 3 1 1 f . . . 
. . . . f 1 1 3 1 1 1 1 1 3 1 1 f . . . 
. . . . f 1 1 3 1 1 3 3 1 3 1 1 f . . . 
. . . . f 1 1 3 1 3 3 1 1 3 1 1 f . . . 
. . . . f 1 1 3 1 3 3 1 1 3 1 1 f . . . 
. . . . f 1 1 3 1 1 3 3 3 3 1 1 f . . . 
. . . . f 1 1 3 1 1 1 3 3 1 1 1 f . . . 
. . . . f 1 1 1 3 1 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 3 1 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 3 3 1 1 1 1 1 1 f . . . 
. . . . f 1 1 1 1 3 3 1 1 1 1 1 f . . . 
. . . . f 1 1 1 1 1 3 3 1 1 1 1 f . . . 
. . . . f 1 1 1 1 1 1 3 3 1 1 1 f . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
`, SpriteKind.portal)
    portall.setPosition(175, 300)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . d . . d d d d . . . d . . . 
. . . d d . 5 5 5 5 . . d d . . . 
. . . . d 5 5 5 5 5 5 d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 f f . . . . . . . 
. . . . . . f f . . . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d . d . . . 
. . . d . . 5 5 5 5 . d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 2 2 2 2 2 2 . . f 1 . 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . 1 1 
. . . . . 2 2 2 2 2 2 2 2 d . 1 1 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . d . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 f f f . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
let portall: Sprite = null
let kays: Sprite = null
let kays_2: Sprite = null
let Carlos: Sprite = null
let Villan: Sprite = null
let kay_3: Sprite = null
beginning_credits()
main_character()
background()
// This will call the functions that I create
bad_guy()
key_1()
key_2()
key_3()
// This sets the score to 0
info.setScore(0)
// This starts the user's lives as 5
info.setLife(5)
let level = 1
Portal()
game.onUpdate(function () {
    if (level == 2) {
        lEvel_2()
    }
})
game.onUpdate(function () {
    Key_unlocks()
})
forever(function () {
    // This will play the background music forever.
    music.playMelody("E B C5 A B G A F ", 120)
})
