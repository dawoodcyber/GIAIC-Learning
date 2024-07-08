let number_array:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i=0; i<number_array.length; i++)
{
    if(i==0)
    console.log(`${number_array[i]}st`)
    else if(i==1)
    console.log(`${number_array[i]}nd`)
    else if(i==2)
    console.log(`${number_array[i]}rd`)
    else if(i>2)
    console.log(`${number_array[i]}th`)
}