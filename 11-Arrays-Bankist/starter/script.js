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

const displayMovements = function (movements, sort = false) {
    let finMoves = sort ? movements.slice().sort((a, b) => a - b) : movements;

    containerMovements.innerHTML = '';
    finMoves.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
                <div class="movements__value">${mov}€</div>
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

const calcPrintBalance = function (account) {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${account.balance} EURO`;
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

const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter(mov => mov > 0)
        .reduce((sum, mov) => sum + mov, 0);
    console.log(income);
    labelSumIn.textContent = `${income}€`;

    const outcome = acc.movements
        .filter(move => move < 0)
        .reduce((sum, mov) => sum + mov, 0);
    console.log(outcome);
    labelSumOut.textContent = `${Math.abs(outcome)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(mov => (mov * acc.interestRate) / 100)
        .filter(int => int >= 1)
        .reduce((sum, int) => sum + int, 0);
    console.log(interest);
    labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);
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
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();
        // console.log(currentAccount);
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;
        updateUI(currentAccount);
    }
});

const updateUI = function (acc) {
    //Display Movements
    displayMovements(acc.movements);

    //Display Balance
    calcPrintBalance(acc);

    //Display Summary
    calcDisplaySummary(acc);
};

//Money Transfer
btnTransfer.addEventListener('click', e => {
    e.preventDefault();

    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => inputTransferTo.value === acc.userName
    );

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc.userName !== currentAccount.userName
    ) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
        inputTransferAmount.value = '';
        inputTransferTo.value = '';
        inputTransferTo.blur();
    }
});

//Close account
btnClose.addEventListener('click', e => {
    e.preventDefault();
    if (
        inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        inputCloseUsername.value = inputClosePin.value = '';
        inputClosePin.blur();

        const index = accounts.findIndex(
            acc => acc.userName === currentAccount.userName
        );
        accounts.splice(index, 1);
        // console.log(accounts);
        containerApp.style.opacity = 0;
    }
});

//Get loan

btnLoan.addEventListener('click', e => {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (
        amount > 0 &&
        currentAccount.movements.some(mov => mov >= amount * 0.1)
    ) {
        currentAccount.movements.push(amount);
        inputLoanAmount.value = '';
        updateUI(currentAccount);
    }
});

//Every method
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 3));

//  Flat and Flatmap
const arr4 = [[4, 6, 7], 9, 10];
console.log(arr4);
console.log(arr4.flat());

const arr5 = [[1, [2, 3]], 4, 5, [6, 7]];
console.log(arr5.flat());
console.log(arr5.flat(2));

const accountMovement = accounts.map(acc => acc.movements);
const allMov = accountMovement.flat();
const overAllBalance = allMov.reduce((acc, mov) => acc + mov);
console.log(overAllBalance);

//Chained
const overAllBalance2 = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov);
console.log(overAllBalance2);

// Sorting
const owners = ['Jack', 'James', 'Nick', 'Bella'];
owners.sort();
console.log(owners);

const movs = [11, 45, 890, -120, 4556, 120, -950];
// movs.sort();
// console.log(movs);  //[-120, -950, 11, 120, 45, 4556, 890]

movs.sort((a, b) => a - b);
console.log(movs);

let sorted = false;
btnSort.addEventListener('click', e => {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

// Filling Arrays + Fill method
console.log([1, 2, 3, 4, 5, 6]);
console.log(new Array(1, 2, 3, 4, 5));

const x = new Array(6);
console.log(x);

const arr6 = new Array(7);

console.log(x.map(() => 5)); // returns empty

console.log(x.fill(5));

console.log(arr6.fill(5, 0, 2)); // [5, 5, empty × 5]

// Array.from
const y = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(y);

const z = Array.from({ length: 6 }, () => 4);
console.log(z);

const rndmDice = Array.from({ length: 100 }, (_, i) =>
    Math.trunc(Math.random() * 6 + 1)
);

console.log(rndmDice);

//NodeList to Array
labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    console.log(movementsUI2);
});

//More practice arrays

//1. Sum of all deposits
const bankDepositsSum = accounts
    .flatMap(acc => acc.movements)
    .filter(el => el > 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositsSum);

//2.
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .filter(el => el >= 1000).length;

console.log(numDeposits1000);

const numDeposits1000Reduce = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000Reduce);

//3.
const { deposits2, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sum, cur) => {
            sum[cur > 0 ? 'deposits2' : 'withdrawals'] += cur;
            return sum;
        },
        { deposits2: 0, withdrawals: 0 }
    );

console.log(deposits2, withdrawals);

//4.
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = [
        'a',
        'an',
        'the',
        'and',
        'but',
        'or',
        'on',
        'in',
        'with',
    ];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (exceptions.includes(word) ? word : capitalize(word)))
        .join(' ');
    return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title BUT NOT too lONG'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
