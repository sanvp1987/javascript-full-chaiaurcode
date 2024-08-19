// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Hetal"
tinderuser.isLoggedIn = true

// console.log(tinderuser)

const regularUser = {
    email:"sanvp1987@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sandeep",
            lastname:"Parmar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"c",6:"d"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) //here {} is target and others are source which is
//                                             //combining into one single objects

//OR
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3)

//now let say objects come from Database DB

const user = [
    {
        id:1,
        email:"san@gmail.com"
    },    {
        id:2,
        email:"hetal@gmail.com"
    },    {
        id:3,
        email:"meet@gmail.com"
    },    {
        id:4,
        email:"anany@gmail.com"
    }
]

// console.log(tinderuser) 
// console.log(Object.keys(tinderuser)) //array of keys
// console.log(Object.values(tinderuser))//array of values
// console.log(Object.entries(tinderuser))//array of entries

// console.log(tinderuser.hasOwnProperty("isLoggedIn")) // Check whether property available in object

const course = {
    coursename:"js in Hindi",
    price:"999",
    courseInstructor:"Sandeep"
}

const{price} = course // Object Destructuring
// console.log(price)
const{courseInstructor:instructor,coursename} = course // Object Destructuring
// console.log(instructor,coursename)


//API return format
//JSON
// {
//     "name":"Sandeep",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// //[]
// [
//     {},{},{}
// ]