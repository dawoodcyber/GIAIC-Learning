var RSVP = ["Sir Amin Alam", "Sir Zia Khan", "Sir Qasim", "Sir Mateen"];
console.log(" \"RSVP\" ");
for (var k = 0; k < RSVP.length; k++) {
    console.log("Mr.".concat(RSVP[k], ", I would like to invite you on dinner upon my success."));
}
console.log("\nMr.".concat(RSVP[1], " won't be able to come!\n"));
RSVP[1] = "Kamran Tessori";
console.log(" \"RSVP (Member Replaced)\" ");
for (var k = 0; k < RSVP.length; k++) {
    console.log("Mr.".concat(RSVP[k], ", I would like to invite you at dinner upon my success."));
}
