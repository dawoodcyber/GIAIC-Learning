let alpha:string[] = ["England", "Australia", "Japan", "Germany", "United States"];
let extra:string[] = alpha.slice();
for(let k=0; k<alpha.length; k++)
{
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN ALPHABETICAL ORDER!|")
for(let i=0; i<extra.length-1; i++)
{
    for(let j=0; j<extra.length-i-1; j++)
    {
        if(extra[j][0]>extra[j+1][0])
        {
            let ex:string = extra[j];
            extra[j] = extra[j+1];
            extra[j+1] = ex;
        }
        
        
    }

}
for(let k=0; k<extra.length; k++)
{
    console.log(extra[k]);
}
console.log("\t|ACTUAL ARRAY|")
for(let k=0; k<alpha.length; k++)
{
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN REVERSE ALPHABETICAL ORDER!|")

for(let i=0; i<extra.length-1; i++)
{
    for(let j=0; j<extra.length-i-1; j++)
    {
        if(extra[j][0]<extra[j+1][0])
        {
            let ex:string = extra[j];
            extra[j] = extra[j+1];
            extra[j+1] = ex;
        }
        
        
    }

}
for(let k=0; k<extra.length; k++)
{
    console.log(extra[k]);
}
console.log("\t|ACTUAL ARRAY|")
for(let k=0; k<alpha.length; k++)
{
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN REVERSE ORDER!|")

for(let k=extra.length-1; k>=0; k--)
{
    console.log(alpha[k]);
}
console.log("\t|PRINTING BACK TO ORIGINAL ORDER!|")

for(let k=0; k<extra.length; k++)
{
    console.log(alpha[k]);
}
console.log("\t|PRINTING IN ALPHABETICAL ORDER!|")
for(let i=0; i<extra.length-1; i++)
{
    for(let j=0; j<extra.length-i-1; j++)
    {
        if(extra[j][0]>extra[j+1][0])
        {
            let ex:string = extra[j];
            extra[j] = extra[j+1];
            extra[j+1] = ex;
        }
        
        
    }

}
for(let k=0; k<extra.length; k++)
{
    console.log(extra[k]);
}
console.log("\t|PRINTING IN REVERSE ALPHABETICAL ORDER!|")

for(let i=0; i<extra.length-1; i++)
{
    for(let j=0; j<extra.length-i-1; j++)
    {
        if(extra[j][0]<extra[j+1][0])
        {
            let ex:string = extra[j];
            extra[j] = extra[j+1];
            extra[j+1] = ex;
        }
        
        
    }

}
for(let k=0; k<extra.length; k++)
{
    console.log(extra[k]);
}


