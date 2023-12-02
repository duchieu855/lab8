//exercise 1
$("document").ready(function () {
	$("#exercise1 h2").eq(1).nextUntil("#exercise1 h6").css({ color: "red" });
});

//exercise 2

function testPalindrome(num) {
	let strNum = num.toString();
	return strNum === strNum.split("").reverse().join("");
}

$("document").ready(function () {
	$("#submit").click(function () {
		const num = $("#inputNumber").val();
		console.log(num);
		if (testPalindrome(num)) {
			alert(`Số ${num} là số thuận nghịch`);
		} else {
			alert(`Số ${num} không là số thuận nghịch`);
		}
		$("#inputNumber").val("");
	});
});

//exercise 3

function compareNums(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num1 < num2) {
		return num2;
	}
	return false;
}
$("document").ready(() => {
	$("#result").click(() => {
		const num1 = $("#num1").val(),
			num2 = $("#num2").val();
		if (compareNums(num1, num2)) {
			alert(`Số lớn nhất là ${compareNums(num1, num2)}`);
		} else {
			alert("Hai số bằng nhau");
		}
		$("#num1").val("");
		$("#num2").val("");
	});
});

// exercise 4
$("document").ready(() => {
	$("#changeBtn").click(() => {
		$("#setText").html(
			"<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>"
		);
	});
});

//exercise 5
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let timer;

$("document").ready(() => {
	$("#startStopBtn").click(() => {
		startStopWatch();
	});
});
$("document").ready(() => {
	$("#resetBtn").click(() => {
		resetWatch();
	});
});

function startStopWatch() {
	if (!isRunning) {
		timer = setInterval(updateStopwatch, 1);
		isRunning = true;
		$("#startStopBtn").text("Dừng");
	} else {
		clearInterval(timer);
		isRunning = false;
		$("#startStopBtn").text("Bắt đầu");
	}
}

function updateStopwatch() {
	seconds++;
	console.log(seconds);
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes === 60) {
		hours++;
		minutes = 0;
	}
	updateDisplay();
}

function updateDisplay() {
	$("#display").text(
		`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
	);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

function resetWatch() {
	clearInterval(timer);
	seconds = 0;
	minutes = 0;
	hours = 0;
	updateDisplay();
	$("#startStopBtn").text("Bắt đầu");
	isRunning = false;
}
