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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // preparing HTML text/logic before using with .insetAdjacentHTML
    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__value">${mov}</div>
    </div>
    `;
    // forEach Method will be adding in HTML, at the top of element (afterbegin), if using (beforeend) it will adding in HTML, at the bottom of element
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner // add .username that stand for the fullname of each .owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
//-----------The Magic of Chaining Methods-------

/*

/////////////////////////////////////////////////
//-----------Coding Challenge #2-------
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/

/*

const calcAverageHumanAge = function (ages) {
  // Using MAP Method
  // const humanAge = ages.map((dogAge) => (dogAge <=2 ? 2*dogAge : 16 + dogAge*4)); // Another solution
  const humanAge = ages.map(function (dogAge, i, arr) {
    if (dogAge <= 2) return 2 * dogAge;
    else if (dogAge > 2) return 16 + dogAge * 4;
  });
  console.log(`All Human Ages: ${humanAge}`);

  // Using Filter Method
  const excludeDogAge = humanAge.filter((age, i, arr) => age >= 18);
  console.log(
    `Exclude all dos less than 18 years old of Human: ${excludeDogAge}`
  );

  // Using Reduce Method
  // const average = excludeDogAge.reduce((acc, cur) => acc + cur, 0)/ excludeDogAge.length; // Another Solution #1

  // const average = excludeDogAge.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0); // Another Solution #2

  // [2, 3] => (2+3)/2 = 2.5 === 2/2 + 3/2
  const total = excludeDogAge.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  console.log(`Total human's ages: ${total}`);
  console.log(`Avarage human's ages: ${total / excludeDogAge.length}`);
};

console.log('------------Test Data #1------------');
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); // Test data #1
console.log('------------Test Data #2------------');
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); // Test data #2

*/

/*

///////////////////////////////////////////////
//-----------Data Transformations: MAP, Filter, Reduce-------
//-----------The Reduce Method (Difference callback func with MAP, Filter Method)-------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumalator => SNOWBALL
const balance1 = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // specify 0 in the end of callback function to start acc = 0 (if not specify, defalt acc also = 0);
console.log(balance1);

// Another way (Arrow function)
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// Another way (Forof loop)
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

*/

/*
/////////////////////////////////////////////////
//-----------Data Transformations: MAP, Filter, Reduce-------
//-----------The Filter Method-------
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// Another way (Forof loop)
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Challenge => filter only negative values (Arrow function call back)
const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(withdrawals);

*/

/*

/////////////////////////////////////////////////
//-----------Data Transformations: MAP, Filter, Reduce-------
//-----------The MAP Method-------
// Similar to Foreach Method********
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementUSD);

// Another way (Try Forof loop)
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

// Another way (Try with Arrow Function)
const movementUSDarrow = movements.map(mov => mov * eurToUsd);
console.log(movementUSDarrow);

// Another way (Try Foreach loop)
const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);

*/

/*

/////////////////////////////////////////////////
// Coding Challenge #1



Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy🐶")

4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉

GOOD LUCK 😀

*/

/*

// My solution

// Test data1
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// Test data2
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = [...dogsJulia]; // copy array
  // const dogsJuliaCorrected = dogsJulia.slice(); // Another solution
  dogsJuliaCorrected.splice(0, 1); // delete 1st element
  dogsJuliaCorrected.splice(-2); // delete last two element
  // dogsJuliaCorrected.slice(1, 3); // Another solution
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (d, i, __) {
    d >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${d} years old `)
      : console.log(`Dog number ${i + 1} is still a puppy🐶`);
  });
};

checkDogs(dogsJulia, dogsKate);

*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/*

/////////////////////////////////////////////////
//------------Simple Array Methods-------------

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method >> not delete array (not mutate array)
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // index 2 to 3
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // all index
console.log([...arr]);

// Splice Method >> delete array (mutate array)
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse Method >> reverse array (mutate array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// Concat Method >> combind array (mutate array)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Another way

// Join Method
console.log(letters.join(' - '));


*/

/*

/////////////////////////////////////////////////
//------------The New "at Method"-------------

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element
console.log(arr[arr.length - 1]); // last index (old solution)
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // last index (better than old solution)

// try .at with string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/

/*

/////////////////////////////////////////////////
//------------Looping Arrays: Foreach-------------

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Try using forof Method (can using break method)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------- Foreach ------------');
// Using foreach Method (can not using break method)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// Explaination foreach Method
// 0: function(200)
// 1: function(450)
// 2: function(400)
// . . .

*/

/*

/////////////////////////////////////////////////
//------------Foreach with Maps and Sets-------------

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// using _ for skip this param
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`); // doesn't have key, key === value
});

*/

/////////////////////////////////////////////////
//------------Project: "Bankist" APP-------------
//------------1: Creating DOM Elements-------------
