var age = 18;
fun();
function fun() {
    console.log("My age is ".concat(age));
}
function add() {
    var sum = 4 + 14;
    console.log("Sum is ", sum);
    return sum;
}
var addition = add();
console.log("Additionn is ", addition);
var user_name = "dawood";
var psd = "3333";
console.log("\n\nLOGIN Function If-Else Conditions");
function login() {
    if (user_name === "dawood") {
        if (psd === "3333") {
            console.log("Welcome " + user_name);
        }
        else {
            console.log("Invalid Password!");
        }
    }
    else {
        console.log("Invalid Username!");
    }
}
login();
function additionn() {
    var sum = 4 + 14;
    console.log("Sum is ", sum);
    return sum;
}
var additi = add();
console.log("Additionn is ", additi);
