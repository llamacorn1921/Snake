define(function () {
	const def = { // default pos
		x: 250,
		y: 250,
	};
	const posDis = document.getElementById('snakeCords'); // ignore
	let snake = { // start pos and size
		x: 250,
		y: 250,
		width: 20,
		height: 20,
	};
	let face = { // ignore
		eyes: {
			width: 5,
			height: 5,
		},
	};
	let ctx;
    let killed = false;
    let dead = false;
    function destroy() {
        dead = true;
    }
    function draw() { // draw snake on each 'frame'
        ctx.fillStyle = '#006400';
        ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
	}

	function update(x, y) { // updates x or y
		snake.x += x;
        snake.y += y;
		posDis.innerHTML = `X: ${snake.x}, Y: ${snake.y}`; // ignore
	}

	return { // functions game script has access to
		init: function (c) { // sets ctx and creates snake
			ctx = c;
            c.fillRect(snake.x, snake.y, snake.width, snake.height);
		},
		draw: function () { //  draws snake
            draw();
            return { x: snake.x, y: snake.y }; // updates snakes pos in game file
		},
		reset: function () { // ignore
			snake.x = def.x;
			snake.y = def.y;
            posDis.innerHTML = `X: ${snake.x}, Y: ${snake.y}`;
            return { x: snake.x, y: snake.y };
		},
        move: function (key) { // takes key input for snake movement
            // console.log(snake.x, snake.y); 
            if (!killed) {
                switch (key) {
                    case 'ArrowUp':
                        if (snake.y < 0) {
                            killed = true;
                            destroy();
                            break;
                        }
                        update(0, -5);
                        break;
                    case 'ArrowDown':
                        if (snake.y > 585) {
                            killed = true;
                            destroy();
                            break;
                        }
                        update(0, 5);
                        break;
                    case 'ArrowLeft':
                        if (snake.x < 0) {
                            killed = true;
                            destroy();
                            break;
                        }
                        update(-5, 0);
                        break;
                    case 'ArrowRight':
                        if (snake.x > 585) {
                            killed = true;
                            destroy();
                            break;
                        }
                        update(5, 0);
                        break;
                    case ' ':
                        snake.x = def.x;
                        snake.y = def.y;
                        posDis.innerHTML = `X: ${snake.x}, Y: ${snake.y}`;
                        console.log('Snake Reset');
                        break;
                    default:
                        break;
                }
            }
		},
	};
});
