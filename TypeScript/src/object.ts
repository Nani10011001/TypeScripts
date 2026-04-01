const personal:{name:string,
    age:number,
    course:string
}={
    name:"nani",
    age:22,
    course:"MCA"
}
console.log(personal.name)
// we cann't do the type of it
//personal.name=22 throw an error to it

// for the optional properity
//example
const car:{
    type:string,
    mileage?:number// if you want to the optional it like this if you remove the ? it throw the erro
}={
    type:"toyota"
}
