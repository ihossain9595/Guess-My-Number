"use strict";

let scoreNumber = 20;
let highscoreNumber = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let setAgainBtn = document.querySelector(".again");
let setCheckBtn = document.querySelector(".check");
let setBody = document.querySelector("body");
let setNumber = document.querySelector(".number");
let setGuess = document.querySelector(".guess");
let setHighscore = document.querySelector(".highscore");

// --- Message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// --- Number
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
// --- Score
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

setAgainBtn.addEventListener("click", function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber("?");
  displayMessage("Start guessing...");
  displayScore(scoreNumber);

  setBody.style.backgroundColor = "#222";
  setNumber.style.width = "15rem";
  setGuess.value = "";
});

setCheckBtn.addEventListener("click", function () {
  const guess = Number(setGuess.value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage("Correct Number!");
    setBody.style.backgroundColor = "#60b347";
    setNumber.style.width = "30rem";
    if (scoreNumber > highscoreNumber) {
      setHighscore.textContent = scoreNumber;
      highscoreNumber = scoreNumber;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      scoreNumber--;
      displayScore(scoreNumber);
    } else {
      displayMessage("You lost the game!");
      displayScore(0);
    }
  }
});
