let magicians_name:string[]=["Jake", "Dave", "Anthony", "Mark", "Lupas"];
function show_magicians_name(x:string[])
{
    console.log(x);
}
show_magicians_name(magicians_name);
console.log("\n\t AFTER MODIFYING")

 function make_great()
 {
    for(let i=0; i<magicians_name.length; i++)
    {
        magicians_name[i] = `The Great ${magicians_name[i]}`;
    }
 }
 make_great();
 show_magicians_name(magicians_name);
