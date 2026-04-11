//OPERATORS IN JS

// 1. ARITHMETIC OPERATORS

let a = 10;
let b = 5;

console.log("Addition:", a + b);        // 15
console.log("Subtraction:", a - b);     // 5
console.log("Multiplication:", a * b);  // 50
console.log("Division:", a / b);        // 2
console.log("Modulus:", a % b);         // 0

// Increment Operator
let x = 5;
console.log("Pre-Increment:", ++x); // 6

let y = 5;
console.log("Post-Increment:", y++); // 5
console.log("After Post-Increment:", y); // 6

// Decrement Operator
let m = 5;
console.log("Pre-Decrement:", --m); // 4

let n = 5;
console.log("Post-Decrement:", n--); // 5
console.log("After Post-Decrement:", n); // 4




// 2. ASSIGNMENT OPERATORS

let p = 10;

p += 5;  // p = p + 5
console.log("p += 5:", p);

p -= 3;  // p = p - 3
console.log("p -= 3:", p);

p *= 2;  // p = p * 2
console.log("p *= 2:", p);

p /= 4;  // p = p / 4
console.log("p /= 4:", p);

p %= 3;  // p = p % 3
console.log("p %= 3:", p);




// 3. RELATIONAL OPERATORS

let num1 = 10;
let num2 = 20;

console.log("Equal (==):", num1 == num2);        // false
console.log("Strict Equal (===):", num1 === num2); // false
console.log("Not Equal (!=):", num1 != num2);    // true
console.log("Greater Than (>):", num1 > num2);   // false
console.log("Less Than (<):", num1 < num2);      // true
console.log("Greater or Equal (>=):", num1 >= num2); // false
console.log("Less or Equal (<=):", num1 <= num2);    // true

// 4. LOGICAL OPERATORS

let isLoggedIn = true;
let hasPermission = false;

console.log("AND (&&):", isLoggedIn && hasPermission);
console.log("OR (||):", isLoggedIn || hasPermission);
console.log("NOT (!):", !isLoggedIn);
