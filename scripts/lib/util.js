define(function() {
	const timerID = document.getElementById('timer');
	let sec = 15;
	function time (apple) {
		sec--;
		if (sec === 0) {
			sec = 15;
			apple.destory()
			timerID.innerHTML = '00:00';
		}
		timerID.innerHTML = `00:${ sec.toString().padStart(2, '0') }`;
	}

	return {
		timer: function (apple) {
			setInterval(time(apple), 1000);
		}
	}
});