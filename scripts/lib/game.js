define(['jquery', './lib/snake', './lib/apple'], function ($, snake, apple) {
    let cInfo;
    let ctx;
    let _info;
    let eaten = false;
    let score = 1;
    const countDown = document.getElementById('appleTime');
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
    let sec = 15;
    function timer () {
        if (sec === 0) {
            sec = 15;
            countDown.innerHTML = '00:00';
            apple.destory();
        }
        setTimeout(() => {
            sec--;
            countDown.innerHTML = `00:${ sec }`;
            timer();
        }, 1000);
    }
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
        console.log(_info);
        score = 1;
        $("#score").text(0);
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
            $('#score').text(score++);
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
            console.log(apples);
            snake.init(c.ctx);
            loop();
            timer();
        },
        input: function (e) {
            snake.move(e);
        }
    };
});
