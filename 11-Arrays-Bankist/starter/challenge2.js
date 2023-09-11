'use-strict';

// #1
const calcAverageHumanAge = function (ages) {
    return ages.map(age => {
        if (age <= 2) {
            return 2 * age;
        } else {
            return 16 + age * 4;
        }
    });
};

const dogAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogAge2 = [16, 6, 10, 5, 6, 1, 4];

const dogHumanAge1 = calcAverageHumanAge(dogAge1);
const dogHumanAge2 = calcAverageHumanAge(dogAge2);
console.log(dogHumanAge1);
console.log(dogHumanAge2);

// #2
const adultDogs1 = dogHumanAge1.filter(age => age >= 18);
const adultDogs2 = dogHumanAge2.filter(age => age >= 18);
console.log(adultDogs1);
console.log(adultDogs2);

// #3
const avrAge1 = adultDogs1.reduce(
    (avr, age, i, arr) => avr + age / arr.length,
    0
);

const avrAge2 =
    adultDogs2.reduce((avr, age, i, arr) => avr + age, 0) / adultDogs2.length;
console.log(avrAge1);
console.log(avrAge2);
