'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours2 = {
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
};

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order(starterIndex, mainIndex) {
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
    openingHours2,
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

console.log(restaurant);

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

// AND vs OR short-circuit

//OR
console.log('John' || 0); // John
console.log(undefined || 0); // 0
console.log(5 || 1); // 5
console.log(null || 0 || 'ali' || undefined); // ali

//AND
console.log('Merkel' && 15); // 15
console.log('Merkel' && 0); // 0
console.log(null && 0); // null

restaurant.orderPizza && restaurant.orderPizza('alma', 'xiyar', 'pomidor');

// NULLISH ??

// restaurant.numGuests = 0;
const guest2 = restaurant.numGuests ?? 10; // 10 (restaurant.numGuests is undefined)
console.log(guest2);

restaurant.numGuests = 15;
const guest = restaurant.numGuests ?? 10; // 15
console.log(guest);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ?? 10; // 0
console.log(guest1);

console.log(allMenu);
for (const item of allMenu) console.log(item);

for (const [i, el] of allMenu.entries()) {
    console.log(`${i + 1}: ${el} `);
}

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // if openingHours exists then mon

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    // console.log(day);
    const statusRest = restaurant.openingHours[day]?.open ?? 'is closed';
    console.log(`On ${day} restaurant ${statusRest}`);
}
console.log(restaurant.openingHours);

console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.order1?.(0, 1) ?? 'Method does not exists'); //not exists

const user = [{ name: 'Shirin', email: 'test@gmail.com' }];

console.log(user[0]?.name ?? 'User not exists');

// Looping objects

const keysHours = Object.keys(restaurant.openingHours);
console.log(keysHours);
for (const i of keysHours) {
    console.log(i);
}

console.log(Object.values(restaurant.openingHours));

const entrHours = Object.entries(restaurant.openingHours);
console.log(entrHours); // Both of them
for (const [keys, val] of entrHours) {
    console.log(keys, val);
}

// Maps

const orderSet = new Set(['Pizza', 'Pasta', 'Pasta', 'Kabab', 'Pizza']);
console.log(orderSet);
console.log(new Set('Pizza'));

console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Plov')); //false

console.log(orderSet.size);

orderSet.add('Dolma');
orderSet.add('Dolma');
console.log(orderSet);

//delete
orderSet.delete('Pasta');
// orderSet.clear();
console.log(orderSet);

const orderArr = [...orderSet];
console.log(orderArr);
