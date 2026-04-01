// union type are used when value can be more then single type it may string or number
// symbol for the union |

function printStatusCode(code:string | number){
    console.log(`my status code is ${code}`)
}
printStatusCode('200')
printStatusCode(200)
