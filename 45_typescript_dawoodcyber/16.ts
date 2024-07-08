let RSVP: string[] = ["Sir Amin Alam", "Sir Zia Khan", "Sir Qasim", "Sir Mateen", "Sir Hamza"];
console.log(" \"RSVP\" ");
for (let k: number = 0; k < RSVP.length; k++) {
    console.log(`Mr.${RSVP[k]}, I would like to invite you at dinner upon my success.`);
}
console.log(`\nMr.${RSVP[1]} won't be able to come!\n`);
RSVP[1] = "Kamran Tessori"
console.log(" \"RSVP (Member Replaced)\" ");
for (let k: number = 0; k < RSVP.length; k++) {
    console.log(`Mr.${RSVP[k]}, I would like to invite you at dinner upon my success.`);
}
console.log("\n\"I have found a bigger dining table!\"")
let extr: string[] = RSVP.slice();
let i: number = RSVP.length + 3;
let j: number = 0;

for (let k: number = 0; k < i; k++) {
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
for (let k: number = 0; k < i; k++) {
    console.log(`Mr.${RSVP[k]}, I would like to invite you at dinner upon my success.`);
}