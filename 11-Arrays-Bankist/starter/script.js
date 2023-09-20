'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE (NOT MODIFY)
// console.log(arr.slice(2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice(-4));
// console.log('test' + arr.slice(0, -1));
// console.log(arr.slice()); //SHALLOW COPY
// console.log([...arr]);

// //SPLICE (MODIFY)
// // console.log(arr.splice(3));
// console.log(arr);
// console.log(arr.splice(2, 1));
// console.log(arr);

// //REVERSE (MODIFY)
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join(' - '));

// //AT METHOD
// const arr3 = [15, 33, 96];
// console.log(arr3[0]);
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1));

// console.log(arr3.at(-1));

// console.log('shirin'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const mov of movements) {
// for (const [i, mov] of movements.entries()) {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
//     }
// }

// console.log(`----FOR EACH METHOD----`);

// movements.forEach((mov, i, arr) => {
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
//     }
// });

// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

// const currenciesSet = new Set(['USD', 'EUR', 'GBP', 'EUR']);

// currenciesSet.forEach((value, _, set) => {
//     console.log(`${_}: ${value}`);
// });

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

// displayMovements(account1.movements);

const euroToUSD = 1.1;

const movementsUSD = movements.map(mov => mov * euroToUSD);
// console.log(movements);
// console.log(movementsUSD);

const usernameCreate = function (accArr) {
    accArr.forEach(acc => {
        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map(el => el[0])
            .join('');
        console.log(acc.userName);
    });
};

usernameCreate(accounts);
console.log(accounts);

const calcPrintBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} EURO`;
};

// calcPrintBalance(account1.movements);

//Filter Method
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdraws = movements.filter(mov => mov < 0);
console.log(withdraws);

//Reduce Method
console.log(movements);

const balance = movements.reduce((acc, mov, i, arr) => {
    console.log(acc);
    return acc + mov;
}, 0);

console.log(balance);

// Maxiumum value wirh Reduce
const maxValue = movements.reduce((maxVal, mov) => {
    console.log(`maxVal:${maxVal} mov:${mov}`);
    if (mov > maxVal) {
        return mov;
    } else {
        return maxVal;
    }
}, movements[0]);
console.log(maxValue);

const calcDisplaySummary = function (movements) {
    const income = movements
        .filter(mov => mov > 0)
        .reduce((sum, mov) => sum + mov, 0);
    console.log(income);
    labelSumIn.textContent = `${income}€`;

    const outcome = movements
        .filter(move => move < 0)
        .reduce((sum, mov) => sum + mov, 0);
    console.log(outcome);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = movements
        .filter(mov => mov > 0)
        .map(mov => (mov * 1.2) / 100)
        .filter(int => int >= 1)
        .reduce((sum, int) => sum + int, 0);
    console.log(interest);
    labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);
//Find method
console.log(movements.find(mov => mov < 0)); // First withdrawal

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

let accForOf;
for (const acc of accounts) {
    if (acc.owner === 'Jessica Davis') {
        accForOf = acc;
    }
}
console.log(accForOf);

let currentAccount;
// Login function
btnLogin.addEventListener('click', e => {
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.userName === inputLoginUsername.value
    );
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // console.log(currentAccount);
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        //Display Movements
        displayMovements(currentAccount.movements);

        //Display Balance
        calcPrintBalance(currentAccount.movements);

        //Display Summary
    }
});
