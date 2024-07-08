import inquirer from "inquirer";
let flag:boolean=true;
while(flag){
let num = await inquirer.prompt
([
    {
        message: "Enter any number,Ex{1,3,9,...}",
        type:"number",
        name:"number",
    }
])
if(num.number>=0){
  
console.log(`\n\t \"Table of ${num.number}\" \t\n`)

for(let i=1; i<11;i++)
{
    console.log(`${num.number} x ${i}   =   ${num.number * i}`)
}
flag = false;
}
else{
    console.log("Enter positive number only!")
  
}}