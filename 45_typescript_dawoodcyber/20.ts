import inquirer from "inquirer";
let Countries:string[]=["Pakistan", "England","United Kingdom", "Malaysia", "Australia"];
let Languagess:string[]=["Pakistan", "English","Japanese", "Russian", "Spanish"];
let Mountains:string[]=["Mount Everest", "K2", "Mount Kilimanjaro", "Mount McKinley (Denali)", "Mount Fuji"];


    console.log("\n LIST OF MOUNTAINS ARE:");

    for(let i=0; i<Mountains.length; i++)
    {
        console.log(Mountains[i]);
    }

    console.log("\n LIST OF COUNTRIES ARE:");

    for(let i=0; i<Countries.length; i++)
    {
        console.log(Countries[i]);
    }

    console.log("\n LIST OF LANGUAGES ARE:");

    for(let i=0; i<Languagess.length; i++)
    {
        console.log(Languagess[i]);
    }
