'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Stop guessing u idiot';

document.querySelector('.guess').value = 5;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
});
