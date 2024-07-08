"use strict";
console.log("Class 18");
console.log("Enums: Enumeration");
// enum is just a special class
// in enum we create set of values
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 200] = "male";
    Gender[Gender["female"] = 400] = "female";
    Gender[Gender["transgender"] = 800] = "transgender";
})(Gender || (Gender = {}));
let gen = Gender.male;
// let gen = Gender["male"]// another way of writing the above statements
/*
Enum is a set of value, enum returns the index or defined index or any value

*/
console.log(gen);
gen = Gender.female; // defined index
console.log(gen);
console.log(Gender.transgender); //defineds
let ggen = Gender[800];
console.log(ggen); // by index
let genes = Gender[400];
console.log(genes); // defined returning 0
console.log(0 /* Names.Dawood */);
console.log("\n\nMap");
// .map(()=>{})
/*
instead of loop we use map
also called high order function because in function we are using another function
map can only be applied on an array
Take 3 parameters, 1 is compulsory and 2 are optionals
doesn't get executed on an empty array
makes a duplicate array without changing the original one
*/
let arr = [1, 2, 3, 4, 5];
let arrMap = arr.map((ele) => { return ele * 10; });
let arrMaps = arr.map((ele, i) => { return i; }); // second parameter returns index
let arrMapss = arr.map((ele, i, org) => { return org; });
//3rd parameter returns the number of arrays according to number of elements
console.log("org Array: ", arr);
console.log("Map Array: ", arrMap);
console.log("Indexes: ", arrMaps);
console.log("3rd Para: ", arrMapss);
console.log("\nString Map");
let arrr = ["Dawood", "Taha", "Shan "];
let newwArr = arrr.map((elem, index) => {
    // type defined {name:string,Index:number}[] 
    return {
        name: elem,
        Index: index
    };
});
console.log("Returning Object through Map: ", newwArr);
console.log("Getting specific value at index 1: ", newwArr[1].name);
console.log("\n\nArray Filter");
let a = ["dawood", "aslam", "junaid"];
let newa = a.filter((ele) => {
    return "dawood" == ele;
});
console.log("Returning filtered array: ", newa);
let array = [2, 4, 6, 8, 10];
let ar = array.filter(e => e > 4);
console.log("Returning values greater than 4", ar);
