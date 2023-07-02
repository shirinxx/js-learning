// Values adn Variables
// let country = 'AZE';
// let continent = 'Asia';
let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);


// Data Types
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// let, const and var
language = 'azerbaijani';
const country = 'Azerbaijan';
const continent = 'Asia';
const isIsland = false;
// isIsland = true;


// Basic Operators
let halfPopulation = population / 2;
console.log('In each half ' + halfPopulation);
let newPopulation = population++;
console.log(newPopulation);

let finlandPopulation = 6;
console.log('Finland has more population than Azerbaijan is', finlandPopulation > population);

let averagePop = 33;
console.log(population > averagePop);

const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);


// Strings and Template Literals
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description2)


// Taking Decisions: if / else Statements
if(population > 33) {
    console.log(`${country}'s population is above average`);
}else{
    console.log(`${country}'s population is ${33 - population} million below average`);
}


// Type Conversion and Coercion
const arg1 = 5 + 6 + '4' + 9 - 4 - 2;

console.log('9' -  '5'); // predict 4
console.log(typeof('19' - '13' + '17')); // predict 617
console.log('123' < 57); // predict false
console.log(arg1); // predict 1143 typeof number

// Equality Operators: == vs. ===
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if( numNeighbours === 1 ){
    console.log('Only 1 border!');
}
else if( numNeighbours > 1 ){
    console.log('More than 1 border');
}
else{
    console.log('No borders');
}