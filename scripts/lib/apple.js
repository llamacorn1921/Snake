define(function () {
	const apple = { // apple size
		width: 5,
		height: 5
	};
	let ctx;
	let pos;
	function genPos() { // generate random position
		let _pos = Math.floor(Math.random() * 400);
		// if (225 < pos && pos < 285) {
		// 	genPos();
		// } else {
			return _pos;
		// }
	}
	function newApple() {
		console.log('new pos');
		pos = {
			x: genPos(),
			y: genPos()
		};
	}
	
	return {
		init: function (c) {
			ctx = c;
				pos = {
					x: genPos(),
					y: genPos()
				};
				c.fillRect(pos.x, pos.y, apple.width, apple.height);

			return pos;

		},
		draw: function () {
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(pos.x, pos.y, apple.width, apple.height);
		},
		destroy: function () { // will be used when snake eats one
			console.log('apple destory');
			ctx.clearRect(pos.x, pos.y, apple.width, apple.height);
			newApple();
			return { pos: pos, eaten: false };
		}
	};
});
