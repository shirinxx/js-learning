'use-strict';

const dataJulia = [3, 5, 2, 12, 7];
const dataKate = [4, 1, 15, 8, 3];

const dataJulia2 = [9, 16, 6, 8, 3];
const dataKate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
    const crrDogsJulia = dogsJulia.slice(1, 3);
    const allDogsAge = crrDogsJulia.concat(dogsKate);
    console.log(allDogsAge);
    allDogsAge.forEach((age, i) => {
        const type =
            age < 3 ? `still a puppy` : `an adult, and ${age} years old`;
        console.log(`Dog number ${i + 1} is ${type}`);
    });
};

checkDogs(dataJulia, dataKate);
console.log('-----SECOND DATA-----');
checkDogs(dataJulia2, dataKate2);
