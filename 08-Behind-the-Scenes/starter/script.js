'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;
    console.log(firstName);
    let lastName = 'Shukurov';

    function printAge() {
        console.log(`${firstName} is ${age} year old.`);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const output = `Congrats ${firstName} you are millenial`;
            var millenial = true;
            console.log(output);
            const lastName = 'Shukur';
        }
        console.log(millenial);
    }
    printAge();
    console.log(lastName);

    return age;
}

const firstName = 'Shirin';
calcAge(1995);

// Hoisting in practice

console.log(me); //prints undefined
// console.log(job); //prints error
// console.log(year); // prints error

var me = 'Shirin';
let job = 'Student';
const year = 1999;

console.log(addExp); // prints undefined

console.log(addDecl(2, 6)); // it's hoisted
// console.log(addExp(2, 6)); // calls undefined heres

function addDecl(a, b) {
    return a + b;
}

var addExp = function (a, b) {
    return a + b;
};

const addArr = (a, b) => a + b;

// Example
console.log(cardNums);
if (!cardNums) deleteShoppingCart();

var cardNums = 10;

function deleteShoppingCart() {
    console.log('All cards deleted from db');
}

// console.log(this); // prints window object

const calcAge2 = function (birthYear) {
    const age = 2023 - birthYear;
    console.log(age);
    console.log(this);
};

calcAge2(1999);

const calcAge3 = birthYear => {
    const age = 2023 - birthYear;
    console.log(age);
    console.log(this);
};

calcAge3(2000);

const adam = {
    firstName: 'Adam',
    lastName: 'Shukurov',
    birthYear: 1999,
    calcAge: function () {
        console.log();
    },
};
