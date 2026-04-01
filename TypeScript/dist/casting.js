"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// casting is the conversation of the unknown into the data types like string
// with key word ---as---
let x = "hello";
console.log(x.length);
//casting throw an when the data type number you tries to convert into the string like
//let x: unknown = 4;
//console.log((x as string).length);
// casting of the x:unknown thing <> we can also defined instead of the as
let hi = "helloguys";
console.log(hi.length);
// to overide the type error we can to the Type
let y = "hello";
//console.log(((y as unknown) as number).lenght)//x is not actually a number so this will return undefined
//# sourceMappingURL=casting.js.map