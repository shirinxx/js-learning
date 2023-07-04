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
console.log('');
const worldPopulation = 7900;
function percentageOfWorld1 (population){
    return population/worldPopulation*100;
}
const turkeyPercentage = percentageOfWorld1(88);
const usaPercentage = percentageOfWorld1(331);
const norwayPercentage = percentageOfWorld1(5);

console.log(`Turkey: ${turkeyPercentage}%`);
console.log(`USA: ${usaPercentage}%`);
console.log(`Norway: ${norwayPercentage}%`);

