define(function () {
	let dt = null;
	function displayText() {
		document.getElementById('snakeDis').innerHTML = dt;
	}
	const def = {
		// default pos
		x: 250,
		y: 250,
	};
	let snake = {
		// start pos and size
		pos: {
			x: 250,
			y: 250,
		},
		width: 5,
		height: 5,
	};
	let alive = true;
	let dead = false;
	let deathMessage = false;
	/**@type {string} */
	let direction = null;
	function getDirection() {
		if (alive) {
			switch (direction) {
				case 'up':
					return { x: 0, y: -5 };
				case 'down':
					return { x: 0, y: 5 };
				case 'left':
					return { x: -5, y: 0 };
				case 'right':
					return { x: 5, y: 0 };
				case null:
					return { x: 0, y: 0 };
				default:
					break;
			}
		}
	}
	function destroy() {
		// alive = false;
		dead = true;
		if (!deathMessage) {
			dt = 'You killed the 🐍!!! YOU MONSTER';
			deathMessage = true;
		}
	}
	function testLife() {
		switch (alive) {
			case snake.pos.y < 0:
				alive = false;
				destroy();
				break;
			case snake.pos.y > 500:
				alive = false;
				destroy();
				break;
			case snake.pos.x < 0:
				alive = false;
				destroy();
				break;
			case snake.pos.x > 500:
				alive = false;
				destroy();
				break;
		}
	}
	function draw() {
		// draw snake on each 'frame'
		let pos;
		if (alive) {
			ctx.fillStyle = '#006400';
			pos = getDirection();
			ctx.fillRect(
				(snake.pos.x += pos.x),
				(snake.pos.y += pos.y),
				snake.width,
				snake.height
			);
			dt = `X: ${snake.pos.x}, Y: ${snake.pos.y} | Direction: ${direction}`;
			testLife();
		}
		if (dead) {
			ctx.fillStyle = '#660000';
			ctx.fillRect(snake.pos.x, snake.pos.y, snake.width, snake.height);
		}
		
	}
	return {
		// functions game script has access to
		init: function (c) {
			// sets ctx and creates snake
			ctx = c;
			c.fillRect(snake.pos.x, snake.pos.y, snake.width, snake.height);
			console.log('🐍');
		},
		draw: function () {
			//  draws snake
			draw();
			displayText();
			return { x: snake.pos.x, y: snake.pos.y }; // updates snakes pos in game file
		},
		reset: function () {
			// resets snakes
			dead = false;
			deathMessage = false;
			direction = null;
			dt = '🐍 RESURRECTION!!!!!!!!!!! ';
			snake.pos.x = def.x;
			snake.pos.y = def.y;
			return { x: snake.pos.x, y: snake.pos.y };
		},
		move: function (key) {
			if (!dead) {
				alive = true;
			}
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
