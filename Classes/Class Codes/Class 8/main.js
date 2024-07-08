var n1 = 10; // strongly typed;
var n2 = 132; // strongly typed;
var sign = "D"; // strongly typed : 
var alpha = ["England", "Australia", "Japan", "Germany", "United States"];
var extra = alpha.splice(2, 2);
for (var k = 0; k < extra.length; k++) {
    console.log(extra[k]);
}
// Assignment : Marksheet
for (var _i = 0, extra_1 = extra; _i < extra_1.length; _i++) {
    var name_1 = extra_1[_i];
    console.log(name_1);
}
var magicians_name = ["Jake", "Dave", "Anthony", "Mark", "Lupas"];
function show_magicians_name(x) {
    console.log(x);
}
show_magicians_name(magicians_name);
var x = 3;
var y = 3;
console.log("\nCalculator");
console.log("Additionn");
console.log("Addition is ", myCal(x, y, "+"));
console.log("Subtractionn");
console.log("Subtraction is ", myCal(x, y, "-"));
console.log("Multiply");
console.log("Multiply is ", myCal(x, y, "*"));
console.log("Divide");
console.log("Divide is ", myCal(x, y, "/"));
function myCal(num1, num2, operand) {
    if (operand == "+")
        return num1 + num2;
    else if (operand == "-")
        return num1 - num2;
    else if (operand == "*")
        return num1 * num2;
    else if (operand == "/")
        return num1 / num2;
}
