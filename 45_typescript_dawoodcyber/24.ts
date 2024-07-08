let arr1:String[]=["red", "blue", "green", "white", "pink"];
let arr2=["goat", "camel", "deer", "elephant", "lion"];
let string1="Dawood";
let string2="dawood";
let num1 = 20;
let num2 = 10;



console.log("\nTests for equality and inequality with strings")
console.log(string1 === string2);
console.log(string1 !== string2);

console.log("\nTests using lower case function")
console.log(string1 === string2);
console.log(string1.toLowerCase() === string2);

console.log("\nNumerical tests involving equality and inequality")
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log("\nTests using && - || operators");
console.log(num1 === num2 || num1 !== num2);
console.log(num1 !== num2 && num1 === num2);
console.log(num1 > num2 && num1 < num2);
console.log(num1 < num2 || num1 > num2);
console.log(num1 >= num2 && num1 <= num2);
console.log(num1 <= num2 || num1 >= num2);
console.log((num1 >= num2 && num1 <= num2) && (num1 === num2 || num1 !== num2));
console.log((num1 <= num2 || num1 >= num2) || (num1 !== num2 && num1 === num2));


console.log("\nTest whether an item is in/notin a array");
console.log(arr1.includes("pink"));
console.log(arr1.includes("orange"));
console.log(!arr1.includes("purple"));

console.log("\nTest whether an item is in/notin a array");
console.log(arr2.includes("buffalo"));
console.log(arr2.includes("elephant"));
console.log(!arr2.includes("giraffe"));