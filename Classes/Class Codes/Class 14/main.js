"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\"'Class 14'\"");
console.log("\n\"'Call Back Function'\"\n");
// kisi function ke argument main function pass krna
function hello(callBack) {
    callBack();
}
function myName() {
    console.log("hello callback Function");
}
hello(myName);
console.log("\nPractice call back function with parameters");
function one(cBack) {
    cBack(5);
}
function extra(num) {
    console.log("Another practices " + num);
    //one(extra) infinite condition
}
one(extra);
console.log("\nCallback by defining types");
function a(f) {
    f();
}
function b() {
    console.log("Printing b function");
}
a(b);
console.log("\nCallback by another syntax");
function c(a) {
    a();
}
c(() => { });
/*
Call stack where all the code of lines comes
and after execution code removes and next line of code
will come, if any function is running then il'll be keep
adding the code of lines in call stack until the function
finishes
*/
console.log("Synchronous and Asynchronous");
// synchronous = line by line code execution, one by
//one code execution until it is executed.
//asynchronous = not dependent,multiple works at the
// same time.
//Javascripts native function that is SETTIMEOUT
// has 2 parameters one callback function and 2nd is
// time 
// below code will be executed after 5mins
//asynchronous
setTimeout(() => { console.log("Hello setimeout"); }, 5000);
/*
first sync code executes and if any
asyn availble then it shifts in web api's for processing
and after it, it goes in
call back queue and in the end or after running all
sync code java then will code call back queue
if code or result is available then it'll be executed

*/
// the above definition also called event loop.
//call stack is our VSCODE
// Here hello set time out will be printed in the end
console.log("\nSynchronous");
console.log(1);
console.log(2);
console.log(3);
console.log("\n Promise");
/*
promise takes call back function
call back function takes two parameters

*/
// below method used to make custom promise
let myPromise = new Promise((resolve, reject) => {
    console.log("Promise Pending");
    setTimeout(() => {
        console.log("Promise has been resolved");
        console.log("Promise has been rejected");
        reject(new Error("nahi chal raha"));
        resolve("dawood");
    }, 3000);
});
//if resolve then method will use
// if  reject catch metod willuse
myPromise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
//this promise used for external data handling
// try catch is used for internal code handling
// fetch methods return promise and multiple things
// jasonplaceholder gives free api's for testing
//.then returns promise
let url = "https://jsonplaceholder.typicode.com/todos/1"; // api will come here
let fetchData = fetch(url).then((resol) => resol.json().then((res) => console.log(res)))
    .catch((erro) => console.log(erro));
//res.json() function to make the code readable
// and it takes call back function
console.log(fetchData);
console.log("More Advanced , more easy");
// async function that means it'll go in web api
// then in call back queue
async function fetcFunc() {
    // to deal with errors if ocured
    try {
        let link = "https://jsonplaceholder.typicode.com/todos/1";
        let fetch_data = await fetch(link);
        //to make it readable
        let rs = await fetch_data.json();
        console.log(rs);
    }
    catch (error) {
        console.log("error handle hogaya");
    }
}
fetcFunc();
