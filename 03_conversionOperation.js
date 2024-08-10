//let score = "33"
//let score = null // null conversion becomes 0
let score = "33abc" // NaN - Not a Number
//let score = undefined // null conversion becomes 0


// console.log(typeof score)
// console.log(typeof(score))

// let valueInNumner = Number(score)

// console.log(typeof valueInNumner)
// console.log(valueInNumner)

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// let someBoolean = "true"
// let booleanIsString = Boolean(someBoolean)
// console.log(booleanIsString)
// console.log(typeof booleanIsString)

// ***************************** Operations ************************************

// let value = 3
// let negative = -value
// console.log(negative)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// console.log((1 + 2) * (5 % 2))

let gameCounter = 100
++gameCounter
console.log(gameCounter)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"