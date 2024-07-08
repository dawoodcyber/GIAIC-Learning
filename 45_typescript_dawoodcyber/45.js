function car(manufacturer, model) {
    var addition_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        addition_info[_i - 2] = arguments[_i];
    }
    var car_set = {
        manufacture: manufacturer,
        model_no: model,
    };
    for (var i = 0; i < addition_info.length; i++) {
        var _a = addition_info[i], key = _a[0], value = _a[1];
        car_set[key] = value;
    }
    return car_set;
}
console.log(car("Honda", "2024", ["Color", "Black"], ["Engine", "2500cc"]));
