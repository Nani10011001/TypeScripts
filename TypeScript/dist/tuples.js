"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuple is typed array with predefined pre indexed types
const ourTuple = [3, true, "hello i am best coder"];
console.log(ourTuple);
// if the indexed wise type we initialized the wrong data types it through the error
const tupledata = [44, false, "cool guys never dies"];
tupledata.push("i am the cool guys");
console.log(tupledata); // if the index types over if we push the data into it acdepts it
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');
//named tuples
const graphData = [33, 44];
console.log("named typles", graphData[0], graphData[1]);
//destructing of the tuples
const value = [33, 44.5];
const [x, y] = value;
console.log("destructing", x, y);
//# sourceMappingURL=tuples.js.map