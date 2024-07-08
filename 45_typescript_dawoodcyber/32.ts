let current_users:string[] = ["Ali", "Adnan", "Aslam", "Ashraf", "Akhtar", "Akram"];
let new_users:string[] = ["Bali", "adnan", "Bilal", "Ashraf", "Bakhtiar", "AkraM"];

for(let i=0; i<new_users.length; i++)
{
    let store_i = new_users[i];
    let count = false;
    for(let j=0; j<current_users.length; j++)
    {
        let store_j = current_users[j];

       
            if(store_i === store_j)
            count= true;
    }
    if(count ==true)
 
        console.log("This ", store_i," user is already used, not available");
   
    else
    console.log("This ", store_i," user is available");


}