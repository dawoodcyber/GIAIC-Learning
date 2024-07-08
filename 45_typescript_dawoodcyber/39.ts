function city_country(city:string, country:string)
{
    let sentence = `"${city}, ${country}" `
    return sentence;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Ottawa", "Canada"));
console.log(city_country("Istanbul", "Turkey"));