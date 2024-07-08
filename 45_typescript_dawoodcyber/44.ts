function sandwich_items(...options:string[])
{
    console.log("\n\tORDERED SANDWICH")
    if(options.length === 0)
    {
        console.log("You have selected nothing for your Sandwich")
    }
    else{
        let count =1;
        console.log(`Your sandwich contains: `);

        for(let i=0; i<options.length; i++)
        {
            console.log(`${count}. ${options[i]}`);
            count++;
        }
    }
}

sandwich_items("Chicken", "Cheese", "Tomato", "Ketchup", "Mayonaise");
sandwich_items("Chicken", "Coleslaw", "Onion", "Spices", );
sandwich_items("Beef", "Carrots", "BellPepper", "Sauces", "Garlic" );
