function car(manufacturer:string, model:string, ...addition_info:string[][])
{
    let car_set =
    {
        manufacture: manufacturer,
        model_no:model,
    }
    for(let i=0; i<addition_info.length; i++)
    {
        let [key, value] = addition_info[i];
        car_set [key] = value;

    }
    return car_set;
}
console.log(car("Honda", "2024", ["Color","Black"],["Engine", "2500cc"]));

