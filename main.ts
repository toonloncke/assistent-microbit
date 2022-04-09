touchbit.on(touchbit.TouchPad.right, touchbit.TouchEvent.pressed, function () {
    basic.showNumber(nummer * 2)
})
touchbit.on(touchbit.TouchPad.left, touchbit.TouchEvent.pressed, function () {
    basic.showNumber(nummer / 2)
})
let nummer = 0
basic.showNumber(0)
basic.forever(function () {
	
})
