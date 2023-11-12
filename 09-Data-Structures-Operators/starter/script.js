'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhance object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDerivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza(mainIngredient, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(othersIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const user = [];
const user = [{ name: 'Jonas', email: 'hello@gmail.com' }];
console.log(user[0]?.name ?? 'User array empty');

if (user.length > 0) console.log(user[0]?.name);
else console.log('User array empty');

// const rest1 = {
//   name: 'Capri',
//   // numGuest: 20,
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

/*

//----------------Looping Array--------------

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

*/
// console.log(...menu.entries());

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;
/*
// Nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10; // found undefinded value then return 10

// AND assignment operator
// rest1.owner = rest1.owner && '<ANNONYMOUS>'; // .onwer does not existed, then return undefined
// rest2.owner = rest2.owner && '<ANNONYMOUS>'; // .owner is existed, then replace '<ANNONYMOUS>' in .owner
rest1.owner &&= 'ANNONYMOUS';
rest2.owner &&= 'ANNONYMOUS';

console.log(rest1);
console.log(rest2);

*/
//////////////////////////////////////////////////

//-------------Nullish values----------------------
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish value: null and undefined (NOT 0 or '') >> return the first Nullish values
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/////////////////////////////////////////////////
// Short Circuitting (&& and ||)
// || Operator >> return the first true value, if all are falty => return the last falsty value.
// && Operator >> return the first falty value, if all are true => return the last true value.

/*
console.log('-------------- OR ---------------');

// Use ANY data type, return ANY data type, short-circuiting
// Short-Circuiting >> return only the first "true" values. others wise it will return the last falsty values

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
// Check whether numGuests is exist in restaurant's object or not?
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------------- AND ---------------');
// && operator will continue true value until found the falsty values, it will return
console.log(0 && 'Jonas');
console.log(7 && 'Jonas' && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

/*
//////////////////////////////////////////////////////
// Rest pattern and parameter (opposite with spread operator)
// Speard operator (can be explaning element with ',') >> explaning specific values to array
// Rest operator (must be the last element) >> packing remainning values to array

////// 1) Destructoring /////////

// Spraed, because of RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, becuase of Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...othersFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

////// 2) Functions /////////
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// Unpacking and repack array
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

*/
///////////////////////////////////////////////////////
/*

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. but NOT objects

const str = 'Jonas';
const letters = [...str, ' ', ' S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schemedtmann`); // Reference error

// Real world expample
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // more modern

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

// restaurant.orderDerivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDerivery({
//   address: 'Via del Sole, 21',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); // solution how to mutating value by () obj
// console.log(a, b);

// // Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////////////////
/*

// Destructoring array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a object's function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructoring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/

//----------------Coding Challenge#1--------------------

// We're building a football betting app (soccer for my American friends)! suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

// Your task:
/*
1. Create one player array for each team (variables 'player1' and 'player2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (Team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

3. Create an array 'allPlayers' containing all players of both team (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

5. Based on the game. odds object, create one available for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7.The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using if/else statement or the ternary operator

TEST DATA for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then call the function again with players form game.scored


*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//------------1-----------------
// Using Destructoring
const [players1, players2] = game.players;
console.log(players1, players2);

// //------------2-----------------
// Using Rest
const [gk, ...fieldPlayers] = players1;
console.log(gk, ...fieldPlayers);

// //------------3-----------------
// Using Spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// //------------4-----------------
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// //------------5-----------------
// Using Nested
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// //------------6-----------------
// Using Rest
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// //------------7-----------------
// Using AND operator, it will continue true until finding falsty value it will stop and return the lastone, otherwise it will return the last one

// && Operator >> Return first falty (or not return)
// true1 && true2 && true3 >> return true3 (No falty)
// true1 && true2 && false1 >> return false1
// true1 && false1 && true2 >> return false1
// false1 && false2 && true1 >> return false1

// || Operator >> Return first true
// true1 || true2 || true3 >> return true1
// true1 || true2 || false >> return true1
// false || true1 || true2 >> return true1
// true1 || false || true2 >> return true1
// false1 || false2 || false3 >> return false3 (No Truely)

// ?? Operator >> Return frist Nullish value
// true1 ?? true2 ?? true3 >> return true1 (No Nullish value)
// true1 ?? true2 ?? false >> return false
// false ?? true1 ?? true2 >> return flase
// true1 ?? false ?? true2 >> return false
// false1 ?? false2 ?? false3 >> return false1

team1 > team2 && console.log('Team 1 is more likely to win');
team1 < team2 && console.log('Team 2 is more likely to win');
*/
