// class is a factory that produces objects
console.log("\nCLASS OOP\n\n")
// Object is an instance
class Person{
    //! to remove errors
    //undefined to remove errors
    name!: string;
    age: number | undefined;
}
let obj = new Person();
obj.name = "Dawood"
obj.age  = 19
console.log(obj)
class Product
{
    name:string
    price:number
    constructor(n:string,p:number)
    {
        this.name = n;
        this.price = p;
    }
    displayProducts()
    {
        console.log(`${this.name}'s price is ${this.price}`);
    }
}
// constructor is a checker who checks all the
// fields that should be filled
const laptop = new Product("Es753",23000);
laptop.name 
laptop.price
laptop.displayProducts();
const mobile = new Product("myPhone",932423);
mobile.name
mobile.price
mobile.displayProducts();

console.log("\n INHERITANCE \n")
class Electronics extends Product
{
    warrant:number
    
    constructor(w:number,n:string, p:number){
       super(n,p)
       this.warrant =w;
    }
    showWarranty(){
        // super to access parents class property
            super.displayProducts()
            console.log(`The warranty is ${this.warrant} years`)
    }
}
const led = new Electronics(5,"LED",35000);
led.showWarranty()
/*
book category
food category
dresses category
*/
// this only prints the object of the class
class Students {
    name:string
    constructor(n:string)
    {
        this.name = n
    }
    rename(name:string)
    {
        this.name = name
    }
}

let s1 = new Students("Ali");
s1.rename("Ahsan");
console.log(s1)
