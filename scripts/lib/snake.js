define(function () {
    const posID = document.getElementById('snakeCords'); // span tag for snake coords
    const dirID = document.getElementById('snakeDir'); // span tag for snake direction
	const def = { // default pos
		x: 250,
		y: 250,
    };
	let snake = { // start pos and size
		x: 250,
		y: 250,
		width: 20,
		height: 20,
	};
    let alive = true;
    let dir = 'up';
    function setDir (d) {
        let dir = d;
        dirID.innerHTML = d;
    }
    function destroy() {
        alive = false;
        dirID.innerHTML = 'Click \'Reset\' to try again';
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
    function run () {
        while (alive) {
            switch (dir) {
                case 'up':
                    update(0, -5);
                    break;
                case 'down':
                    update(0, 5);
                    break;
                case 'left':
                    update(-5, 0);
                    break;
                case 'right':
                    update(5, 0);
                    break;
                default:
                    break;
            }
        }
    }
	return { // functions game script has access to
		init: function (c) { // sets ctx and creates snake
			ctx = c;
            c.fillRect(snake.x, snake.y, snake.width, snake.height);
            setInterval(run, 500);
		},
		draw: function () { //  draws snake
            draw();
            return { x: snake.x, y: snake.y }; // updates snakes pos in game file
		},
        reset: function () { // resets snakes
            posDis.innerHTML = "Game Rest";
            killed = false;
			snake.x = def.x;
			snake.y = def.y;
            posDis.innerHTML = `X: ${snake.x}, Y: ${snake.y}`;
            return { x: snake.x, y: snake.y };
		},
        move: function (key) { // takes key input for snake movement
            // console.log(snake.x, snake.y); 
            if (alive) {
                switch (key) {
                    case 'ArrowUp':
                        if (snake.y < 0) {
                            posDis.innerHTML = "Snake Dead";
                            destroy();
                            break;
                        }
                        setDir('up');
                        break;
                    case 'ArrowDown':
                        if (snake.y > 485) {
                            posDis.innerHTML = "Snake Dead";
                            destroy();
                            break;
                        }
                        setDir('down');
                        break;
                    case 'ArrowLeft':
                        if (snake.x < 0) {
                            posDis.innerHTML = "Snake Dead";
                            destroy();
                            break;
                        }
                        setDir('left');
                        break;
                    case 'ArrowRight':
                        if (snake.x > 485) {
                            posDis.innerHTML = "Snake Dead";
                            destroy();
                            break;
                        }
                        setDir('right');
                        break;
                    default:
                        break;
                }
            }
        }
	};
});
