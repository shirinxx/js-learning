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


// Initial conditions
const scores = [0, 0];
const crrScores = [0, 0];
let activePlayer = 0;

score1El.textContent = 0;
score2El.textContent = 0;

// Used functions
const rollDice = function () {
    // 1. Random number 
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    if (diceEl.classList.contains('hidden'))
        diceEl.classList.remove('hidden');   
    diceEl.src = `dice-${diceNumber}.png`;

    // 3. Check if it is 1
    if(diceNumber !== 1){
        // Add to current score
        if(!activePlayer){
            scores[0] += diceNumber;
            score1El.textContent = scores[0];
        }
        else{
            scores[1] += diceNumber;
            score2El.textContent = scores[1];
        }
    }
    else{
        // Switch player
        scores[activePlayer] = 0;
        score1El.textContent = scores[0];
        score2El.textContent = scores[1];
        activePlayer = activePlayer ? 0 : 1;
    }

}

const holdScore = function () {
    crrScores[activePlayer] += scores[activePlayer];
    scores[activePlayer] = 0;
    if (!activePlayer){
        crrScoreEL1.textContent = crrScores[activePlayer];
        score1El.textContent = 0;
    }
    else{
        crrScoreEL2.textContent = crrScores[activePlayer];
        score2El.textContent = 0;
    }
    activePlayer = activePlayer ? 0 : 1;
}

// Game logic
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);



