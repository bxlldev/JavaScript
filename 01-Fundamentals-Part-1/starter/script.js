/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas'
let PI = 3.1415;

let myFristJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFristJob);




let javsscriptIsFun = true;
console.log(javsscriptIsFun);

// console.log(typeof true);
console.log(typeof javsscriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javsscriptIsFun = 'Yes!';
console.log(typeof javsscriptIsFun);

let year;
console.log(year);
console.log(typeof year);


year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

//bad decralation
lastName = 'Schmedtmann';
console.log(lastName);



// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 mean 2 to the power of 3 == 2*2*2

const firstName = 'Jonas';
const lastName = 'Schemedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // JS execute Math operator first, then execute Comparison operator

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // JS execute math operation first, then execute assignment operation (x = y = 10, X = 10) (right to left)
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// The backtick " ` " is a typographical mark used mainly in computing. It is also known as backquote, grave, or grave accent. The character was designed for typewriters to add a grave accent to a (lower-case) base letter, by overtyping it atop that letter.

// using backtick " `` " for template literal (with out "+" sign)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);




const age = 15;
// const isOldEnough = age >= 18;

// Emogi >> "Window" + "."

if (age >= 18) {
    console.log('Salah can start dring license 👍🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young, wait another ${yearsLeft} years 😂`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Challenge#2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

-------------------------------------------

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


-------------------------------------------

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // + convert to string // - convert to number
console.log('23' / '2');

let n = '1' + 1; //11
n = n - 1; //11-1
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You shoud get a job!");
}

let height = 0;
if (height) {
    console.log('YaY! Height is defined');
} else {
    console.log('Height is undefined');
}


/// === strick comparison operator, == loose coparison operator 
const age = '18';
if (age === 18) console.log('You just became an adult :D (strick)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof (favourite));

if (favourite === 23) { //23 === 23
    console.log('Cool! 23 is an amazing number!!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!!');
} else {
    console.log('Number is not 23 or 7 or 9');
}

// strick !==, loose !=
if (favourite !== 23) console.log('Why not 23?');



const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}





CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



👋 OPTIONAL: You can watch my solution in video format in the next lecture


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy')
// }

//BONUS 1 && BONUS 2
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy 😂');
}



const day = 'monday';

//Using Switch

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday': // day === 'tuesday'
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday': // day === 'wednesday'
//     case 'thursday': // day === 'thursday'
//         console.log('Write code examples');
//         break;
//     case 'friday': // day === 'friday'
//         console.log('Record videos');
//         break;
//     case 'saturday': // day === 'saturday'
//     case 'sunday': // day === 'sunday'
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

//Using if else && logical operator

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}



// Expression >> just a values
3 + 4
1991
true && false && !false

// statement >> full sentences that translate an action
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}.`);




// Conditional (Ternary) Operator >> ? mean true and : mean else, just write if/else statement in one line of code

//frist way (fully print in one line)
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') :
//     console.log('I like to drink water 🥤');

//Second way (decaration insided) >> more useful
const drink = age >= 18 ? 'wine 🍷' : 'water 🥤';
console.log(drink);

//third way (decaration outsided)
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🥤';
}
console.log(drink2);

//fourth way (included Ternary operation in one line of code ; if/else statement can not included)
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥤'}`);



CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430




const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/





























