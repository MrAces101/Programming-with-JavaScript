// -------Basic consol-log-------
// console.log('Hello World');

//------- Styled console log-------
//console.log("%cHello World", "color: blue; font-size: 40px");

//------ Using +
//console.log("Hello " + "there, " + "World");

//------ Using , inplace of +
//console.log("Hello ", "there, ", "World")

//-------Using Variables
/* var person = 'John';
var greeting = 'Hello';

console.log(greeting, person); */

//----- Declaring Variables Exercise
var petDog = 'Rex'; // variable created to store dogs name
var petCat = 'Pepper'; // variable created to store dogs name
var catSound = 'purr'; // variable created to store cat sound
var dogSound = 'Woof'; // variable created to store dog sound

console.log(petDog); // display dogs name in the console
console.log(petCat); // display cats name in the console

console.log("My pet dog's name is: ", petDog); //displays message + dogs name in console
console.log("My pet cat's name is: ", petCat); //displays message + dogs name in console

console.log(petDog, 'says', dogSound); //displays message + dogs sound in console
console.log(petCat, 'says', catSound); //displays message + cats sound in console

catSound = 'meow'; // variable created to change stored cats sound
console.log(petCat, 'now says', catSound); //displays message + updated cat sound in console