let timerInterval;
let elapsedTime = 0;
let paused = false;

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')
    );
}

function updateTimer() {
    elapsedTime += 1000;
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!paused) {
        elapsedTime = 0;
        document.getElementById('timer').textContent = '00:00:00';
    }
    paused = false;
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    paused = true;
    clearInterval(timerInterval);
}

function stopTimer() {
    paused = false;
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('timer').textContent = '00:00:00';
}