function sandwich_items() {
    var options = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        options[_i] = arguments[_i];
    }
    console.log("\n\tORDERED SANDWICH");
    if (options.length === 0) {
        console.log("You have selected nothing for your Sandwich");
    }
    else {
        var count = 1;
        console.log("Your sandwich contains: ");
        for (var i = 0; i < options.length; i++) {
            console.log("".concat(count, ". ").concat(options[i]));
            count++;
        }
    }
}
sandwich_items("Chicken", "Cheese", "Tomato", "Ketchup", "Mayonaise");
sandwich_items("Chicken", "Coleslaw", "Onion", "Spices");
sandwich_items("Beef", "Carrots", "BellPepper", "Sauces", "Garlic");
