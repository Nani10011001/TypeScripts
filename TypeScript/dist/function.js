"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// in the typescript it has the specific syntax for typing function parmeter
function getTime() {
    return new Date().getTime();
}
console.log(getTime()); // function return the number thing
// void return the nothing as it or any value of it
function printHello() {
    console.log("hello typescript void");
}
printHello();
// parameter number defining of it
function additon(a, b) {
    return a + b;
}
console.log(additon(3, 4));
// given the paramter for default value things
function multiplication(a, b = 30) {
    return a * b;
}
console.log(multiplication(30));
//# sourceMappingURL=function.js.map