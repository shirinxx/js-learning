'use-strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dog => {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
    // console.log(dog.recFood);
});
console.log(dogs);

//2.
dogs.forEach(dog => {
    if (dog.owners.includes('Sarah')) {
        console.log(
            `Sarah's dog eats too ${
                dog.curFood > dog.recFood ? 'much' : 'little'
            }`
        );
    }
});

//3.
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

//5.
console.log(
    `Whether there is any dog eating exactly the amount of food that is recommended: ${dogs.some(
        dog => dog.curFood === dog.recFood
    )}`
);

//6.
const checkEatingOkay = dog => {
    return dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
};

console.log(dogs.some(checkEatingOkay));

//7.
console.log(
    dogs.filter(dog => {
        return (
            dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
        );
    })
);

//8.
const dogsSorted = dogs.slice().sort((a, b) => {
    a.recFood - b.recFood;
});
console.log(dogsSorted);
