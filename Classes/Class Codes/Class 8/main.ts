let n1:number = 10; // strongly typed;
let n2:number = 132; // strongly typed;
let sign:string = "D";// strongly typed : 
let alpha:string[] = ["England", "Australia", "Japan", "Germany", "United States"];
let extra:string[] = alpha.splice(2,2);
for(let k=0; k<extra.length; k++)
{
    console.log(extra[k]);
}

// Assignment : Marksheet

for(let name of extra)
    console.log(name)


    let magicians_name:string[]=["Jake", "Dave", "Anthony", "Mark", "Lupas"];
function show_magicians_name(x:string[])
{
    console.log(x);
}
show_magicians_name(magicians_name);

let x = 3;
let y = 3;



console.log("\nCalculator");
console.log("Additionn");
console.log("Addition is ", myCal(x,y,"+"));
console.log("Subtractionn");
console.log("Subtraction is ", myCal(x,y,"-"));
console.log("Multiply");
console.log("Multiply is ", myCal(x,y,"*"));
console.log("Divide");
console.log("Divide is ", myCal(x,y,"/"));


function myCal(num1:number, num2:number, operand:String)
{
    if(operand == "+")      
        return num1+num2;
    else if(operand == "-")
        return num1-num2;
    else if(operand == "*")
        return num1*num2;
    else if(operand == "/")
        return num1/num2;
}

console.log("Arrow Function")
let func= () => // lambda function, or anonomous function
{
    console.log("Arrow Function")
}
func()
let numb1 = 30;
let numb2 = 20;






let myCal1= (num1:number, num2:number, operand:String)=> 
{
    if(operand == "+")      
        return num1+num2;
    else if(operand == "-")
        return num1-num2;
    else if(operand == "*")
        return num1*num2;
    else if(operand == "/")
        return num1/num2;
}
console.log("\nCalculator");
console.log("Additionn");
console.log("Addition is ", myCal1(numb1, numb2,"+"));
console.log("Subtractionn");
console.log("Subtraction is ", myCal1(numb1, numb2,"-"));
console.log("Multiply");
console.log("Multiply is ", myCal1(numb1, numb2,"*"));
console.log("Divide");
console.log("Divide is ", myCal1(numb1, numb2,"/"));


function nameFunc(){
    return 2+2;
}
// also called plane function
let arrowFunc = () =>(2+2) //In arrow function () means return 
let arrowFunc1 = () =>2+2 //In arrow function () means return 

// defining type of function
let myCal3:()=> void = ()=>{}