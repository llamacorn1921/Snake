define(function () {
	const apple = {
		// apple size
		width: 13,
		height: 13,
	};
	let ctx;
	let pos;

	function genPos() {
		// generate random position
		let _pos = Math.floor(Math.random() * 400);
		// if (225 < pos && pos < 285) {
		// 	genPos();
		// } else {
		return _pos;
		// }
	}
	function newApple() {
		pos = {
			x: genPos(),
			y: genPos(),
		};
	}

	return {
		init: function (c) {
			ctx = c;
			pos = {
				x: genPos(),
				y: genPos(),
			};
			let info = {
				width: apple.width,
				height: apple.height,
				pos: {
					x: pos.x,
					y: pos.y,
				},
			};
			c.fillRect(info.pos.x, info.pos.y, apple.width, apple.height);
			console.log('Apple Script init loaded');
			return info;
		},
		draw: function () {
			ctx.fillStyle = '#ff0000';
			ctx.fillRect(pos.x, pos.y, apple.width, apple.height);
		},
		destroy: function () {
			// will be used when snake eats one
			ctx.clearRect(pos.x, pos.y, apple.width, apple.height);
			newApple();
			return { pos: pos, eaten: false };
		},
	};
});
