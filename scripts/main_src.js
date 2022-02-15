requirejs.config({
	baseUrl: 'scripts',
	paths: {
		// jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min',
		jquery: './src/jquery',
		game: './lib/game',
		// reverb: './src/reverb'
    },
    waitSeconds: 5
});
require(['jquery', 'game'], function ($, game) {
	// const r = reverb.reverbjs;
	/** Test if scripts have loaded */
	const canvas = document.getElementById('scene');
	const num = document.getElementById('num');
	let online = 1;
	/** sets all canvas info for other scripts */
	let cInfo = { 
		canvas: canvas,
		width: canvas.offsetWidth,
		height: canvas.offsetHeight,
		ctx: canvas.getContext('2d')
	};
	$(document).ready(() => {
		console.log('Main Script Loaded');
		// console.log(typeof(r.reverbjs));
		num.innerHTML = online;
		game.init(cInfo);
		
		$(document).keydown((e) => {
			/** get user input */
			game.input(e.key); 
		});
    });
});
