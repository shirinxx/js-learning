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

const book = wizzAir.book;

book.call(ryanAir, 456, 'Shirin Shukurov');
book.call(ryanAir, 456, 'Joni Legend');
console.log(ryanAir);

const flightData = [896, 'Mary  Cooper'];
book.call(wizzAir, ...flightData);

book.apply(ryanAir, flightData);

console.log(wizzAir);
console.log(ryanAir);
