var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
console.log("Class 17");
// global scope and local scope or lexical scope
function entry1() { console.log("entry1"); return "entry1"; }
// above is compression, to remove free-space
var entry1call = entry1();
console.log(entry1call);
var entry2 = function () {
    console.log("entry2");
    return "entry2";
};
/*
the above const is variable that has function value
*/
var entry2call = entry2();
// code runs in call stack
/*
call stack doesn't execute code line by line but by statements
*/
// ; delimeter, delimit
// typescript transpile in javascript
// compiler is general term
// javascript code interpreter, intrepret codes
// javascript scripting always run through interpreter
// cmd is just a medium, code runs in node
//After code in call stack, Global Execution Context checks and run the code
/*
 Global Execution Context runs first and do some initial steps
 first picks all functions:whole function will come
 second picks all variables: only declaration will go
 above process call hoisting or hoist the functions and variable declartion only
 hoisting is prioritizing
*/
console.log("\n\n");
function en() {
    console.log("entry1");
}
var caller = en();
console.log(caller); // caller has undefined value becausefuncionn is not returninng anything
function eng(param) {
    return param;
}
var caller1 = eng("Burger");
var caller2 = eng("pizza");
console.log(caller1, "TAble 01");
console.log(caller2, "TAble 02");
console.log("\n\n");
// arrow function is not real name , lambda is real name
var ent1 = function () { return "ABC"; };
console.log(ent1());
function FoodShop(param) {
    console.log(param);
}
var FriesShopt = function () { console.log("Fries ReADY"); };
// if we are using curly braces then return is compulsory to return
// otherwise it'll return automatically and if write return , it will give 
// error
var order1 = FoodShop("burger");
var order2 = FriesShopt();
console.log(order1, "Table 01"); // undefined
console.log(order2, "Table 2"); // undefined
// arrow function doesn't have this. reference doesn't knoow about himself
// arrow function is short hand
// in arrowfunction {} is not compulsory
// function fun(){} has this. reference
console.log("\n\n\n");
/*
javascript is synchronous programming language
Synchronous
code is dependent on other code

Asynchronous
code is not dependent and we call it callback


*/
/*
Promise cases
pending
Resolve
    -fullfil
    -reject
*/
var sirPromise = new Promise(function (res, rej) {
    // call back has two parameterss
    //res("Passed!")
    rej("failed");
    /* at a time one is allowed either res or rej */
}); // here functiono is call back
// then is chain operation
sirPromise.then(function (reponse) {
    console.log(reponse, "response");
} /*callback */).catch(function (err) {
    console.log(err, "Error");
});
// if status is pass then  is used
// if failed cathch is used
function checkPromiseStatus() {
    var WhatIsPromise = sirPromise;
    console.log(WhatIsPromise);
}
checkPromiseStatus();
// user await for waiting
function checkProiseStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var WhatsPromise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sirPromise];
                case 1:
                    WhatsPromise = _a.sent();
                    console.log(WhatsPromise);
                    return [2 /*return*/];
            }
        });
    });
}
checkProiseStatus();
