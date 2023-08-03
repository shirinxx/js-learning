'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ address, mainMenu, starterMenu, time }) {
    console.log(
      `Your ${this.starterMenu[starterMenu]} and ${this.mainMenu[mainMenu]} order will be delivered to ${address} at this time ${time}`
    );
  },

  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Here is your pizza with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPasta: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '20:00',
  mainMenu: 0,
  address: 'Azadlig prospekti',
  starterMenu: 0,
});

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping variables
[main, secondary] = [secondary, main];

console.log(main, secondary);

// Destructor from function
const [order1, order2] = restaurant.order(1, 2);

console.log(order1, order2);

// Destructuring objects

const {
  name: restName,
  openingHours: openings,
  openingHours: { sat: saturday },
  categories: catgs,
} = restaurant;

console.log(restName, openings, catgs, saturday);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating values

let a = 55;
let b = 12;

const mutateObj = { a: 5, b: 6 };

({ a, b } = mutateObj);

console.log(a, b);

// Nested objects

const {
  openingHours: {
    fri: { open: fridayOpen, close: fridayClose },
  },
} = restaurant;

console.log(fridayOpen, fridayClose);

const arr = [1, 2, 5];
console.log(...arr);

const newArr = [8, 9, ...arr];
console.log(newArr);

const newMainMenu = ['Kabab', ...restaurant.mainMenu];
console.log(newMainMenu);

const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newMenu);

const strName = 'Shirin';
console.log(...strName);

const ingridents = [
  // prompt('Enter ing1 for pizza:'),
  // prompt('Enter ing2 for pizza:'),
  // prompt('Enter ing3 for pizza:'),
];

restaurant.orderPizza(...ingridents);

//Spreding Objects
const newRestaurant = {
  ...restaurant,
  foundIn: 1986,
  name: 'Nenemin restorani',
};

console.log(newRestaurant);

//Spreading Arrays bec of RIGHT SIDE OF THE '='
const spreadArr = [9, 8, 7, ...[5, 6]];
console.log(spreadArr);

//Rest pattern bec LEFT SIDE OF THE '='\
const [catItalian, , catVegeterian, , ...allMenu] = [
  ...restaurant.categories,
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(catItalian);
console.log(catVegeterian);
console.log(allMenu);

// Rest param on objects
const { sat: saturdays, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(saturdays);

// Rest param Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 5);
add(2, 5, 7);
add(2, 5, 7, 9);

const x = [1, 2, 3, 4, 5];

add(...x);

restaurant.orderPasta('tomat', 'et', 'qatiq');
