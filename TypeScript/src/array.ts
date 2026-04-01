// for string
const name: string[]=[]
name.push("jai")
name.push("nani")
name.push("suriya")
console.log(name)
// for numbers
const numbers:number[]=[22,44,55]
console.log(numbers)
// the readobly keywords help us to read the data we cannt push data inti
const members:readonly string[]=["hendry"]
console.log(members[0])
//type inference of the typescripts
const values=[1,2,3,4]
values.push(33)
//let head: number = values[0]!; trust me not undefined
let head: number | undefined  =values[0]
console.log(head)