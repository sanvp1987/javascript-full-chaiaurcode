// Primitive // Value Types

// 7 types : String, Number, Boolean, null, undefained, Symbol, BigInt

// const score = 100
// const scoreValue= 100.3

// //Symbol is used for unique objects

// const id = Symbol('123')
// const anotherId = Symbol('123') 

// console.table([id,anotherId])
// console.log(id)
// console.log(anotherId)
// console.log(id === anotherId) // this is not equal

// non Primitive // Reference Types

//Array, Objects, Functions

// const heroes = ["Iron Man", "Shakti man", "Spider Man", "Hulk"]
// let myObj = {
//     fName:"Sandeep",
//     age:36
// }

// const greet= ()=>{
//     console.log("Hello Greet")
// }
// greet()
// console.log(typeof greet)

// console.log(typeof myObj)
// console.log(typeof Symbol)
// console.log(typeof id)

// Memory
// Stack (Primitive) Values, Heap (Non-Primitive) Reference

let myYoutubeName = "sanvp1987" // value type
let myanotherChannel = myYoutubeName
myanotherChannel = "funShorts"

console.log(myYoutubeName)
console.log(myanotherChannel)


 //reference type
let myObj = {
    fName:"Sandeep",
    age:36
}

let myObjSecond = myObj
myObjSecond.fName="Meet"
myObjSecond.age = 6

console.log(myObj)
console.log(myObjSecond)