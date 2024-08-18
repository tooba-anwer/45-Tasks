function create_car(manufacturer:string, model:string, ...options:string[]){
       let car : { [key: string]: string } = {
        manufacturer : manufacturer,
        model : model,
       };
       options.forEach(option=> {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
       })
       return car;
}
console.log(create_car("Toyota","Corolla","Color:Black","SunRoof:True"));

