var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians_name = ["Jake", "Dave", "Anthony", "Mark", "Lupas"];
var copy_mag_name = __spreadArray([], magicians_name, true);
// let copy_mag_name:string[]=magicians_name.slice();
// let copy_mag_name:string[]=magicians_name.concat();
function show_magicians_name(x) {
    console.log(x);
}
show_magicians_name(magicians_name);
console.log("\n\t AFTER MODIFYING");
function make_great(x) {
    for (var i = 0; i < x.length; i++) {
        x[i] = "The Great ".concat(x[i]);
    }
    return x;
}
console.log(make_great(copy_mag_name));
console.log("ORIGINAL ARRAY");
show_magicians_name(magicians_name);
console.log("Great Added ARRAY");
show_magicians_name(copy_mag_name);
