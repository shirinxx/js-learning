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

