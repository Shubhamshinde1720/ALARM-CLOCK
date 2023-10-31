const time = document.querySelector('#clock');
const setTime = document.querySelector('#setTime');
const audio = new Audio(
	'https://freesound.org/data/previews/316/316847_4939433-lq.mp3',
);
audio.loop = true;
let alarmTime = null; //stores date object set by userrr
let alarmTimeOut = null; //reference to setAlarm to clear it

function displayTime() {
	const date = new Date();

	const hour = formatTime(date.getHours());
	const minute = formatTime(date.getMinutes());
	const second = formatTime(date.getSeconds());

	time.innerText = `${hour}:${minute}:${second}`;
}

function formatTime(time) {
	if (time < 10) {
		return '0' + time;
	}

	return time;
}

// to save date and time selected by user
function setAlarmTime(value) {
	alarmTime = value;
	console.log(alarmTime);
}

//
function alertMessage() {
	audio.play();
	setTime.innerHTML = '';
}

//to set the alarm
function setAlarm() {
	if (alarmTime) {
		let current = new Date().getTime();
		let alarm = new Date(alarmTime).getTime();
		let alarmShow = new Date(alarmTime);
		setTime.innerHTML = ` ${alarmShow.getHours()}:${alarmShow.getMinutes()}`;

		alert('alarm set');

		if (alarm > current) {
			const timeout = alarm - current;
			alarmTimeOut = setTimeout(alertMessage, timeout);
		}
	}
}

function clearAlarm() {
	setTime.innerHTML = '';
	audio.pause();
	if (alarmTimeOut) {
		clearTimeout(alarmTimeOut);
		alert('alarm cleared');
	}
}

setInterval(displayTime, 10);
