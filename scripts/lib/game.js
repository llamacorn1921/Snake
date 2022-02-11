define(['jquery', './lib/snake', './lib/apple'], function ($, snake, apple) {
    let cInfo;
    let ctx;
    let _info;
    let eaten = false;
    let score = 1;
    let snakeStatus = {
        width: 20,
        height: 20,
        pos: {
            x: null,
            y: null
        }
    };
    let apples = {
        width: 5,
        height: 5,
        pos: {
            x: null,
            y: null
        }
    };

    function clear() {
        ctx.clearRect(0, 0, cInfo.width, cInfo.height);
    }
    function draw() {
        let _snake = snake.draw();
        snakeStatus.pos.x = _snake.x;
        snakeStatus.pos.y = _snake.y;
        collision();
        apple.draw();

    }
    function loop() {
        clear();
        draw();
        window.requestAnimationFrame(loop);
    }
    document.getElementById('reset').addEventListener('click', () => {
        snake.reset();
        _info = apple.destroy();
        apples.pos = _info.pos;
        eaten = _info.eaten;
        console.log(_info);
        score = 1;
        $("#score").text(0);
    });

    function collision() {
        if (
            apples.pos.x < snakeStatus.pos.x + snakeStatus.width && apples.pos.x + apples.width > snakeStatus.pos.x &&
            apples.pos.y < snakeStatus.pos.y + snakeStatus.height && apples.pos.y + apples.height > snakeStatus.pos.y
        ) {
            if (eaten === false) {
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
        },
        input: function (e) {
            snake.move(e);
        }
    };
});
