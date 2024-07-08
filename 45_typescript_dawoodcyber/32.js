var current_users = ["Ali", "Adnan", "Aslam", "Ashraf", "Akhtar", "Akram"];
var new_users = ["Bali", "adnan", "Bilal", "Ashraf", "Bakhtiar", "AkraM"];
for (var i = 0; i < new_users.length; i++) {
    var store_i = new_users[i];
    var count = false;
    for (var j = 0; j < current_users.length; j++) {
        var store_j = current_users[j];
        if (store_i === store_j)
            count = true;
    }
    if (count == true)
        console.log("This ", store_i, " user is already used, not available");
    else
        console.log("This ", store_i, " user is available");
}
