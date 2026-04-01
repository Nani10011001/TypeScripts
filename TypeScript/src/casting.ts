// casting is the conversation of the unknown into the data types like string
// with key word ---as---
let x:unknown="hello"
console.log((x as string).length)
//casting throw an when the data type number you tries to convert into the string like
//let x: unknown = 4;
//console.log((x as string).length);
// casting of the x:unknown thing <> we can also defined instead of the as
let hi: unknown="helloguys"
console.log((<string>hi).length)
// to overide the type error we can to the Type
let y="hello"
//console.log(((y as unknown) as number).lenght)//x is not actually a number so this will return undefined