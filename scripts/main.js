requirejs.config({
	baseUrl: 'scripts',
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min',
		game: './lib/game',
    },
    waitSeconds: 5
});
require(['jquery', 'game'], function ($, game) {
	/** Test if scripts have loaded */
	const version = '0.1.31';
	const canvas = document.getElementById('scene');
	/** sets all canvas info for other scripts */
	let cInfo = { 
		canvas: canvas,
		width: canvas.offsetWidth,
		height: canvas.offsetHeight,
		ctx: canvas.getContext('2d')
	};
	$(document).ready(() => {
		$("#version").text(version);
		/** start game / send info to game files */
		game.init(cInfo);
		
		$(document).keydown((e) => {
			/** get user input */
			game.input(e.key); 
		});
    });
});
