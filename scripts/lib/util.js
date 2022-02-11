define(function() {
	const timerID = document.getElementById('timer');
	let sec = 15;
	function countdown () {
	}

	return {
		timer: function (apple) {
			setInterval(() => {
				sec--
				if (sec < 10) {
					
				}
				timerID.innerHTML = `00:${ sec.padStart(2, 0) }`;
				if (sec === 0) {
					sec = 15;
					apple.destroy();
				}
			}, 1000);
		}
	}
});