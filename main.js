/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: Tim


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: Hello, how are you?


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40

math = high - "5";
// Q: What is `math` set to?
// A: math should be set to 40 still and there should read an error. When I put this into the console it reads back 45 though.


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var timsAge = today - born;
"Tim is " + timsAge + " years old"



// Store some information following in variables.
var yourName;
var instructorName;
yourName = "Bloopity";
instructorName = "Bloppy";
// Update the variables above so the expression reads correctly.
// Answers Below:
yourName = "Ben";
instructorName = "JD";


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
