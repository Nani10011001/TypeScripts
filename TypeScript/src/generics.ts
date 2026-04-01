// generics allow creating type vaidbles which can be used to crdate class functions & type aliase that don't need to explictly ddfne
// generics with function help crate more gneral fuction that accuratly represent the input and return types
function createPair<S, T>(v1: S, v2: T): [S,T] {
    return [v1,v2];
}
console.log(createPair<string,number>('hello',200))
// genric in the type alias
type wrapper<T> = { value: T};
const wrapperValue: wrapper<number> = { value: 100 };
console.log(wrapperValue)
// generic used the 
class NamedValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue


