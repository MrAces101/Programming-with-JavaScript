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


//----- Declaring Variables Exercise--------

/* var petDog = 'Rex'; // variable created to store dogs name
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
console.log(petCat, 'now says', catSound); //displays message + updated cat sound in console */


//===========Operators-------------

/* Arithmetic Operators in Js;
    + Addition
    - Subtraction
    * Multiplication
    / Division
*/

/* Comparison Operators in Js;
    > greater than
    < less than
    == equal to
*/

/* Logical Operators in Js;
    && And - Both are trus
    || Or - either one or the oter is true
    ! Not - None are true
*/

// console.log(2 + 2);
// console.log(1 + 2 + 3 + 4 + 5);
// console.log(20 - 18);
// console.log(2 * 3);
// console.log(8 / 1);
// console.log(3 < 2);
// console.log( 2 > 3);
// console.log(10 == 10);

//----------Exercises----------

// You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

/* var score = 8;
console.log("Mid-level skills:", score > 0 && 10 > score); */

// Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.


/* var timeRemaining = 0;
var energy = 10;

console.log("Game Over", timeRemaining  == 0 || energy == 0) */

// You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

/* var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;
var test2 = num2 % 2;

var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);
*/

//--------Conditional Statements-------

// if, else if, else

/* var place = 'first';

if(place == 'first') {
    console.log("Gold")
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
} */

// Switch Statement

/* var place = 'second';

switch(place) {
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronse');
        break;
    default:
        console.log('No medal');
} */

//------Conditional Exercises------


// using If else

/* var age = 10;

if(age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical")
} */

// Using Switch

/* var day = 'Wednesday';

switch(day) {
    case 'Monday':
        console.log('Take Diving lessons');
        break;
    case 'Tuesday':
        console.log('Take Cooking Lessons');
        break;
    case 'Wednesday':
        console.log("Study Online");
        break;
    case 'Thursday':
        console.log('Go to Gym');
        break;
    case 'Friday':
        console.log('Go Clubing');
        break;
    case 'Saturday':
        console.log('Go shooping');
        break;
    case 'Sunday':
        console.log('Go to church');
        break;
    default:
        console.log('Day not reconized!')
} */


//-------Looping constructs-------

// Using for loop to count down from 10 to 1

/* for (var i = 10; i > 0; i--)
{
    console.log(i)
} 
console.log('Happy New Year!!') */

// Using while loop to count down from 10 to 1

/* var counter = 10;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
} console.log('Happy new year!!'); */

// Task 1 - for loop / ++
/* for (var i = 1; i < 6; i++) {
    console.log(i)
} console.log("Counting completed!") */

// Task 2 - for loop / --
/* for (var i = 5; i > 0; i--) {
    console.log(i)
} console.log("Countdown finished! "); */

//Task 3 - while loop / ++
/* var i = 1;
while (i < 6) {
    console.log(i);
    i = i + 1;
} 
console.log("Counting completed!") */

// Task 4 - while loop / --
/* var i = 5;

while (i > 0) {
    console.log(i);
    i = i - 1;
}
console.log('Countdown finished! ') */

// Task 5 - while loop years / ++
/* var year = 2018;
 
while (year < 2023) {
    console.log(year);
    year = year + 1;
} */

//----Nested loops----

// nested month / year loop
/* for (var i = 2020; i < 2026; i++) {
    console.log(i);
    for (var j = 1; j < 6; j++) {
        console.log("--------", j);
    }
} */

/* for (var i = 100; i > 10; i = i - 10) {
    for (var j = 23; j > 10; j = j - 7) {
        console.log(i + " times " + j + " equals " + i * j);
    }
} */


//------Conditionals and loops: Exercises----

// Exersize 1: Using for loops with if else conditionals
/* for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronse medal")
    } else {
        console.log(i);
    }
} */

// Exersize 2: Using for loops with if else conditionals
/* for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronse medal");
            break;
        default:
            console.log(i);
    }
} */

//-------Functions-------

/* function addTwoNums1() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
addTwoNums1(); // Run / Call / invoke the function

function addTwoNums(a,b) { // Assigned fixed values as Parameters within the function definition
    var c = a + b; // code to be executed
    console.log(c);
}

addTwoNums(2,23); // Passing values as Agruments passed to the function */

/* function letterFinder(word,match) {
    for (var i = 0; i < word.length; i++) { // If the length of the value in peramiter 1 'word' is less than its lendth add 1
        if(word[i] == match){ // if the value of i matches the match value
            console.log('Found the', match, 'at', i); // If it matches return the found message
        }
        else {
            console.log('---No match found at', i); // if it dose not match return no match message
        }
    }
}
letterFinder('test',"t"); // 'test is passed to peramiter 1 and 't' at paramiter 2 */


//-----Intro to objecs------

/* var storeManager = {} // Declares a store manager variable
storeManager.rangeTilesPerTurn = 4; // Dot operator added to each name
storeManager.socialskills = 50; // storeManager + Property key + Property value
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialiAbility = "Finding buiness opportunities";
storeManager.greeting = "Let's make some money";

console.log(storeManager.greeting);

var assistantManager = { // Object created
    movement: 3, // values assigned to object
    socialskills: 30,
    streetSmarts: 30,
    health: 40
}
assistantManager.greeting = "Glad to be here";
console.log(assistantManager);

// Object using brackets notation
var assistantManager2 = {};
    assistantManager2['health']= 40;
    assistantManager2['movement']= 3;
    assistantManager2["socialSkills"]= 30; // Bracket notation can accept spaces due to the string value
    assistantManager2['socialSmarts']= 30;
    assistantManager2['greeting']= "Come on in!";

console.log(assistantManager2); */

//----Sorting data in Arrays-----

 /* var train1 = ['wheat','barley','potato','salt','rocks']; // variable train1 has and array of carriages
 console.log(3); // Used to call 'salt' 

 var names = [];
 names.push("John");
 names.push("Hanna")
 names.push("Brandon");

 function arrayBuilder(one,two,three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
 }

 arrayBuilder('apple','pear','plum'); */

 //------Math-------

 //----------Math.random----

 // Generate a decimal number between 0 and 0.99
 /* Math.random();

 // Save it to a varaible
 var decimal = Math.random();

 // Log the value of decimal to the console
 console.log(decimal);

 // Log the value of decimal Multiplied by 10 to the console
 console.log(decimal * 10) */

//-------Math.ciel-----

// round numbers upwards
/* var rounded = Math.ceil(0.001);
var rounded1 = Math.ceil(1.001);
var rounded2 = Math.ceil(2.001);
var rounded3 = Math.ceil(3.001);

console.log(rounded3 * 10); */

//----Return random Integer-------

// Get a random number between 0 and 0.99 times 10 and return it to the console
/* var decimal = Math.random() * 100;

// Round up the value of decimal
var rounded = Math.ceil(decimal);

// Log the value of rounded to the console
console.log(rounded); */

//-------Strings 2------

// Arrays are iterable

/* var veggies = ['onion','parsley','carrot'];

console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

// Strings !== arrays

var greeting = 'Hello ';
var name = 'John'; // Variable 'name'' with a value 'John'

console.log(greeting + name); // joins Hello and John
console.log(greeting.concat(name)); // joins Hello and John
console.log(greeting,name); // joins Hello and John

// Length property returns length
console.log(greeting.length); // 6

// charAt() method read single character at specific index
console.log(greeting.charAt(0)); // 'Hello' = H

// concat method joins strings
console.log("He".concat("ll").concat("o ").concat("Wo").concat("rl").concat("d!"));

// indexOf - returns first position that matches value
console.log("ho-ho-ho".indexOf('h')); // 0
console.log("ho-ho-ho".indexOf('o')); // 1 
console.log("ho-ho-ho".indexOf('-')); // 2

console.log(greeting.toUpperCase()); // "HELLO"
console.log(greeting.toLowerCase()); // "hello" */

//---- Array and object exercise

/* var clothes = []; // Creates empty array
clothes.push('Hat','Pants','shoes','backpack','belt'); // Adds 5 clothing items
clothes.pop(); // Removes last item 'belt'
clothes.push('t-shirt'); // Adds 't-shirt'
console.log(clothes);
console.log("Third item: " + clothes[2]);

var favCar = {}; // empty favCar object
favCar.color = 'Red'; //dot notation property: color w/ value: 'red'
favCar.convertible = true; // dot notation property convertible w/ boolean value: true
console.log(favCar); // logs the value of the favCar object */

//-----Adding methods to objects----

// a founction added within an object is referred as a method

/* var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
    console.log("The engine is running!")
}
car.lightsOn = function () {
    console.log("The lights are on!")
}
console.log(car);
car.turnTheKey();
car.lightsOn(); */

//----bugs and errors---

//----ReferenceError - variable not decleared anywhere
/* console.log(c + d);
console.log('This line never runs'); // wont run */

//----SyntaxError - invalid js code used

/* var test = 'item; // issue with the syntax */

//-------Type error - trying to run method on unsupported data type

//"hello".pop() 

//-----out of range - out of allowed range of acceptable input values

// (10).toString(100);

//------ Error Handeling Throw, Try, catch

//----- Using Try / Catch

// try {
//     console.log(c + d)
// } catch(err) {
//     console.log(err); // catch caught and showed the error
//     console.log("There was an error")
//     console.log("The error was saved to the error log")
// }
// console.log('My program does not stop');

//----- Using Throw

// try {
//     throw new ReferenceError(); // construct custom error constructor
// } catch(err) {
//     console.log(err) // Outputs the error object
//     console.log("There was a reference error") // Outputs the error string
// }
// console.log('My program dose not stop'); // Program cuntinues to run as usual

//----undefined, nul, empty values

//----null

// var letters = 'abc';

// console.log(letters.match(/d/)); // null indicates the absense of an object


//--- undefined

// var noise; // Variable noise created with out a value
// console.log(noise); // Returns undefined because no value

// noise = 'thunder'; // the value thunder is decleared to the noise variable
// console.log(noise); // This time the value thunder is returned

// var game = {
//     score: 100
// }

// console.log(game.Score);

//--- Empty values

//-----Error prevention Exercise

// function addTwoNums(a,b) {
//     try { 
//         if(typeof(a) !== 'number' ) {
//             throw new ReferenceError("the first agruement is not a number");
//         }
//         else if (typeof(b) !== 'number') {
//             throw new ReferenceError("the second agruement is not a number");
//         }
//         else (
//             console.log(a + b)
//         )
//     } catch(err) {
//         console.log('Error!', err)
//     }
// }

// addTwoNums(5,'5')
// console.log("It still works")

//------- Defensive Programming Exercise

// function letterFinder(word, match) {

//     var condition1 = typeof(word) === 'string' && word.length >= 2;
//     var condition2 = typeof(match) === 'string' && match.length == 1;
//         if(condition1 && condition2) {
//                 for(var i = 0; i < word.length; i++) {
//                 if(word[i] == match) {
//                     console.log('Found the', match, 'at', i)
//                 } else {
//                     console.log('---No match found at', i)
//                 }
//             }
//         }
//         else {
//             console.log("Please pass correct arguments to the function.")
//         }
// }
// letterFinder("Good Mood","o");

// try {
//     console.log('h')
// } catch(e) {
//     console.log('c')
// }

//---Function Programming

// var cur1 = 100; // Currency 1
// var cur2 = 0; // Currency 2
// var eRate = 1.2; // Exchange Rate

// function convertCurrency(amount, rate) { //function 'ConvertCurrency'  with 2 properties 'amount' and 'rate'
//     return amount * rate; // return the result of amount multiply by the rate
// }

// cur2 = convertCurrency(cur1, eRate); // currency 2 value = the value of the founction

// console.log(cur2);

// function consoleLog(val) {
//     console.log(val)
//     return val
// }

// console.log('Hello')

// function doubleIt(num) {  // A function w/ a property 'num'
//     return num * 2 // Returns the property multiplied by 2
// }

// function objectMaker(val) {
//     return {
//         Prop: val // returns an object with a single property set as 'val'
//     }
// }

// // objectMaker(20);

// // doubleIt(10);

// console.log(
//     objectMaker( doubleIt(123))
//     )

// recursive functions

// function example() {
//     console.log('Line One');
//     console.log('Line two');
//     console.log('Line three');
//     // example();
// }

// example();

// let counter = 5;
// function example() {
//     console.log(counter);
//     counter = counter - 1;
//     if (counter === 0) return;
//     example();
// }

// example();

// // counting up using recursion
// let i = 1; // initial value = 1
// function test() {
//     console.log(i);
//     i++; // Add one to i 
//     if (i === 6) return; // Until this condition is met
//     test();
// }

// test();

// counting down using recursion
let i = 5; // initial value = 1
function test() {
    console.log(i);
    i--; // Add one to i 
    if (i === 0) return; // Until this condition is met
    test();
}

test();