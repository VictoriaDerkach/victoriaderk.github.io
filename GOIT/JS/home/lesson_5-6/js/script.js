function Timer() {
	var self = this;
	var msecs = 0;
	var secs = 0;
	var mins = 0;
	var hours = 0;
	var interval = null;

	
	self._timer = function() {

		msecs += 4;
		msec.innerHTML = msecs;

		if (msecs > 999) {
			msecs = 0;
			secs++;
			sec.innerHTML = (secs.toString().length == 1) ? '0' + secs : secs;
		}

		if (secs > 59) {
			secs = 0;
			mins++;
			min.innerHTML = (mins.toString().length == 1) ? '0' + mins : mins;
		}

		if (mins > 59) {
			mins = 0;
			hours++;
			hour.innerHTML = (hours.toString().length == 1) ? '0' + hours : hours;
		}
	}
	self.startTimer = function() {
		if (interval == null) {
			interval = setInterval(self._timer, 100);
		}
	}
	self.pauseTimer = function () {
		clearInterval(interval);
		interval = null;
	}
	self.resetTimer = function() {
		self.pauseTimer();
		hour.innerHTML = '00';
		min.innerHTML = '00';
		sec.innerHTML = '00';
		msec.innerHTML = '000'

		secs = 0;
		mins = 0;
		hours = 0;
		msecs = 0;
	}
}

var timer1 = new Timer();

timer1.hour = document.getElementById("hour");
timer1.min = document.getElementById("min");
timer1.sec = document.getElementById("sec");
timer1.msec = document.getElementById("msec");

timer1.resetTimer();

var btnStart = document.getElementById("btnStart");
btnStart.addEventListener("click", timer1.startTimer);

var btnPause = document.getElementById("btnPause");
btnPause.addEventListener("click", timer1.pauseTimer);

var btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", timer1.resetTimer);

