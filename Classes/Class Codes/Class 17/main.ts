console.log("Class 17");
// global scope and local scope or lexical scope
function entry1(){console.log("entry1");return"entry1"}
// above is compression, to remove free-space
let entry1call = entry1()
console.log(entry1call)
const entry2 = function (){
    console.log("entry2")
    return "entry2"
}
/*
the above const is variable that has function value
*/
let entry2call= entry2();
// code runs in call stack
/*
call stack doesn't execute code line by line but by statements
*/
// ; delimeter, delimit
// typescript transpile in javascript
// compiler is general term
// javascript code interpreter, intrepret codes
// javascript scripting always run through interpreter
// cmd is just a medium, code runs in node

//After code in call stack, Global Execution Context checks and run the code

/*
 Global Execution Context runs first and do some initial steps
 first picks all functions:whole function will come
 second picks all variables: only declaration will go
 above process call hoisting or hoist the functions and variable declartion only
 hoisting is prioritizing
*/
console.log("\n\n")
function en(){
    console.log("entry1")
}
let caller = en();
console.log(caller)// caller has undefined value becausefuncionn is not returninng anything

function eng(param:string){
return param
}
let caller1 = eng("Burger");
let caller2 = eng("pizza");
console.log(caller1,"TAble 01")
console.log(caller2,"TAble 02")

console.log("\n\n")

// arrow function is not real name , lambda is real name
let ent1 = () => "ABC"
console.log(ent1())

function FoodShop(param:string)
{
    console.log(param)
}
let FriesShopt = () => {console.log("Fries ReADY")};
// if we are using curly braces then return is compulsory to return
// otherwise it'll return automatically and if write return , it will give 
// error
let order1 = FoodShop("burger");
let order2 = FriesShopt();
console.log(order1,"Table 01")// undefined
console.log(order2,"Table 2")// undefined
// arrow function doesn't have this. reference doesn't knoow about himself
// arrow function is short hand
// in arrowfunction {} is not compulsory

// function fun(){} has this. reference


console.log("\n\n\n")

/*
javascript is synchronous programming language
Synchronous
code is dependent on other code

Asynchronous
code is not dependent and we call it callback


*/

/*
Promise cases
pending
Resolve
    -fullfil
    -reject
*/
let sirPromise = new Promise(function ( res, rej) {
    // call back has two parameterss
    //res("Passed!")
    rej("failed")
    /* at a time one is allowed either res or rej */

}) // here functiono is call back
// then is chain operation

sirPromise.then(function (reponse){
    console.log(reponse,"response")
}/*callback */).catch(function (err)
{
    console.log(err,"Error")
})

// if status is pass then  is used
// if failed cathch is used


function checkPromiseStatus(){
    let WhatIsPromise = sirPromise;
    console.log(WhatIsPromise)
}
checkPromiseStatus()
// user await for waiting
async function checkProiseStatus(){
    let WhatsPromise = await sirPromise;
    console.log(WhatsPromise)
}
checkProiseStatus()