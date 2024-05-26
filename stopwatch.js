let timer;
let time = 0;
let running = false;

function startPause() {
  if (!running) {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startPauseButton").innerText = "Pause";
    running = true;
  } else {
    clearInterval(timer);
    document.getElementById("startPauseButton").innerText = "Resume";
    running = false;
  }
}

function updateDisplay() {
  time += 10;
  let minutes = Math.floor(time / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor((time % 1000) / 10);

  document.getElementById("display").innerText = 
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds + ":" +
    (milliseconds < 10 ? "0" : "") + milliseconds;
}

function reset() {
  clearInterval(timer);
  time = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startPauseButton").innerText = "Start";
  running = false;
}
