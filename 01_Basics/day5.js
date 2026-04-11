//Why let is used in modern JS 
//Var allows out of the block accessing how let's see

function for_i(){
    for(var i=0;i<5;i++){
        console.log(i)
    }
    console.log(i) //now printing i here and easily this
    //will print 5 but as for loop consition i should terminate at 4 but i makes condition false.
}
for_i() //output 0 1 2 3 4 5 , but is not correct according to for loop condition


//Printing Statment to Differetiate both outputs
console.log("THIS IS NOW USAGE OF let")

//So we use let
//let does not allow accessing out of the block

function for_j(){
    for(let j=0;j<5;j++){
        console.log(j)
    }
    console.log(j) //Through an error (ReferenceError: j is not defined) 
    //let does not allows the out of the block accessing that make for loop condition true
    
}

for_j()