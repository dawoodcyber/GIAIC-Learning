import inquirer from "inquirer";

console.log("Class # 12");
console.log("Tuples:(Array)");
// Tuple is basically an array
// It's an type array
// it is defined array
let arr:[string,number,boolean]=["Dawod", 19, true];
console.log(arr);
// type is predefined and elements are also fixed
let arr1:[string, string, number, string?] = ["Dawood","Shaikh",12];
console.log(arr1);

// ? is used to define type as optional
// if we don't use ? then we have to put required element type
let arr3:[string, number[]]=["dawood",[12,12]];
console.log(arr3);

console.log("\n\nOBJECTS");
// object could be anything
// objects has different properties divided in key and value pair
 function salary() {
    return "500k";
}

let obj = {
        name:"Dawood Shaikh",
        age:19,
        university:"SMI University",
        cars:["cherry", "bentley"],
        salary:salary()        
}
console.log("Name ",obj.name);
console.log(`Age ${obj.age}`);
console.log("University ",obj.university);
console.log(`Cars ${obj["cars"]}`);
console.log("Cars at index-1",obj.cars[1]);
console.log("Salary ",obj.salary);

console.log("\n\nInquirer && LOOPS");
console.log("Enter your address");

let a = await inquirer.prompt([
   {
    name:"table",
    message:"Enter number you want to get the table of?",
    type: "number"

   }


])
for(let i=1; i<11; i++){
    console.log(`${a.table} X ${i} = ${a.table*i}`);
}