define(['./lib/snake', './lib/apple'], function (snake, apple) {
    let cInfo;
    let ctx;
    let _info;
    let eaten = false;
    let score = 1;
    /** snke info */
    let snakeStatus = {
        width: 20,
        height: 20,
        pos: {
            x: null,
            y: null
        }
    };
    /** apple info */
    let apples = {
        width: 11,
        height: 11,
        pos: {
            x: null,
            y: null
        }
    };
    function clear() { /**reset for render */
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
        clear();
        draw();
        window.requestAnimationFrame(loop);
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
    /** detects if snake is at apple */
    /* WARNING: must have only one apple each time or collision wont work */
    function collision() {
        if (
            apples.pos.x < snakeStatus.pos.x + snakeStatus.width && apples.pos.x + apples.width > snakeStatus.pos.x &&
            apples.pos.y < snakeStatus.pos.y + snakeStatus.height && apples.pos.y + apples.height > snakeStatus.pos.y
        ) {
            if (eaten === false) { // not being used yet
                eaten = true;
                console.log('Snake has eaten the apple');
            }
            _info = apple.destroy();
            apples.pos = _info.pos;
            eaten = _info.eaten;
            document.getElementById('score').innerHTML = score++;
        }
    }
    return {
        init: function (c) {
            ctx = c.ctx;
            cInfo = {
                canvas: c.canvas,
                width: c.width,
                height: c.height,
                ctx: c.ctx
            };
            apples.pos = apple.init(c.ctx);
            // console.log(apples);
            snake.init(c.ctx);
            loop();
        },
        input: function (e) {
            snake.move(e);
        }
    };
});
