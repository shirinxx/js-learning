'use strict';

// Selecting elements
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score1El = document.getElementById('score--0');
const score2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const crrScoreEL1 = document.getElementById('current--0');
const crrScoreEL2 = document.getElementById('current--1');


// Initial conditions
let crrScores = [0, 0];
let activeScore = 0;
let activePlayer = 0;
let playing = true;

score1El.textContent = 0;
score2El.textContent = 0;

// Used functions
const rollDice = function () {
    if(playing){
        // 1. Random number 
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
    
        // 2. Display dice
        if (diceEl.classList.contains('hidden'))
            diceEl.classList.remove('hidden');   
        diceEl.src = `dice-${diceNumber}.png`;
    
        // 3. Check if it is 1
        if(diceNumber !== 1){
            // Add to current score
            activeScore += diceNumber;
            document.getElementById(`score--${activePlayer}`).textContent = activeScore; 
        }
        else{
            // Switch player
            switchPlayer();
        }
    }
}

const holdScore = function () {
    if (playing){
        crrScores[activePlayer] += activeScore;
        document.getElementById(`current--${activePlayer}`).textContent = crrScores[activePlayer];
        if(crrScores[activePlayer] >= 100){
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
        else{
            switchPlayer();
        }
    }
}

const newGame = function() {
    crrScores = [0, 0];
    playing = true;
    activePlayer = 0;
    activeScore = 0;
    score1El.textContent = 0;
    score2El.textContent = 0;
    crrScoreEL1.textContent = 0;
    crrScoreEL2.textContent = 0;
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');

}

const switchPlayer = function () {
    activeScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = activeScore;
    activePlayer = activePlayer === 1 ? 0 : 1;
    player1El.classList.toggle('player--active');
    player2El.classList.toggle('player--active');
}

// Game logic
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);



