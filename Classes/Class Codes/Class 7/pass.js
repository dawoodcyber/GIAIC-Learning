var pass1 = "dawoD!d3";
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
for (var i = 0; i < pass1.length; i++) {
    if ((pass1[i] >= 'a' && pass1[i] <= 'z')) {
        check1 = 1;
    }
    if (pass1[i] >= 'A' && pass1[i] <= 'Z') {
        check2 = 1;
    }
    if (pass1[i] >= '0' && pass1[i] <= '9') {
        check3 = 1;
    }
    if (pass1[i] >= '!' && pass1[i] <= '+') {
        check4 = 1;
    }
}
if (check1 == 1 && check2 == 1 && check3 == 1 && check4 == 1) {
    console.log("Password is strong");
}
else
    console.log("Password is weak");
