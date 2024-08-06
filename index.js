// Settiing some variables 
let timerInterval; 
let elaspedTime = 0; 
let paused = false; 

// Creating the format time function 
const formatTime = (ms) => {
    let totalSeconds = Math.floor(ms / 1000); 
    let hours = Math.floor(totalSeconds / 3600); 
    let minutes = Math.floor((totalSeconds % 3600) / 60); 
    let seconds = totalSeconds % 60; 

    return (
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0')
    ); 
}


// Creating the update time function 
function updateTimer() {
    elaspedTime += 1000; 
    document.getElementById('timer').textContent = formatTime(elaspedTime); 
}

// Creating the start timer function 
function startTimer() {
    if (!paused) {
        elaspedTime = 0; 
        document.getElementById('timer').textContent = "00:00:00"; 
    }

    paused = false; 
    timerInterval = setInterval(updateTimer, 1000); 
}

// Creating the pause time function 
function pauseTimer() {
    paused = true; 
    clearInterval(timerInterval); 
}

// Creating the stop timer function 
function stopTimer() {
    pasued = false; 
    clearInterval(timerInterval); 
    elaspedTime = 0; 
    document.getElementById('timer').textContent = '00:00:00'; 
}