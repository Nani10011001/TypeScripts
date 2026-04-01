"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// generics allow creating type vaidbles which can be used to crdate class functions & type aliase that don't need to explictly ddfne
// generics with function help crate more gneral fuction that accuratly represent the input and return types
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 200));
const wrapperValue = { value: 100 };
console.log(wrapperValue);
// generic used the 
class NamedValue {
    name;
    _value;
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue
//# sourceMappingURL=generics.js.map