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
