
// console.log("\"Class 9\"");
// let x = 2;
// let y = 2;

// let mul=()=>x*y;
// console.log(mul());

// let mul1=(z,k)=>z*k;
// console.log(mul1(5,5));
// console.log("\"Class 9\"\n\n");

// console.log("Variable Scope\n");


let fName = "Dawood Shaikh"; // Global Variable

function nam(){
    var lName = " Shaikh "; // local variable
    console.log(fName);
}
//console.log(lName);

nam();
// Assignemnt nested function, make functions global variable, function k andar 2 functions 
// and use 2nd functions variable in 3rd one

console.log("Difference in Variables and Scopes")
// var function scoep
// let block Scope
// const block scope
var abc = "abcd"
var abc = "abcdef"

// cannot be redeclared
let abc1 = "abcd"
let abc1= "abcdef"

const abc2 = "abcd"
const abc2= "abcdef"

//cannot change constants
const lamp = "fibe23";
lamp = "Hr23"

//  var through functionsn

function myFunc(){
    var abc = "abc"
    if (true){
        console.log(abc)
    }
}
// let issue
let hell = "abcd"
function myFunc1(){
   
    if (true){
        console.log(hell)

    }
}

















