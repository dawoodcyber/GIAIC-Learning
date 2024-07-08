"use strict";
console.log("Easy topics has been started");
console.log("Data Structures!\n");
//this is in Typescript
// how to structured the data
// number of elements will be stored in an array
// key value pair will be stored in an object
let student1 = { name: "dawood", roll: 1 };
let student2 = { name: "danish", roll: 2 };
let student3 = { name: "daniyal", roll: 3 };
console.log("\nType Alliases\n");
let std1 = { name: "dawood", roll: 1, phone: 203948, city: "karachi" };
console.log("\nInterface");
let std = { name: "dawood", roll: 1, phone: 203948, city: "karachi" };
console.log("\nWe can do the below thing only in Interfaces, not in type alliases!");
let boss1 = { name: "dawood", roll: 1 };
let emp1 = { name: "dawood", roll: 1, designation: "HR" };
console.log("Different writing syntax of Interface");
let boys;
{
    name_of_boy: "ali";
}
// defining interfaces withe same name, note this can't be done
// in type alliases
//multiple interface can be dfeined by same name and it'll merged the
// both or all interface, in type alliases we can't make
// the mulitple types with the same name
console.log("\nNarrowing types");
function func(a) {
    if (typeof a == "string")
        console.log(a); // a will be string here
    else
        console.log(a); // here a will be number
}
console.log("\nStale Objects & Fresh Object");
let r1 = { name: "ratan lal", age: 34 };
let c1 = { name: "chaman lal", age: 60, email: "chaman@gmail.com" };
// Stale obj
// even though c1 has one more property email but still
// when assigning it to r1 it is accepting called stale object
console.log(r1);
r1 = c1;
console.log(r1);
// here we cannot assign r1 into c1 because it has not the option
// of email and it is defined in c1 so it
//c1=r1 // error
// stale object minimum requirment should be fulfilled
// fresh objects dete waqt acceptable nhi hoga because of type
console.log("\nAnother topic(writing objects in different syntax)");
// writing objects in different syntax
let obj = { name: "Ali asghar", age: 70 };
// objects properties can be shifted
obj = { age: 49, name: "Junaid" };
console.log("\n Intersection of TYpes");
let Objects = { name: "Dawood", age: 19, email: "dawood@gmail.com" };
console.log("\n Literals");
let gender;
//gender = "male" // error cannot assign 
