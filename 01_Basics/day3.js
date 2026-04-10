//How var and let are different 
//why we use let now these days

//var (It gives the accessing out of the block)
//how lets see

function see_diff(){
    for(var i=0;i<5;i++){
        console.log(i)
    }
    //if I am printing i here means now value of i is 5 because till
    //condition it was 4 now condition is false
    //but var gives access here as well
    console.log(i)

}

see_diff() //output will be 0 1 2 3 4 5 //but condition was till 4 that is disadvatage of using var

//Just printing the a statement to see different 
console.log("NOW THIS IS USAGE OF let")
//But let (It does not allow the accessing out of the block)
function see_diff1(){
    for(let j=0;j<5;j++){
        console.log(j)
    }
    //console.log(i) 
    ////this will through error that i is not defined
    //because let does not allow out of the block accessing.
    //That is totally write because condition of loop became safe here.
}

see_diff1()