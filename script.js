'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

let score = 20;
let highscore = 0;

// function for show messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input or zero
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // when players win
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    // for high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📈 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  console.log(guess);
});

// for Again button
document.querySelector('.again').addEventListener('click', function () {
  // because of input we write .value instead of .textContent
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.number').textContent = '?';
});
