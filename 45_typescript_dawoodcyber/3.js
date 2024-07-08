// we'll do later
var naam = "dawooD sHaikh is a good boy";
console.log("Upper Case: ", naam.toUpperCase());
console.log("Lower Case: ", naam.toLowerCase());
console.log("Title Case: ", naam.toLowerCase().replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
