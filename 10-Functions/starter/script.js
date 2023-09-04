'use strict';

const bookings = [];

const createBookings = function (
    flightNumber = 'L12H',
    price = '60USD',
    numPassengers = 1
) {
    const booking = {
        flightNumber,
        price,
        numPassengers,
    };

    console.log(booking);
    bookings.push(booking);
};

createBookings('L13H');
createBookings('L13H', '190USD');
createBookings('L13H', undefined, 5);

const flights = 'L14H';
const shirin = {
    fullName: 'Shirin Shukurov',
    passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
    passenger.fullName = 'Mr ' + passenger.fullName;
    flightNum = 'L19E';

    if (passenger.passenger === 123456789) {
        console.log('Check IN');
    } else {
        console.log('Error');
    }
};

checkIn(flights, shirin);
console.log(flights);
console.log(shirin.fullName);

//Callback functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const firstWordUpper = function (str) {
    const [first, ...others] = str.split(' ');

    return [first.toUpperCase(), ...others].join(' ');
};

console.log(firstWordUpper('Hello guys'));
console.log(oneWord('Hello guys'));

const tranformer = function (str, fn) {
    console.log(fn.name);
    return fn(str);
};

console.log(tranformer('NIce guys', firstWordUpper));

//Functions return function
const greet = function (greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    };
};

const greeterHello = greet('Hello');
const greetShirin = greeterHello('Shirin');

console.log(greetShirin);

const greetArr = greeting => {
    return name => {
        return `${greeting} ${name}`;
    };
};

console.log(greetArr('Hi')('Shirin'));

//Call and apply methods
const wizzAir = {
    airline: 'WizzAir',
    iataCode: 'WA',
    bookings: [],
    book: function (flightNum, name) {
        console.log(
            `${name} booked a flight on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

wizzAir.book(123, 'Shirin Shukurov');
wizzAir.book(123, 'Merkel');
console.log(wizzAir);

const ryanAir = {
    airline: 'RyanAir',
    iataCode: 'FR',
    bookings: [],
};

const butaAir = {
    airline: 'ButaAir',
    iataCode: 'BA',
    bookings: [],
};

const book = wizzAir.book;

book.call(ryanAir, 456, 'Shirin Shukurov');
book.call(ryanAir, 456, 'Joni Legend');
console.log(ryanAir);

const flightData = [896, 'Mary  Cooper'];
book.call(wizzAir, ...flightData);

book.apply(ryanAir, flightData);

console.log(wizzAir);
console.log(ryanAir);

// Bind Method

const bookBA = book.bind(butaAir);
const bookWA566 = book.bind(wizzAir, 566);
const bookRA = book.bind(ryanAir);

bookBA(456, 'Steave Robs');
console.log(butaAir);

bookWA566('Roman Abramovic');
console.log(wizzAir);

wizzAir.planes = 300;
wizzAir.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

wizzAir.buyPlane();
document
    .querySelector('.buy')
    .addEventListener('click', wizzAir.buyPlane.bind(wizzAir));

// Partial Appliacation
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addTaxAz = addTax.bind(null, 0.18);
console.log(addTaxAz(100));

const addTaxFunc = function (rate) {
    return function (value) {
        return value + rate * value;
    };
};

const addTaxAZ2 = addTaxFunc(0.18);
console.log(addTaxAZ2(100));

// IIFE functions
const runOnce = function () {
    console.log('Will run 1 time');
};

runOnce();

(function () {
    console.log('You wont see me again');
})();

(() => {
    console.log('This one too');
})();

{
    const privateOne = 1;
    var notPrivate = 5;
}

console.log(notPrivate);

//Closures
const secureBooking = function () {
    let passCount = 0;

    return function () {
        passCount++;
        console.log(`${passCount} is number of Passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//More closure examples
let f;

const g = function () {
    const a = 10;

    f = function () {
        console.log(a * 2);
    };
};

g();
f();

const boardPassengers = function (n, wait) {
    // const perGroup = n / 3;

    setTimeout(function () {
        console.log(
            `Boarding started with ${n} passengers in 3 groups. Each group with ${perGroup} passengers`
        );
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(100, 3);
const perGroup = 1000;
