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
    '2023-05-08T14:11:59.604Z',
    '2023-05-27T17:01:17.194Z',
    '2023-11-20T23:36:17.929Z',
    '2023-11-22T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-11-05T12:01:20.894Z',
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

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 100;

      // log out user
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    // Decrese 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the  timer every second
  tick(); // want logout immedietely after timer reach to 0s
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// Fake always logged-in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',

      // month: 'numeric': 11
      // month: '2-digit': 11
      // month: 'long': November
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale); // en-US

    // en-US format => Month / Day / Year
    // en-GB format => Day / Month / Year

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // Due to Zerobase, need to + 1
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Clear old Timer
    if (timer) clearInterval(timer);
    // Start Timer again when login
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // Using Math.floor to rounding down for any decimaals path

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
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

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Converting and Checking Numbers-------

console.log(23 === 23.0);

// Base10 => 0 to 9
// Base2 => 0 to 1
console.log(0.1 + 0.2); // 0.30000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Convert String to Number
console.log(Number('23'));
console.log(+'23'); // another way convert to number

// Parsing (Number.parseInt('String', Base10/Base2))
console.log(Number.parseInt('30px', 10)); // 30 => work
console.log(Number.parseInt('px30', 10)); // NaN => not work
console.log(Number.parseInt('30px', 2)); // NaN => not work
console.log(Number.parseInt('px30', 2)); // NaN => not work

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5
// console.log(parseFloat('2.5rem')); // 2.5

// Checking if value is NaN (value)
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false (Infinity => Not NaN)

// Checking if value is number
console.log(Number.isFinite(20)); // true (it's number)
console.log(Number.isFinite('20')); // false (itn't number)
console.log(Number.isFinite(+'20X')); // false (itn't number)
console.log(Number.isFinite(20 / 0)); // false (itn't number)

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Math and Rounding-------

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI); // 3.141592...
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592...

console.log(Math.trunc(Math.random() * 6 + 1));

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...(max - min + min) => min...max

console.log(randomInt(10, 20)); // Number btw 10 - 20

// Rounding Integers (round fractions)
console.log(Math.trunc(23.3)); // 23 (remove any decimal path)

console.log(Math.round(23.3)); // 23 (0.5 => roound up)
console.log(Math.round(23.9)); // 24 (0.5 => roound down)

console.log(Math.ceil(23.3)); // 24 (0.1-0.9 => roound up)
console.log(Math.ceil(23.9)); // 24 (0.1-0.9 => roound up)

console.log(Math.floor(23.3)); // 23 (0.1-0.9 => roound down)
console.log(Math.floor(23.9)); // 23 (0.1-0.9 => roound down)

console.log(Math.trunc(23.3));

// Try with Negative Number
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24 (Better)

// Rounding decimals (Floating point)
console.log((2.7).toFixed(0)); // 3 (.toFixed always return String)
console.log((2.7).toFixed(3)); // 2.700 (3 decimals)
console.log((2.345).toFixed(3)); // 2.345 (3 decimals)
console.log(+(2.345).toFixed(3)); // 2.345 (Convert to Number with + sign)

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------The Reminder Operator-------

console.log(5 % 2); // 1
console.log(5 / 2); // 2.5 (5 = 2 * 2 + 1[reminder])
console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666666 (8 = 2 * 3 + 2[reminder])

console.log(6 % 2); // 0
console.log(6 / 2); // 3

console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

// Using for check whether number is Even or Odd
const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6, ...
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9, ...
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// Nth

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Numeric Separators-------

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000 (ingnore _)

const price = 345_99;
console.log(price);

const transferFee1 = 15_00; // 1500
const transferFee2 = 1_500; // 1500

const PI = 3.14_15;
console.log(PI); // 3.1415

// Can not using _ with Number(String)
console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Working with BigInt-------

// Max Number in JS => 9007199254740991
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(2 ** 53 + 0); // 9007199254740992 (Incorrect)

// BigInt => Using 'n' at the end of Number that larger than Maximum number
console.log(4861851151215152153513135153n); // 4861851151215152153513135153n
console.log(BigInt(4861851151215152153513135153)); // 4861851151215152001953300480n (a bit difference, due to JS try to transform the number into BigInt number)

console.log(BigInt(486185115121)); // 486185115121n (it's work if using the small number)

// Operations
console.log(10000n + 10000n); // 20000n
console.log(386548651148654868418648684168146n * 10000000n);
// console.log(Math.sqrt(16n)); // Reference error

const huge = 205648486548654665154n;
const num = 23;
// console.log(huge * num); // Reference error
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false (Bigint !== Regular number, but Same Bigint == Same Regular number)
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

// Bigint number convert to Regular number when using '+' with String
console.log(huge + ' ie REALLY big!!!');

// Divisions
console.log(11n / 3n); // 3n (bigint cut the decimals path)
console.log(10 / 3); // 3.33333

*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Creating Dates-------

// Create a date

/*
const now = new Date();
console.log(now);

// JS automatically parse the time base on string as well
console.log(new Date('Thu Nov 23 2023 10:13:26'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

// new Date(y, m, d, hr, min, sec)
console.log(new Date(2037, 10, 19, 15, 23, 5));

// JS auto corrected date when filled wrong date
console.log(new Date(2037, 10, 33));

// the beginning of the date
console.log(new Date(0)); // Thu Jan 01 1970 07:00:00 GMT+0700 (Indochina Time)

// Timestamp => Coverting to millisecond (day * hr * min * sec * 1000[ms])
console.log(new Date(3 * 24 * 60 * 60 * 1000));

*/

/*
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19 (date of months)
console.log(future.getDay()); // 4 (day of week)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0 (0 by default if didn't defind the second yet)

// ISO Time standard
console.log(future.toISOString()); // 2037-11-19T08:23:00.000Z

console.log(future.getTime()); // Timestamp => 2142231780000

// Converting Timestamp back to date
console.log(new Date(2142231780000)); // Thu Nov 19 2037 15:23:00 GMT+0700 (Indochina Time)

// Reteive the current Timestamp rightnow
console.log(Date.now()); // 1700710234312

// Setup date using . set for seting (y, m, d, hr, min, sec)
future.setFullYear(2040);
console.log(future);


*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Operations with Dates-------

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // 2142231780000

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1);

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Internationalizing Dates (INTL)-------

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',

      // month: 'numeric': 11
      // month: '2-digit': 11
      // month: 'long': November
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale); // en-US

    // en-US format => Month / Day / Year
    // en-GB format => Day / Month / Year

    labelDate.textContent = new Intl.DateTimeFormat(
      locale, options).format(now);



const num = 238468848.23;

const options = {
  // style: 'unit', 'percent', currency, etc.
  // unit: 'mile-per-hour', celsius, etc.
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR', // need to setup when using style with 'currency'
  // useGrouping: false, // display without seperator ','
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // US:  238,468,848.23

console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); // Germany:  238.468.848,23

console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num)); // Syria:  ٢٣٨٬٤٦٨٬٨٤٨٫٢٣,٢٣

console.log(
  'Browser: ',
  new Intl.NumberFormat(navigator.language, options).format(num)
); // Browser:  238,468,848.23

*/

/*

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//------Timers: SetTimeout and SetInterval-------

// Set Timout
const ingredients = ['olives', 'spinach'];

// setTimeout(callback func), time (millisecond));
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

// How to Clear Timeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval function (Repeat timeout)
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// Try to set the real clock by myself => display every one minute
const options = {
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};
setInterval(function () {
  const now = new Date();
  console.log(now);
}, options.minute);

*/
