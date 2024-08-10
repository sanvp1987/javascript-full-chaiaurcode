let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleString('en-in'))
// console.log(myDate.toDateString('en-in'))
// console.log(typeof myDate)

//let myCreatedDate = new Date(2024,0,10) // here month start from 0 = January
//let myCreatedDate = new Date(2024,0,10,5,4) // here month start from 0 = January
//let myCreatedDate = new Date("2023-01-22") // here month start from 0 = January
//let myCreatedDate = new Date("10-Aug-2024") // here month start from 0 = January
let myCreatedDate = new Date() // here month start from 0 = January
//console.log(myCreatedDate)

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Math.round(Date.now()/1000))
console.log(myCreatedDate.getMonth())

console.log(myCreatedDate.toLocaleString('default',{
    weekday:"long"
}))
