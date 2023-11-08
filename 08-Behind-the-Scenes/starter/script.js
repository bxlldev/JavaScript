'use strict';

/*

//Scope chain

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${fristName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const fristName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${fristName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const fristName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
// console.log(millenial);



// HOISTING and TDZ

// Variable
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = '1991';

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

console.log(undefined);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // decared on window object
let y = 2; // not decare on window object
const c = 3; // not decare on window object

console.log(x === window.x);
console.log(y === window.y);
console.log(c === window.c);



// this keyword

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};

///////////////////////////////

calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// This keyword only pointing to the method which calling
// Here is example..
// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

// You can copy the function by decaring variable, but you will not able to use "this" keyword
// const f = jonas.calcAge;
// f();




// How "this" keyword, related to the regular func vs. arrow func

// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // const self = this; // self or that

    // Solution#1 using regular func inside the object's func

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution#2 using arrow func inside the object's func

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
// console.log(this.firstName); // window object try to find out and will not see "firstName" >> eventually you will get undefined

jonas.calcAge();

// arguments keyword (supported only regular func)

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3, 8);




// Primitives vs. Objects (Primitive vs. Reference types)

// Primitives (Primitives values)
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Object (Reference values)
const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend); // {name: 'Jonas', age: 27}
console.log('Me', me); // {name: 'Jonas', age: 27}


*/

// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// marriedJessica = {};

// Coping objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign({}, jessica2) >> to partly clone jessica2 object (only work in global space)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
