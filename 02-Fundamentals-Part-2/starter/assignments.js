'use strict'
console.log('\n-------------------------Assignments-------------------------\n\n');

// Functions

const country = 'Norway';
const population = 5;
const capitalCity = 'Oslo';

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const turkey = describeCountry('Turkey', 88, 'Ankara');
const usa = describeCountry('USA', 331, 'Washington');
const norway = describeCountry('Norway', 5, 'Oslo');

console.log(turkey);
console.log(usa);
console.log(norway);


// Function Declarations vs. Expressions
console.log('\nFunction Declaration');
const worldPopulation = 7900;
function percentageOfWorld1 (population){
    return population/worldPopulation*100;
}
const turkeyPercentage1 = percentageOfWorld1(88);
const usaPercentage1 = percentageOfWorld1(331);
const norwayPercentage1 = percentageOfWorld1(5);

console.log(`Turkey: ${turkeyPercentage1}%`);
console.log(`USA: ${usaPercentage1}%`);
console.log(`Norway: ${norwayPercentage1}%`);

console.log('\nFunction Expression');
const percentageOfWorld2 = function (population){
    return population/worldPopulation*100;
}

const turkeyPercentage2 = percentageOfWorld2(88);
const usaPercentage2 = percentageOfWorld2(331);
const norwayPercentage2 = percentageOfWorld2(5);

console.log(`Turkey: ${turkeyPercentage2}%`);
console.log(`USA: ${usaPercentage2}%`);
console.log(`Norway: ${norwayPercentage2}%`);


// Arrow Functions
console.log('\nArrow Function');
const percentageOfWorld3 = population => {
    return population/worldPopulation*100;
}
const turkeyPercentage3 = percentageOfWorld3(88);
const usaPercentage3 = percentageOfWorld3(331);
const norwayPercentage3 = percentageOfWorld3(5);

console.log(`Turkey: ${turkeyPercentage3}%`);
console.log(`USA: ${usaPercentage3}%`);
console.log(`Norway: ${norwayPercentage3}%`);

// Functions Calling Other Functions

const describePopulation = (country ,population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 850));
console.log(describePopulation("Norway", 10));

// Introduction to Arrays

const populations = new Array(10, 88, 331, 5);
console.log(populations.length == 4 );

const percentages = new Array(percentageOfWorld1(10), percentageOfWorld1(88), percentageOfWorld1(331), percentageOfWorld1(5));
console.log(percentages);

// Basic Array Operationss
const neighbours = ['Russia', 'Iran', 'Armenia', 'Georgia', 'Turkey'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(neighbours.includes('Germany')){
    console.log('Probably not a central European country :D');
}

// Introduction to Objects
const myCountry = {
    country: 'Russia',
    capital: 'Moscow',
    language: 'russian',
    population: 143,
    neighbours: ['Azerbaijan', 'Belarus', 'China', 'Estonia', 'Finland', 'Georgia', 'Kazakhstan', 'North Korea', 'Latvia', 'Lithuania', 'Mongolia', 'Norway', 'Poland', 'Ukraine'],

    // Object Methods
    describe: function (){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },

}

// Dot vs. Bracket Notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Iteration: The for Loop

for(let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting`);
}

// Looping Arrays, Breaking and Continuing
const percentages2 = [];

for(let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
    console.log(percentages[i], percentages2[i]);
    if (percentages[i] !== percentages2[i]){
        console.log('Failed');
    }
}

// Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++){
    for(let n = 0; n < listOfNeighbours[i].length; n++){
        console.log(`Neighbour: ${listOfNeighbours[i][n]}`);
    }
}

// The while loop

const percentages3 = [];

let i = 0;
while(i < populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    console.log(percentages[i], percentages3[i]);
    if (percentages[i] !== percentages3[i]){
        console.log('Failed');
    }
    i++;
}