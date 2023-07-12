'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 50;
// document.querySelector('.score').textContent = 40;

// document.querySelector('.guess').value = 26;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.trunc(Math.random() * 20) + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER!';
  } else if (typeof guess != 'number') {
    document.querySelector('.message').textContent = 'Wrong Type!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT NUMBER!';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'TOO HIGH!';
      document.querySelector('.score').textContent = score;
      --score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'TOO LOW!';
      document.querySelector('.score').textContent = score;
      --score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.score').textContent = 0;
    }
  }
});
