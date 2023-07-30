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


const funcExpress = function (){
    console.log(this);
}
funcExpress();

const funcArrow = () =>{
    console.log(this);
}
funcArrow();

const adam = {
    birthYear: 1999,
    calcAge: function (){
        console.log(2023 - this.birthYear);
    },
};

adam.calcAge();

const filip = {
    birthYear: 1995,
};

filip.calcAge = adam.calcAge;

filip.calcAge();

const ali = {
    firstName: 'Ali',
    birthYear: 1999,
    calcAge: function(){
        console.log(this);
        console.log(this.birthYear);

        const self = this;
        const funcExp = function(){
            console.log(`Hey born at ${self.birthYear}`);
        };
        funcExp();

        const funcArrow = () =>{
            console.log(`Hey arrow born at ${this.birthYear}`);
        }
        funcArrow();
    },
}

ali.calcAge();


const testArgFunc = function (a, b){
    console.log(a, b);

    console.log(arguments);
}

testArgFunc(8, 9);
testArgFunc(11, 12, 13, 15);