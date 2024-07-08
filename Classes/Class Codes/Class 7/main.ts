let age:number = 18;
fun();
function fun()
{
   console.log(`My age is ${age}`) 
}
function add()
{
    let sum = 4+14;
    console.log("Sum is ",sum);
    return sum;
}
let addition = add();
console.log("Additionn is ", addition);

let user_name:string = "dawood";
let psd:string = "3333";
console.log("\n\nLOGIN Function If-Else Conditions")
function login(){
if(user_name === "dawood")
{
    if(psd === "3333")
    {
        console.log("Welcome "+ user_name);
    }
    else
    {
        console.log("Invalid Password!");
    }
}
else
{
    console.log("Invalid Username!");
}
}
login();
function additionn()
{
    let sum = 4+14;
    console.log("Sum is ",sum);
   return sum;
}
let additi = add();
console.log("Additionn is ", additi);
// Assignments!
/*
1. Area of circle using function pie=3.1415 * r * r
2. Find whether the number is odd or even
3. Average
4. find max and min 
5. password validation(check wehter the password is weak or not , like numbers speacial 
    character everything should be in there)


*/
