let fruits:string[] = ["Orange", "Banana", "Mango", "Strawberry", "Apple", "Grapes", "Pineapple", 
"Watermelon", "Kiwi", "Melon", "Guava","Pear", "Pomogranate"];
let my_favourite_fruits:string[] = ["Mango", "Apple", "Pineapple"];
console.log("\n\tFinding Favourite fruits from an Array")
for(let i=0; i<fruits.length; i++)
{
    for(let j=0; j<my_favourite_fruits.length; j++)
    {
        if(fruits[i] == my_favourite_fruits[j])
        {
            console.log(`I really like ${fruits[i]}`);
            //break;
        }
    }
}
