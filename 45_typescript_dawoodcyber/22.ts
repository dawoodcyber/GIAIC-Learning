let alpha:string[] = ["England", "Australia", "Japan", "Germany", "United States"];
// arrray indices starts from 0 in typescript, and length should be -1 because indices starts from 0
for(let k=1; k<=alpha.length; k++)
{
    console.log(alpha[k]);

}
// arrray indices starts from 0 in typescript, and length should be -1 because indices starts from 0
console.log("\nCORRECT CODE")
for(let k=0; k<alpha.length; k++)
{
    console.log(alpha[k]);

}
function myFunct(n:string, age:number){
return n+age
}
let res = myFunct("dawood",19)

