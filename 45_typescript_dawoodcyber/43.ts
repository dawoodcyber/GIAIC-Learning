let magicians_name:string[]=["Jake", "Dave", "Anthony", "Mark", "Lupas"];
let copy_mag_name:string[]=[...magicians_name];
// let copy_mag_name:string[]=magicians_name.slice();
// let copy_mag_name:string[]=magicians_name.concat();
function show_magicians_name(x:string[])
{
    console.log(x);
}
show_magicians_name(magicians_name);
console.log("\n\t AFTER MODIFYING")

 function make_great(x:string[])
 {
    for(let i=0; i<x.length; i++)
    {
        x[i] = `The Great ${x[i]}`;
    }
    return x;
 }
 console.log(make_great(copy_mag_name));
 
console.log("ORIGINAL ARRAY")
show_magicians_name(magicians_name);
console.log("Great Added ARRAY")
show_magicians_name(copy_mag_name);


