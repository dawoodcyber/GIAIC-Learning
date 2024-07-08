var alpha = ["England", "Australia", "Japan", "Germany", "United States"];
var extra = alpha.slice();
for (var k = 0; k < alpha.length; k++) {
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN ALPHABETICAL ORDER!|");
for (var i = 0; i < extra.length - 1; i++) {
    for (var j = 0; j < extra.length - i - 1; j++) {
        if (extra[j][0] > extra[j + 1][0]) {
            var ex = extra[j];
            extra[j] = extra[j + 1];
            extra[j + 1] = ex;
        }
    }
}
for (var k = 0; k < extra.length; k++) {
    console.log(extra[k]);
}
console.log("\t|ACTUAL ARRAY|");
for (var k = 0; k < alpha.length; k++) {
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN REVERSE ALPHABETICAL ORDER!|");
for (var i = 0; i < extra.length - 1; i++) {
    for (var j = 0; j < extra.length - i - 1; j++) {
        if (extra[j][0] < extra[j + 1][0]) {
            var ex = extra[j];
            extra[j] = extra[j + 1];
            extra[j + 1] = ex;
        }
    }
}
for (var k = 0; k < extra.length; k++) {
    console.log(extra[k]);
}
console.log("\t|ACTUAL ARRAY|");
for (var k = 0; k < alpha.length; k++) {
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN REVERSE ORDER!|");
for (var k = extra.length - 1; k >= 0; k--) {
    console.log(alpha[k]);
}
console.log("\t|PRINTING BACK TO ORIGINAL ORDER!|");
for (var k = 0; k < extra.length; k++) {
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN ALPHABETICAL ORDER!|");
for (var i = 0; i < extra.length - 1; i++) {
    for (var j = 0; j < extra.length - i - 1; j++) {
        if (extra[j][0] > extra[j + 1][0]) {
            var ex = extra[j];
            extra[j] = extra[j + 1];
            extra[j + 1] = ex;
        }
    }
}
for (var k = 0; k < extra.length; k++) {
    console.log(extra[k]);
}
console.log("\t|PRINTING IN REVERSE ALPHABETICAL ORDER!|");
for (var i = 0; i < extra.length - 1; i++) {
    for (var j = 0; j < extra.length - i - 1; j++) {
        if (extra[j][0] < extra[j + 1][0]) {
            var ex = extra[j];
            extra[j] = extra[j + 1];
            extra[j + 1] = ex;
        }
    }
}
for (var k = 0; k < extra.length; k++) {
    console.log(extra[k]);
}
