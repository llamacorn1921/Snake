define(['./lib/snake', './lib/apple', './lib/audio'], function (
	snake,
	apple,
	audio
) {
	let cInfo;
	let ctx;
	let _info;
	let eaten = false;
	let status = true;
    let score = 1;
    let start = false;
	/** snke info */
	let snakeStatus = {};
	/** apple info */
	let apples = {};
	function clear() {
		/**reset for render */
		ctx.clearRect(0, 0, cInfo.width, cInfo.height);
	}
	function draw() {
		let _snake = snake.draw();
		snakeStatus.pos.x = _snake.x;
		snakeStatus.pos.y = _snake.y;
		collision();
		apple.draw();
	}
	/** render */
	function loop() {
		if (status) {
			clear();
			draw();
		}
		window.requestAnimationFrame(loop);
	}
	function pause() {
		if (status) {
			status = false;
			document.getElementById('pause').innerHTML = 'Resume';
		} else {
			status = true;
			document.getElementById('pause').innerHTML = 'Pause';
		}
	}
	/** sets up reset button */
	document.getElementById('reset').addEventListener('click', () => {
		snake.reset();
		_info = apple.destroy();
		apples.pos = _info.pos;
		eaten = _info.eaten;
		score = 1;
		document.getElementById('score').innerHTML = 0;
	});
	document.getElementById('pause').addEventListener('click', () => {
		pause();
	});
	/** detects if snake is at apple */
	/* WARNING: must have only one apple each time or collision wont work */
	function collision() {
		if (
			apples.pos.x < snakeStatus.pos.x + snakeStatus.width &&
			apples.pos.x + apples.width > snakeStatus.pos.x &&
			apples.pos.y < snakeStatus.pos.y + snakeStatus.height &&
			apples.pos.y + apples.height > snakeStatus.pos.y
		) {
			if (eaten === false) {
				// not being used yet
				eaten = true;
			}
			audio.play();
			_info = apple.destroy();
			apples.pos = _info.pos;
			eaten = _info.eaten;
			document.getElementById('score').innerHTML = score++;
			// cInfo.canvas
		}
	}
	return {
		init: function (c) {
			ctx = c.ctx;
			cInfo = {
				canvas: c.canvas,
				width: c.width,
				height: c.height,
				ctx: c.ctx,
			};
			apples = apple.init(c.ctx);
			console.log(apples);
			snakeStatus = snake.init(c.ctx);
            loop();
            console.log('Game Script init loaded');
		},
        input: function (e) {
            if (!start) {
                start = true;
                audio.init();
            }
			if (e === ' ') {
				pause();
			}
			snake.move(e);
		},
	};
});
