// type scripts allows types to be defined separatly from the variables that use them
// typescripts help use initialize the type of the variable within the variable
type carYear=number
type carType=string
type carModel=string
type Car={
    year:carYear,
    type:carType,
    model:carModel
}
const CarYear: carYear=2000
const CarType: carType="BMW"
const CarModel: carModel="corolla"
console.log(CarModel)
const car:Car={
year:CarYear,
type:CarType,
model:CarModel
}
console.log(car.year)// use the for unions intersections and primitives
// union and intersection Types
type Animal ={
    name:string
}
type Bear =Animal & {honey:boolean}
const bear:Bear={name:"polar bear",honey:true}
console.log(bear.name)
type Status="success" | "error"
let response: Status="success"
console.log(response)
// interfaces are similar to the alias ,except only apply to object types
interface Reactangle {
    heigh:number,
    width:number
}
const rectangle:Reactangle={
    heigh:20,
    width:10
}
console.log("interface",rectangle.heigh,",",rectangle.width)
//interface merginig 
interface Animals {name:string;} interface Animals {age:number;} const dog:Animals={
    name:"husky",
    age:5
}
console.log("interface merigin",dog.name)
// extending of interfaces
interface Human{
    name:string,
    height:number
}
interface ColorHuman extends Human{
    color:string
}
const humanEvol:ColorHuman={
    name:"nani",
    height:5.8,
    color:"blue"
}
console.log("interface_extending of it: ",humanEvol.name)


