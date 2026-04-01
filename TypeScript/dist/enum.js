"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["east"] = 2] = "east";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
let currentDirection = Direction.north;
console.log(currentDirection); // enum is special clas that represent the group of constants(unchangable variables)
// enums come in two flavour string and numberic
// default it start with 0,increase 1
// enum initialization
var cardinalDirection;
(function (cardinalDirection) {
    cardinalDirection[cardinalDirection["north"] = 1] = "north";
    cardinalDirection[cardinalDirection["east"] = 2] = "east";
    cardinalDirection[cardinalDirection["south"] = 3] = "south";
    cardinalDirection[cardinalDirection["west"] = 4] = "west";
})(cardinalDirection || (cardinalDirection = {}));
console.log(cardinalDirection.north);
// enums with statuscode for it
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Notfound"] = 404] = "Notfound";
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["accepted"] = 202] = "accepted";
    StatusCode[StatusCode["badRequest"] = 400] = "badRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.accepted);
// enum with strings of it
var Color;
(function (Color) {
    Color["black"] = "black";
    Color["blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.black);
//# sourceMappingURL=enum.js.map