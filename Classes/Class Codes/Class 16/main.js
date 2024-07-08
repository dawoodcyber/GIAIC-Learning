var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Class 16");
/*
Enums: set of constant variables
types of enums
1. String enums
2. Number enums
*/
var user = "ratan lal";
var pass = "123";
//Ternary operator 
user == "ratan lal" ? console.log("Welcome") : console.log("invalid");
user == "ratan lal" ? pass == "123" ? console.log("Welcome user") : console.log("Incorrect Pass") : console.log("Incorrect user");
if (user == "ratan lal") {
    console.log("Hello ratan lal");
}
else {
    console.log("Invalid user");
}
console.log("\n\nShort circuiting");
user == "ratan lal" && console.log("Welcome Ratan lal");
// in next js we do this to check data
var na = ["dawood", "shaikh"];
na && console.log("\nData is available");
// the above 1 condition checks whehter it has data or not
!na && console.log("\nData is available");
console.log("\n\n Rest and Spread Operator");
var arr1 = ["a", "b", "c"];
var arr2 = ["e", "f", "g"];
var newArr = [arr1, arr2];
console.log(newArr);
// things have and will come , provided by spred operator
// spread operator
var nwArr = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(nwArr);
// spread operator
var obj1 = {
    name: "ratal lal",
    age: 20
};
var obj3 = {
    name: "Akhtar lal",
    age: 20
};
var obj2 = __assign(__assign({}, obj1), { obj3: obj3 });
console.log("Object 1 ", obj1);
console.log('Object 2', obj2);
// functions
console.log("\n Rest operator");
function abc(a, b, c) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    console.log(rest);
    var sum = 0;
    // rest parameter should be defined in end
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return a + b + c + sum;
}
console.log(abc(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log("\n Encapsulation ");
var Person = /** @class */ (function () {
    function Person() {
        // by default its public
        // _ underscore is a convention for private variables
        this._name = "Dawood Shaikh";
        this.age = 19;
    }
    Person.prototype.getName = function () {
        return this._name = "Dawood";
    };
    return Person;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.getName = function () {
        return this._name = "chaman lal";
    };
    return Human;
}(Person));
var p1 = new Person();
console.log(p1 instanceof Person); // returns true or false 
// protected is only accessible to classes that extends parents only, not outside class
// private is not accessible to even it's child classess
var h1 = new Human();
//console.log(h1._name) // error
console.log(h1.getName());
console.log("\n\n\nPolyMorphism");
var Per = /** @class */ (function () {
    function Per() {
        this.name = "Ali Khan";
        this.age = 19;
    }
    return Per;
}());
var Hu = /** @class */ (function (_super) {
    __extends(Hu, _super);
    function Hu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Dawood Shaikh"; // overriding
        return _this;
    }
    return Hu;
}(Per));
var hu1 = new Hu();
console.log(hu1.name);
console.log("\n\n\n Abstraction");
var P = /** @class */ (function () {
    function P() {
    }
    return P;
}());
//let aP = new P();// error can't create instance of abstract class
var H //implements error
 = /** @class */ (function (_super) {
    __extends(H, _super);
    function H() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // using extends we can use single entity or morethan that as well
        _this.name = "Dawood";
        return _this;
    }
    return H;
}(P));
var he = new H();
console.log(he.age);
console.log(he.name);
console.log("\n\nGetter and setters");
var Animal = /** @class */ (function () {
    function Animal() {
        this._ani = "Dog";
    }
    Object.defineProperty(Animal.prototype, "name", {
        // getter
        get: function () {
            return this._ani;
        },
        set: function (x) {
            this._ani = x;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var a1 = new Animal();
console.log("Before setter", a1.name); // here getter method doesn't need ()
a1.name = "Cow";
// getter and setter should have same name it's a convention
console.log("After setter", a1.name);
