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
// class is a factory that produces objects
console.log("\nCLASS OOP\n\n");
// Object is an instance
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj = new Person();
obj.name = "Dawood";
obj.age = 19;
console.log(obj);
var Product = /** @class */ (function () {
    function Product(n, p) {
        this.name = n;
        this.price = p;
    }
    Product.prototype.displayProducts = function () {
        console.log("".concat(this.name, "'s price is ").concat(this.price));
    };
    return Product;
}());
// constructor is a checker who checks all the
// fields that should be filled
var laptop = new Product("Es753", 23000);
laptop.name;
laptop.price;
laptop.displayProducts();
var mobile = new Product("myPhone", 932423);
mobile.name;
mobile.price;
mobile.displayProducts();
console.log("\n INHERITANCE \n");
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(w, n, p) {
        var _this = _super.call(this, n, p) || this;
        _this.warrant = w;
        return _this;
    }
    Electronics.prototype.showWarranty = function () {
        // super to access parents class property
        _super.prototype.displayProducts.call(this);
        console.log("The warranty is ".concat(this.warrant, " years"));
    };
    return Electronics;
}(Product));
var led = new Electronics(5, "LED", 35000);
led.showWarranty();
/*
book category
food category
dresses category
*/
// this only prints the object of the class
var Students = /** @class */ (function () {
    function Students(n) {
        this.name = n;
    }
    Students.prototype.rename = function (name) {
        this.name = name;
    };
    return Students;
}());
var s1 = new Students("Ali");
s1.rename("Ahsan");
console.log(s1);
