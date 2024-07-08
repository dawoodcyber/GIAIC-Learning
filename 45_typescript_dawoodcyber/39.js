function city_country(city, country) {
    var sentence = "\"".concat(city, ", ").concat(country, "\" ");
    return sentence;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Ottawa", "Canada"));
console.log(city_country("Istanbul", "Turkey"));
