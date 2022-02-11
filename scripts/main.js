requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: './src/jquery',
		game: './lib/game',
    },
    waitSeconds: 5
});
require(['jquery', 'game'], function ($, game) {
	const canvas = document.getElementById('scene');
	let cInfo = {
		canvas: canvas,
		width: canvas.offsetWidth,
		height: canvas.offsetHeight,
		ctx: canvas.getContext('2d')
	};
    $(document).ready(() => {
		game.init(cInfo);
		
		$(document).keydown((e) => {
			game.input(e.key);
		});
    });
});
