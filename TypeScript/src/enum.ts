enum Direction {
    north,
    south,
    east,
    west
}
let currentDirection=Direction.north
console.log(currentDirection)// enum is special clas that represent the group of constants(unchangable variables)
// enums come in two flavour string and numberic
// default it start with 0,increase 1
// enum initialization
enum cardinalDirection{
    north=1,
    east,
    south,
    west

}
console.log(cardinalDirection.north)
// enums with statuscode for it
enum StatusCode{
    Notfound=404,
    success=200,
    accepted=202,
    badRequest=400
}
console.log(StatusCode.accepted)
// enum with strings of it
enum Color{
    black="black",
    blue="blue"
}
console.log(Color.black)