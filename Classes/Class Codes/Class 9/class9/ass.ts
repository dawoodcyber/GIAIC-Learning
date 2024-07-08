// Assignemnt nested function, make functions global variable, function k andar 2 functions 
// and use 2nd functions variable in 3rd one
let num=1;
//let nick;
function fun1()
{
    num=2;
    function fun2()
    {
        let nick;
        num = 3;
    }
    function fun3()
    {
        
        num =4;
        nick="dawood";
    }
}