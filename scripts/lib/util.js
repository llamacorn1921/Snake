define(['./lib/apple'], function(apple) {
	const timerID = document.getElementById('timer');
	let sec = 15;
	function time () {
		sec--;
		if (sec === 0) {
			sec = 15;
			apple.destory();
			timerID.innerHTML = '00:00';
			setTimeout(({}), 1000);
		}
		timerID.innerHTML = `00:${ sec.toString().padStart(2, '0') }`;
	}

	return {
		timer: function () {
			setInterval(time, 1000);
		}
	}
});