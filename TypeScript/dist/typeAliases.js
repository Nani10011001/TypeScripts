"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarYear = 2000;
const CarType = "BMW";
const CarModel = "corolla";
console.log(CarModel);
const car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};
console.log(car.year); // use the for unions intersections and primitives
const bear = { name: "polar bear", honey: true };
console.log(bear.name);
let response = "success";
console.log(response);
const rectangle = {
    heigh: 20,
    width: 10
};
console.log("interface", rectangle.heigh, ",", rectangle.width);
const dog = {
    name: "husky",
    age: 5
};
console.log("interface merigin", dog.name);
const humanEvol = {
    name: "nani",
    height: 5.8,
    color: "blue"
};
console.log("interface_extending of it: ", humanEvol.name);
//# sourceMappingURL=typeAliases.js.map