'use strict';

// Create secret number
let randNum = Math.floor(Math.random() * 20) + 1;

// Create score and highscore variable
let score = 20;
let highscore = 0;

// Functions
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const styleBackgroundBody = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const styleWidthNumber = width => {
  document.querySelector('.number').style.width = width;
};

const displayHighscore = highscore => {
  document.querySelector('.highscore').textContent = highscore;
};

// Handling click events
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Check if number is valid
  if (guess < 1 || guess > 20) {
    displayMessage('⛔ No valid number!');
  }

  // Check if number is correct
  else if (guess === randNum) {
    displayMessage('🎉 Correct number!');
    displayNumber(randNum);

    // Change styles
    styleBackgroundBody('#60b347');
    styleWidthNumber('30rem');

    // Implement highscore
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }

  // Check if guess isn't correct
  else if (guess !== randNum) {
    if (score > 1) {
      displayMessage(guess > randNum ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  // Reset variables
  score = 20;
  randNum = Math.floor(Math.random() * 20) + 1;

  // Reset conditions
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';

  // Reset styles
  styleBackgroundBody('#222');
  styleWidthNumber('15rem');
});
