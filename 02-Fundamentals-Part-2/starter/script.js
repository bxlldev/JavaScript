'use strict';
// activate strict mode for entire code below
// help verify where an error occures
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive !!');

// const interface = 'Audio'; //interface is kind of OOP valiable, can not use for declaration
// const private = 534; //private is kind of OOP valiable, can not use for declaration
// const if = 23;//if is kind of statement valiable, can not use for declaration



function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //keep result in juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// function declaration (can call function before declaring function)
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);


// function expression >> keep/declare function into variable at one line of code (can not call function before declaring function)
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);







// Arrow function (Released in ES6: more faster and simply way)
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// one function call other function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const oragePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and pieces of ${oragePieces} orange.`;
    return juice; //keep result in juice
}

console.log(fruitProcessor(2, 3));



//review function

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has aready retired 🥳`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


*/

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// Test1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);




const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// literal sentence
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// Array function
// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice']; // can not modify array, duue to array declared with const

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);


// EX
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); //push method >> add new string into the laatest of array
console.log(friends);
console.log(newLength);

friends.unshift('John'); //push method >> add new string into the first of array
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); // Remove to popped variable
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven')); // print index
console.log(friends.indexOf('Bob')); // -1 mean there is no such of this string in array

// ES6 features
friends.push(23);
console.log(friends.includes('Steven')); //check index is true or false
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

*/

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


*/

// pass for challenge#2
/*
const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tip1 = calcTip(bills[0]);
const tip2 = calcTip(bills[1]);
const tip3 = calcTip(bills[2]);

const tips = [tip1, tip2, tip3];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/

/*
// Object

//recall array
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//object literal syntax
const jonas = {
    firstName: 'Jonas', // property (key): values
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};



const jonas = {
    firstName: 'Jonas', // property (key): values
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // jonas['firstName']
console.log(jonas['last' + nameKey]); // jonas['lastName']

// console.log(jonas.'last' + nameKey]) // error

// another example

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas.interestedIn);// can not get the result
// console.log(jonas[interestedIn]);// can get the result

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!! Choose between firstName, lastName, age, job, and friends');
}

// add any properties in the object via using . and [] notations
jonas.location = 'Portugal'; // dot notation
jonas['twitter'] = '@jonasschemedtmann'; // backet notation
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friends is called Michael"

// my way
console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friends is called ' + jonas.friends[0]);

//another way

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`);

*/

/*
const jonas = {
    firstName: 'Jonas', // property (key): values
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    //Function decaration in object
    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }

    //using .this to point out the value directly
    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;

    }
};


//Normal function decaration
// calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }


console.log(jonas.calcAge()); // dot notation (call function in jonas's object)
// console.log(jonas['calcAge'](1991)); // backet notation (call function in jonas's object)

console.log(jonas.age); // most efficiency
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's licence"

//my way
// if (jonas.hasDriversLicence) {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's licence`);
// } else {
//     console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driver's licence`);


// }

console.log(jonas.getSummary());



// BMI = mass / (height * height)


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${(mark.calcBMI())}) is higher than ${john.fullName}'s (${(john.calcBMI())})!`);
} else if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${(john.calcBMI())}) is higher than ${mark.fullName}'s (${(mark.calcBMI())})!`);
}





//loop

// console.log('Lifting weights repetition 1🏋️');
// console.log('Lifting weights repetition 2🏋️');
// console.log('Lifting weights repetition 3🏋️');
// console.log('Lifting weights repetition 4🏋️');
// console.log('Lifting weights repetition 5🏋️');
// console.log('Lifting weights repetition 6🏋️');
// console.log('Lifting weights repetition 7🏋️');
// console.log('Lifting weights repetition 8🏋️');
// console.log('Lifting weights repetition 9🏋️');
// console.log('Lifting weights repetition 10🏋️');

//for(declaring valiable start with; making conditions ; Action) >> if the conditions is true, still running the loop, if the conditions is false, stop the loop
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️`);
}




// loop array
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];


const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// ...
// console.log(jonas[4]);
// jonas[5] does not exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas's array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array (first way)
    // types[i] = typeof jonas[i];


    // Filling types array (Popular way)
    types.push(typeof jonas[i]);

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
}

console.log(ages);

// continue and break // continue is skip the specific conditions
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue; // meaning: if type is not the string, pls skip and continue the loop
    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break; // meaning: if type is the number, pls stop the loop
    console.log(jonas[i], typeof jonas[i]);
}



//loop backward
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, 2, ..., 4
// 4, 3, 2, ..., 0 (loop backward)

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// loop inside the loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise} ------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}




// While loop

// recall for loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR: Lifting weights repetition ${rep}🏋️`);
// }

// for (counter; condition; action)
// while (condition) >> usefule when dont know how many time should be finish, such as random number 'possibility of rolling a dice'

let rep = 1; // need declared counter outside
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}🏋️`);
    rep++; // Action
}

// Application: rolling a dice

// Math.trunc to get interger number
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) { // if dice is not 6, loop still running the same meaning as (the loop keep running until 6)
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}



CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);



const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

*/

