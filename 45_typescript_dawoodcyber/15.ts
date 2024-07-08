let RSVP:string[]=["Sir Amin Alam", "Sir Zia Khan", "Sir Qasim","Sir Mateen"];
console.log(" \"RSVP\" ")
for(let k:number=0; k<RSVP.length; k++)
{
    console.log(`Mr.${RSVP[k]}, I would like to invite you on dinner upon my success.`)
}
console.log(`\nMr.${RSVP[1]} won't be able to come!\n`)
RSVP[1]="Kamran Tessori"
console.log(" \"RSVP (Member Replaced)\" ")
for(let k:number=0; k<RSVP.length; k++)
{
    console.log(`Mr.${RSVP[k]}, I would like to invite you at dinner upon my success.`)
}