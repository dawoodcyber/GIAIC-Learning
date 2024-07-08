function describe_city(city, country) {
    if (country === void 0) { country = "Canada"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Ontaria");
describe_city("Karachi", "Pakistan");
describe_city("Ottawa");
