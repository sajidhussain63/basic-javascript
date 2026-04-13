// Function in JS

// 1. Simple Function
function greet() {
    console.log("Hello World");
}
greet(); //Hello World


// 2. Function with Parameter
function greetUser(name) {
    console.log("Hello " + name);
}
greetUser("Sajid"); //Hello Sajid 


// 3. Function with Return
function add(a, b) {
    return a + b; 
}
console.log(add(5, 3)); //8


// 4. Default Parameter
function welcome(name = "Guest") {
    console.log("Welcome " + name);
}
welcome();
welcome("Ali"); //Welcome Ali (if Ali was not given 
                //this whould printed Welcome Guest which given as default value)


// 5. Simple Practice
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true