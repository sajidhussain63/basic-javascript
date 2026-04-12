// LOOPS IN JS

// While loop: A loop that repeats a block of code as long as a given condition is true.
// For loop: A loop that runs a block of code a specific number of times using
// initialization, condition, and increment/decrement.
// Do-while loop: A loop that executes the code at least once, then repeats while the condition is true.

//1) WHILE LOOP 
console.log("USING WHILE LOOP"+"\n")
//ASENDING ORDER OF LOOP
console.log("ASSENDING ORDER PRINTING NUMBERS BY LOOP")
 let a=1; //intialization
 while (a<=10) //condition
 { 
    console.log(a,") ","SAJID"); //statement
    a++; //increament or decreament 
 }
 
//  //loop will be terminated when condition is false.


console.log("DESENDING ORDER PRINTING NUMBERS BY LOOP")

//decending order loop working
 let b=10; //intialization
 while (b>=1) //condition
 { 
    console.log(b,") ","SAJID"); //statement
    b--; //increament or decreament 
 }

console.log('\n') //JUST GOING TO NEW LINE

//2) FOR LOOP
console.log("USING FOR LOOP",'\n')

console.log("ASSENDING ORDER PRINTING NUMBERS BY LOOP")
for (let c=1;c<=10;c++){
    console.log(c,") ","SAJID")
}

console.log("DESENDING ORDER PRINTING NUMBERS BY LOOP")
for (let c=10;c>=1;c--){
    console.log(c,") ","SAJID")
}



console.log('\n') //JUST GOING TO NEW LINE

//2) DO WHILE LOOP
console.log("USING DO WHILE LOOP LOOP",'\n')

console.log("ASSENDING ORDER PRINTING NUMBERS BY LOOP")

let d=1;
do {
    console.log(d,") ","SAJID")
    d++;
}
while(d<=10)



console.log("DESENDING ORDER PRINTING NUMBERS BY LOOP")

let e=10;
do {
    console.log(e,") ","SAJID")
    e--;
}
while(e>=1)

