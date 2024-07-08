console.log("Class 16")
/*
Enums: set of constant variables
types of enums
1. String enums
2. Number enums
*/
let user = "ratan lal"
let pass ="123"
//Ternary operator 
user == "ratan lal"?console.log("Welcome"):console.log("invalid")

user == "ratan lal"?pass == "123"? console.log("Welcome user"):console.log("Incorrect Pass"):console.log("Incorrect user")

if(user == "ratan lal")
{
    console.log("Hello ratan lal")
}else{
    console.log("Invalid user")
}

console.log("\n\nShort circuiting")

user == "ratan lal" && console.log("Welcome Ratan lal")

// in next js we do this to check data
let na = ["dawood", "shaikh"]
na && console.log("\nData is available")
// the above 1 condition checks whehter it has data or not

!na && console.log("\nData is available")

console.log("\n\n Rest and Spread Operator")
let arr1 = ["a","b","c"];
let arr2 = ["e","f","g"];
let newArr = [arr1 , arr2]
console.log(newArr)
// things have and will come , provided by spred operator
// spread operator
let nwArr = [...arr1, ...arr2]
console.log(nwArr)

// spread operator
let obj1 = {
    name:"ratal lal",
    age:20
}
let obj3 = {
    name:"Akhtar lal",
    age:20
}
let obj2 = {... obj1,obj3}
console.log("Object 1 ",obj1)
console.log('Object 2',obj2)

// functions
console.log("\n Rest operator")
function  abc (a:number, b:number, c:number,...rest:number[])
{
    console.log(rest)
    let sum:number = 0
    // rest parameter should be defined in end
    for(let i=0; i<rest.length; i++)
    {
            sum+=rest[i]
    }
    return a+b+c+sum;
}
console.log(abc(1,2,3,4,5,6,7,8,9));

console.log("\n Encapsulation ")
class Person{
    // by default its public
    // _ underscore is a convention for private variables
    protected  _name:string = "Dawood Shaikh"
    age:number = 19
    getName(){
        return this._name = "Dawood"
    }
}
class Human extends Person{
     getName(){
        return this._name = "chaman lal"
     }
}
let p1:Person = new Person();
console.log(p1 instanceof Person) // returns true or false 
// protected is only accessible to classes that extends parents only, not outside class

// private is not accessible to even it's child classess
let h1 = new Human();
//console.log(h1._name) // error
console.log(h1.getName())

console.log("\n\n\nPolyMorphism")

class Per{
    name:string = "Ali Khan"
    age:number  = 19
}
class Hu extends Per{
    name = "Dawood Shaikh"// overriding
}
let hu1 = new Hu();
console.log(hu1.name)

console.log("\n\n\n Abstraction")
abstract class P{
    name:string  
    age:number   
}
//let aP = new P();// error can't create instance of abstract class
class H //implements error
extends P{ // using implement we have to define every thing of abstract
    // using extends we can use single entity or morethan that as well
    name= "Dawood";
}
let he:H = new H();
console.log(he.age)
console.log(he.name)

console.log("\n\nGetter and setters")
class Animal{
    private _ani:string = "Dog"
    // getter
    get name(){
        return this._ani
    }
    set name(x:string){
        this._ani = x
    }
}

let a1:Animal = new Animal();
console.log("Before setter",a1.name)// here getter method doesn't need ()
a1.name = "Cow"
// getter and setter should have same name it's a convention
console.log("After setter",a1.name)

console.log("\n\n Function Overloading")
// function overloading is like signatures
/*
any = typescript rules are finished
undefined = value is not Headers, value is not coming
never = never is not a type but if we add string and number type it will become never
unknown = 
*/
function fun(a:number, b:number):void
function fun(a:string, b:string):void
function fun(a:boolean, b:boolean):void
function fun(a:any, b:any):any{}
fun(2,4)
fun("ratan","lal")
fun(true, false)
