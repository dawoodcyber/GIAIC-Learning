console.log("Class # 11");
console.log("\nPOP");
let arrStudents=["Ali", "Kamran", "Asad", "Muneer", "Dawood"];
console.log("Students: ", arrStudents);
// Pop changed the original array
// only removes last element of an array.
let arrPop = arrStudents.pop(); // stores the last deleted element
console.log("Removed Element: ",arrPop);
console.log("Students: ",arrStudents);
console.log("\n\nPUSH");
// modification done in an original array
// push add elements at end of an array and always return length of the array
console.log("Students:" ,arrStudents)
let n1 = arrStudents.push("Dawood");
console.log("Added element", n1)
console.log("Students",arrStudents)

console.log("\n\n\tSHIFT");
// Delete first element of an array
// and return the added element "Ali"
console.log("Students", arrStudents);
let first = arrStudents.shift();
console.log("first element removed", first);
console.log("Students", arrStudents);

console.log("\n\n\t UNSHIFT");
// adds element at 0 index, returns the length of the array
console.log("Students", arrStudents);
let addd = arrStudents.unshift("Dawood");
console.log("Added first", addd);
console.log("Students:", arrStudents);

console.log("\n\n\t SLICE ");
let teachers = ["Ayesha", "Mehr", "Aqsa", "Huda"];
console.log("Teachers: ", teachers);
// take two arguments for cutting, start number and end number to make your own new array
// make another copy of the original array;
console.log("Another Array Created: index 1 till end  :",teachers.slice(1)); // mehr , aqsa
// console.log(teachers.slice(1));// keep printing the array element from 1 index till end
console.log("Original Teachers array: ", teachers);



console.log("\n\n\t SPLICE ");
// modifies the original array
// first argument is from starting remove and second argument is the number of elements
// you want to remove and if you want to add any element then give the third forth and so forth-
// parameters
console.log("Orginal Array:", teachers);
console.log(teachers.splice(1,0,"Akram","Adnan"));// add the names at first index
// and remove 0 elements
console.log("Orginal Array:", teachers);





