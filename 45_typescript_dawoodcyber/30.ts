let user_names:string[] = ["Ali", "Adnan", "Aslam", "Ashraf", "Akhtar","Akram","Admin"];
for(let i=0; i<user_names.length; i++)
{
    if(user_names[i] === "Admin")
    {
        console.log(`Welcome! ${user_names[i]}, would you like to see an updated report?.`);

    }

    console.log(`Welcome! ${user_names[i]}, hope you're good today.`);
}