var fruits = ["Orange", "Banana", "Mango", "Strawberry", "Apple", "Grapes", "Pineapple",
    "Watermelon", "Kiwi", "Melon", "Guava", "Pear", "Pomogranate"];
var my_favourite_fruits = ["Mango", "Apple", "Pineapple"];
console.log("\n\tFinding Favourite fruits from an Array");
for (var i = 0; i < fruits.length; i++) {
    for (var j = 0; j < my_favourite_fruits.length; j++) {
        if (fruits[i] == my_favourite_fruits[j]) {
            console.log("I really like ".concat(fruits[i]));
            //break;
        }
    }
}
