const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const displayMillseconds = document.getElementById('millseconds');
const displaySeconds = document.getElementById('seconds');
const displayMinutes = document.getElementById('minutes');


let millseconds = 00;
let seconds = 00;
let minutes = 00;
let interval;


startBtn.onclick = function () {

  clearInterval(interval);
  interval = setInterval(startTimer, 10)

};


function startTimer() {
  millseconds++

  displayMillseconds.innerHTML = millseconds
  displaySeconds.innerHTML = '0' + seconds
  displayMinutes.innerHTML = '0' + minutes

  if (millseconds >= 100) {
    millseconds = 00
    seconds++
  }

  if (seconds > 9) {
    displaySeconds.innerHTML = seconds
  }

  if (seconds >= 60) {
    seconds = 0
    minutes++
  }

  if (minutes > 9) {
    displayMinutes.innerHTML = minutes
  }

}

stopBtn.onclick = function () {
  clearInterval(interval)
};

resetBtn.onclick = function () {

  clearInterval(interval);
  millseconds = 00;
  seconds = 00;
  minutes = 00;

  displayMillseconds.innerHTML = '0' + millseconds
  displaySeconds.innerHTML = '0' + seconds
  displayMinutes.innerHTML = '0' + minutes

}