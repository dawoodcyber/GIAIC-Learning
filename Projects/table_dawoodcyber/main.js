"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var flag = true;
while (flag) {
    var num = await inquirer_1.default.prompt([
        {
            message: "Enter any number,Ex{1,3,9,...}",
            type: "number",
            name: "number",
        }
    ]);
    if (num.number >= 0) {
        console.log("\n\t \"Table of ".concat(num.number, "\" \t\n"));
        for (var i = 1; i < 11; i++) {
            console.log("".concat(num.number, " x ").concat(i, "   =   ").concat(num.number * i));
        }
        flag = false;
    }
    else {
        console.log("Enter positive number only!");
    }
}
