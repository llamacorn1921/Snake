requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min',
		game: './lib/game',
    },
    waitSeconds: 5
});
require(['jquery', 'game'], function ($, game) {
	const version = '0.1.0';
	const canvas = document.getElementById('scene');
	let cInfo = {
		canvas: canvas,
		width: canvas.offsetWidth,
		height: canvas.offsetHeight,
		ctx: canvas.getContext('2d')
	};
	$(document).ready(() => {
		$("#version").text(version);
		game.init(cInfo);
		
		$(document).keydown((e) => {
			game.input(e.key);
		});
    });
});
