'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

const inputValue = (document.querySelector('.guess').value = 23);
console.log(inputValue);

*/
const calculateNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let number = calculateNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(number);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === number) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b357';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost');
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = calculateNumber();
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
