define(function () {
	const displayText = document.getElementById('snakeDis'); // span tag for snake coords
	const def = {
		// default pos
		x: 250,
		y: 250,
	};
	let snake = {
		// start pos and size
		x: 250,
		y: 250,
		width: 20,
		height: 20,
	};
	let alive = false;
	let start = false;
	/**@type {string} */
	let direction = null;
	function getDirection() {

		if (alive) {
			switch (direction) {
				case 'up':
					return { x: 0, y: -1 };
				case 'down':
					return { x: 0, y: 1 };
				case 'left':
					return { x: -1, y: 0 };
				case 'right':
					return { x: 1, y: 0 };
				case null:
					return { x: 0,y: 0 };
				default:
					break;
			}
		}
	}
	function destroy() {
		alive = false;
	}

	function draw() {
		// draw snake on each 'frame'
		ctx.fillStyle = '#006400';
		let pos;
		if (alive) {
			pos = getDirection();
			ctx.fillRect(
				(snake.x += pos.x),
				(snake.y += pos.y),
				snake.width,
				snake.height
			);
		}
		// testLife();

	}
	// function update(x, y) {
	// 	// updates x or y
	// 	snake.x += x;
	// 	snake.y += y;
	// 	// posDis.innerHTML = `X: ${snake.x}, Y: ${snake.y}`; // ignore
	// }
	function run() {}
	return {
		// functions game script has access to
		init: function (c) {
			// sets ctx and creates snake
			ctx = c;
			c.fillRect(snake.x, snake.y, snake.width, snake.height);
			console.log('Snake');
		},
		draw: function () {
			//  draws snake
			draw();
			displayText.innerHTML = `X: ${snake.x}, Y: ${snake.y} | Direction: ${direction}`;
			return { x: snake.x, y: snake.y }; // updates snakes pos in game file
		},
		reset: function () {
			// resets snakes
			posID.innerHTML = 'Game Rest';
			direction = null;
			killed = false;
			snake.x = def.x;
			snake.y = def.y;
			return { x: snake.x, y: snake.y };
		},
		move: function (key) {
			alive = true;
			switch (key) {
				case 'ArrowUp':
					direction = 'up';
					break;
				case 'ArrowDown':
					direction = 'down';
					break;
				case 'ArrowLeft':
					direction = 'left';
					break;
				case 'ArrowRight':
					direction = 'right';
					break;
				default:
					break;
			}
		},
	};
});
