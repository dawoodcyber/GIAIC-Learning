let age:number    = 35;
let ticket:number =  0;
if(age>0 && age<15)
{
    ticket = 100;
    console.log("Your ticket price is ", ticket);

}
else if(age>14 && age<24)
{
    ticket = 250;
    console.log("Your ticket price is ", ticket);
    
}
else if(age>23 && age<36)
{
    ticket = 300;
    console.log("Your ticket price is ", ticket);
    
}
else if(age>35 && age<51)
{
    ticket = 350;
    console.log("Your ticket price is ", ticket);
    
}
else
{
    console.log("Sorry! Older than 50 are not allowed to enter!");
    
}