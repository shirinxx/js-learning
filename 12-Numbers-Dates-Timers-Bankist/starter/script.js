'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-09-08T14:11:59.604Z',
    '2023-09-27T17:01:17.194Z',
    '2023-10-15T23:36:17.929Z',
    '2023-10-16T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-10-14T18:49:59.371Z',
    '2023-10-15T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatDate = date => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(date, new Date());
  // console.log(dayPassed);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${dayPassed} Days Ago`;

  const movDay = `${date.getDate()}`.padStart(2, 0);
  const movMonth = `${date.getMonth() + 1}`.padStart(2, 0);
  const movYear = date.getFullYear();

  return `${movDay}/${movMonth}/${movYear}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const formattedMov = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: 'USD',
    }).format(mov);

    const date = new Date(acc.movementsDates[i]);
    const movDate = new Intl.DateTimeFormat(acc.locale).format(date);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${movDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = () => {
  let time = 3;

  setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  }, 1000);
};

startLogoutTimer();
///////////////////////////////////////
// Event handlers
let currentAccount;

//FAKE USER Login
currentAccount = account1;
updateUI(account1);
containerApp.style.opacity = 100;

const nowDate = new Date();
// const normalDate = nowDate.toDateString();
// labelDate.textContent = `${normalDate}`;

// const nowDay = `${nowDate.getDate()}`.padStart(2, 0);
// const nowMonth = `${nowDate.getMonth() + 1}`.padStart(2, 0);
// const nowYear = nowDate.getFullYear();
// const nowHour = nowDate.getHours();
// const nowMin = nowDate.getMinutes();
// labelDate.textContent = `${nowDay}/${nowMonth}/${nowYear} ${nowHour}:${nowMin}`;

const optionsDate = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};

labelDate.textContent = new Intl.DateTimeFormat('tr-TR', optionsDate).format(
  nowDate
);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const nowDate = new Date();
    // const normalDate = nowDate.toDateString();
    // labelDate.textContent = `${normalDate}`;

    // const nowDay = `${nowDate.getDate()}`.padStart(2, 0);
    // const nowMonth = `${nowDate.getMonth() + 1}`.padStart(2, 0);
    // const nowYear = nowDate.getFullYear();
    // const nowHour = `${nowDate.getHours()}`.padStart(2, 0);
    // const nowMin = `${nowDate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${nowDay}/${nowMonth}/${nowYear} ${nowHour}:${nowMin}`;

    const optionsDate = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      optionsDate
    ).format(nowDate);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Adding Transfer Dates
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Adding Transfer Dates
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(23 === 23.0);

console.log(0.1 + 0.2);

console.log(Number('23'));
console.log(+'23');

console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e34'));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat(' 3.5rem  '));

console.log(Number.isNaN(23)); //false
console.log(Number.isNaN('45')); //false
console.log(Number.isNaN(+'45')); //false
console.log(Number.isNaN(+'45x')); //true
console.log(Number.isNaN(24 / 0)); //false

console.log(Number.isFinite(24)); //true
console.log(Number.isFinite('24')); //false
console.log(Number.isFinite(+'20x')); //false
console.log(Number.isFinite(23 / 0)); //false

// Math and rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(12, 67, 34, 2, 44, '100', 77));
console.log(Math.max(12, 67, 34, 2, 44, '100px', 77));

console.log(Math.min(12, 67, 34, 2, 44, 77));

console.log(Math.PI * Number.parseInt('10px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(5, 9));

//Rounding Integers
console.log(Math.round(25.3));
console.log(Math.round(25.9));

console.log(Math.ceil(25.9));
console.log(Math.ceil(25.1));

console.log(Math.floor(25.1));
console.log(Math.floor(25.1));

console.log(Math.trunc(-34.7));
console.log(Math.floor(-34.7));

console.log((2.7).toFixed(0));
console.log((3.678).toFixed(1));
console.log((2.7).toFixed(4));
console.log(+(2.7).toFixed(2));

//Date and time
const now = new Date();
console.log(now);

console.log(new Date('Oct 16 2023 18:07:40'));
console.log(account1.movementsDates[0]);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(0));
console.log(new Date(5 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getDate());
console.log(future.toISOString());
console.log(future.toDateString());

future.setFullYear(2036);
console.log(future);

console.log(new Date(Date.now()));

const optionsNum = {
  style: 'unit',
  // currency: 'EUR',
  unit: 'meter-per-hour',
  // useGrouping: false,
};

const testNumber = 12345678.987;
console.log(
  'US: ',
  new Intl.NumberFormat('en-US', optionsNum).format(testNumber)
);
console.log(
  'GB: ',
  new Intl.NumberFormat('en-GB', optionsNum).format(testNumber)
);
console.log(
  'GER: ',
  new Intl.NumberFormat('de-DE', optionsNum).format(testNumber)
);
console.log(
  'TUR: ',
  new Intl.NumberFormat('tr-TR', optionsNum).format(testNumber)
);

const ingridents = ['pineapple', 'sossige'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Your order with ${ing1}, ${ing2} is ready`);
  },
  3000,
  ...ingridents
);

if (ingridents.includes('pineapple')) clearTimeout(pizzaTimer);

// setInterval(() => {
//   const date = new Date();
//   console.log(date);
// }, 3000);

// setInterval(() => {
//   const date = new Date();
//   const sec = date.getSeconds();
//   const min = date.getMinutes();
//   const hours = date.getHours();
//   console.log(`${hours}:${min}:${sec}`);
// }, 1000);
