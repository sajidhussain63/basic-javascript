// VARIABLES IN JAVASCRIPT

//Var allows re-declaration and also out of the block accessing as well.

// 1. Using var
var name = "Sajid";
console.log("var name:", name);

// Redeclaration allowed
var name = "Ali";
console.log("var name after redeclare:", name);

//let does not allow re=decleration and also does not allows the out of the block accessing.
// 2. Using let

let age = 20;
console.log("let age:", age);

// Updating value
age = 25;
console.log("let age after update:", age);

// let age = 30; ❌ Error (cannot redeclare)

//Const gives a fixed value that can't be modified
// 3. Using const

const country = "Pakistan";
console.log("const country:", country);

// country = "US"; ❌ Error (cannot update)


// NAMING RULES EXAMPLES


let userName = "Ahmed";
let _score = 100;
let $price = 500;

console.log(userName, _score, $price);



// FULL EXAMPLE
let studentName = "Sajid";
let studentAge = 20;
const institute = "SALU";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Institute:", institute);