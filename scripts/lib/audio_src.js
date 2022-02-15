define(['../src/reverb'], function (r) {
	// let reverb = require.toUrl('http://reverbjs.org/reverb.js');
	// scripts\src\reverb.js
	let reverb = r;
	const audio = document.getElementById('munch');
	let context;

	function load() {
		reverb.extend(context);
		
	}
	return {
		init: function () {
			context = new AudioContext();
			console.log('Audio Script init loaded');
		},
		play: function () {
			audio.pause();
			audio.currentTime = 0.1;
			audio.play();
		}
	};
});
