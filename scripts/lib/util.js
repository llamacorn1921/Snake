define(function() {
	const timerID = document.getElementById('timer');
	let app
	let sec = 15;
	function time () {
		sec--;
		if (sec === 0) {
			sec = 15;
			app.destory()
			timerID.innerHTML = '00:00';
			setTimeout(({}), 1000);
		}
		timerID.innerHTML = `00:${ sec.toString().padStart(2, '0') }`;
	}

	return {
		timer: function (apple) {
			app = apple;
			setInterval(time, 1000);
		}
	}
});