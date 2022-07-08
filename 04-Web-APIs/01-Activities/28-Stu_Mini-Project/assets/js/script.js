var wordArr = ["javascript", "function", "string"];
var secondsLeft = 10;
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

function setTime() {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
        }
    
    }, 1000);
}

startButton.addEventListener("click", function() {
    setTime();
});

function game() {
    var word = "";
    for (i = 0; i < wordArr.length; i++) {

    }
}
