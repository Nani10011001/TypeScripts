"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typscript can automatically determine the type of a variable on its initial value
// typescript infers for strings
let username = "alice";
// typescripts infers numbers
const score = 100;
// typescripts infers boolean[]
const conditions = [true, false, true];
//TypeScripts infers return as number
function add(a, b) {
    return a + b;
}
console.log(conditions);
//# sourceMappingURL=TypeInference.js.map