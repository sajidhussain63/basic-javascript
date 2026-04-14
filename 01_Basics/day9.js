//ARRAY IN JS

//A SINGLE DIMENTIONAL ARRAY 

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Display full array
console.log("All fruits:", fruits);

// Accessing single value
console.log("First fruit:", fruits[0]);

// Adding a new fruit
fruits.push("Grapes");
console.log("After adding:", fruits);

// Removing last fruit
fruits.pop();
console.log("After removing:", fruits);

// Loop through array
console.log("Looping fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//TWO DIMENTIONAL ARRAY IN JS

// Creating a 2D array (like a table)
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Display full 2D array
console.log("Full Array:", numbers);

// Access single value
console.log("First row:", numbers[0]);
console.log("First element:", numbers[0][0]); // 1
console.log("Last element:", numbers[2][2]);  // 9

// Loop through 2D array
console.log("All values:");

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
    }
}