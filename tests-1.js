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

var storeManager = {} // Declares a store manager variable
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

console.log(assistantManager2);

//----Sorting data in Arrays-----

 /* var train1 = ['wheat','barley','potato','salt','rocks']; // variable train1 has and array of carriages
 console.log(3); // Used to call 'salt' */

 var names = [];
 names.push("John");
 names.push("Hanna")
 names.push("Brandon");

 function arrayBuilder(one,two,three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
 }

 arrayBuilder('apple','pear','plum');