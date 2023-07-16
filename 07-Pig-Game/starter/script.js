'use strict';

// Selecting elements
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const crrScoreEL1 = document.getElementById('current--0');
const crrScoreEL2 = document.getElementById('current--1');

let crrScore1 = 0;
let crrScore2 = 0;

// Initial conditions
score1El.textContent = 0;
score2El.textContent = 0;
// diceEl.classList.remove('hidden');

// Used functions
const rollDice = function () {
    // 1. Random number 
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    // 3. Check if it is 1
    if(diceNumber !== 1){
        // Add to current score
        crrScore1 += diceNumber;
        crrScoreEL1.textContent = crrScore1;
    }
    else{
        // Switch player
    }

}

// Game logic
btnRoll.addEventListener('click', rollDice);



