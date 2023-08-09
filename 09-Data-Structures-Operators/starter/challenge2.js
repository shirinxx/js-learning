const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// #1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// #2
let sum = 0;
for (const iterator of Object.values(game.odds)) {
    console.log(iterator);
    sum += iterator;
}
console.log(sum / 3);

// #3
for (const [key, value] of Object.entries(game.odds)) {
    // console.log(key, value);
    const status = key === `x` ? `draw` : `victory ${game[key]}`;
    // console.log(status);
    console.log(`Odd of ${status}: ${value}`);
}

// #4
const scorers = {};
for (const goal of game.scored) {
    console.log(goal);
    scorers[goal] ? scorers[goal]++ : (scorers[goal] = 1);
}
console.log(scorers);
