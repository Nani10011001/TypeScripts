// typescript utility types
// it use to maipulation and use the partial to changes all the propeties in an object ot be optional
interface Point {
    x: number;
    y: number;
}
let pointPart: Partial<Point> = {}
pointPart.x=20
console.log(pointPart)// parital help to make the object propeties as the optional things
// Required changes all the properites in an object to be required even the it is optional
interface Car {
    make: string;
    model: string;
    mileage?: number;

}
let myCar: Required<Car> = {
make: "ford",
model:"focus",
mileage:2000// it optional if we don't use Required we if we don't provide thing it still run without error with value provide so since it Requried is use it should provide the value

}
console.log(myCar.model)
//Recorde is shorcut todefine an object type with a specific key type and vlaue type
const nameAgeMap: Record<string,number>={
    "name":10,
    "age":22
}
console.log(nameAgeMap)
// Omit key is used to remove the object key vlaue tings
interface Person {
    name: string;
    age: number;
    location?: string;
}
const bob: Omit<Person, "age" | "location"> = {
    name: "nani"
}
console.log(bob.name)// when i use the Omit the age and the location things is removed
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bobs: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};