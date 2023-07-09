'use strict';

// Function declarations
const currentYear = 2023;

function calcAge(birthYear){
    return currentYear - birthYear;
}
console.log(calcAge(1999));


// Function Expression
const calcAge2 = function (birthYear){
    return currentYear - birthYear;
}

console.log(calcAge2(1999));


//Arrow function
const calcAge3 = birthYear => currentYear - birthYear;
console.log(calcAge3(1999));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = currentYear - birthYear;
    const retirement = 65 - age;
    return `${firstName} will retire in ${retirement} years`;
}
console.log(yearsUntilRetirement(1999, 'Shirin'));


// Dot vs Brecket Notation

const jonas = {
    firstName: 'Shirin',
    lastName: 'Shukurov',
    age: 24,
    job: 'engineer',
    friends: ['Joni', 'Merkel', 'Hans'],
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);