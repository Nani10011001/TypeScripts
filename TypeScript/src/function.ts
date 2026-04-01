// in the typescript it has the specific syntax for typing function parmeter
function getTime():number{
    return new  Date().getTime();
}
console.log(getTime())// function return the number thing
// void return the nothing as it or any value of it
function printHello():void{
    console.log("hello typescript void")
}
printHello()
// parameter number defining of it
function additon(a:number,b:number):number{
    return a+b

}
console.log(additon(3,4))
// given the paramter for default value things
function multiplication(a:number,b:number=30):number{
    return a*b

}
console.log(multiplication(30))