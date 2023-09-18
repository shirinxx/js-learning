'use-strict';

// #1
const calcAverageHumanAge = ages => {
    return ages
        .map(age => {
            if (age <= 2) {
                return 2 * age;
            } else {
                return 16 + age * 4;
            }
        })
        .filter(age => age >= 18)
        .reduce((avr, age, i, arr) => avr + age / arr.length, 0);
};
const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

const dog1Avr = calcAverageHumanAge(dogAge1);
const dog2Avr = calcAverageHumanAge(dogAge2);

console.log(dog1Avr);
console.log(dog2Avr);
