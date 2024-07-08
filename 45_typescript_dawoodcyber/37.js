function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Size is ".concat(size, " and the message will be printed is \"").concat(message, "\""));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love Python");
