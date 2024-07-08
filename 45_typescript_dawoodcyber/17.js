var RSVP = ["Sir Amin Alam", "Sir Zia Khan", "Sir Qasim", "Sir Mateen", "Sir Hamza"];
console.log(" \"RSVP\" ");
for (var k = 0; k < RSVP.length; k++) {
    console.log("Mr.".concat(RSVP[k], ", I would like to invite you at dinner upon my success."));
}
console.log("\nMr.".concat(RSVP[1], " won't be able to come!\n"));
RSVP[1] = "Kamran Tessori";
console.log(" \"RSVP (Member Replaced)\" ");
for (var k = 0; k < RSVP.length; k++) {
    console.log("Mr.".concat(RSVP[k], ", I would like to invite you at dinner upon my success."));
}
console.log("\n\"I have found a bigger dining table!\"");
var extr = RSVP.slice();
var i = RSVP.length + 3;
var j = 0;
for (var k = 0; k < i; k++) {
    if (k == 0) {
        RSVP[k] = "Miss Atia Khan";
    }
    else if (k == i / 2) {
        RSVP[k] = "Sir Bilal";
    }
    else if (k == i - 1) {
        RSVP[k] = "Sir Dawood Shaikh";
    }
    else {
        RSVP[k] = extr[j];
        j++;
    }
}
for (var k = 0; k < i; k++) {
    console.log("Mr.".concat(RSVP[k], ", I would like to invite you at dinner upon my success."));
}
console.log("\n Ohhh! I can invite only two people");
for (var l = i - 1; l >= 0; l--) {
    if (l >= i - 2)
        console.log(RSVP[l], " you are still invited for dinner");
    else {
        console.log("Sorry! ", RSVP[l], "I can't invite you for dinner");
        RSVP.splice(l, 1);
    }
}
RSVP.splice(0, i);
console.log(RSVP);
