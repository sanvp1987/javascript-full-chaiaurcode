const myArr = [0,1,2,3,4,5]
//console.log(myArr[4])

//Array Methods

myArr.push(6)
myArr.push(7) // Push adds any value at last position
myArr.pop() // pop removes last position value

myArr.unshift(9) // unshift add any value at First Posiiton
myArr.shift() // shift remove first position value

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(9))

const newArr = myArr.join() // Add All array elements in string

//console.log(myArr)

console.log("A ",myArr.join())

const myn1 = myArr.slice(1,3) // slice just take value starting index and (end - 1)
console.log(myn1.join())
console.log("B ",myArr.join())

const myn2 = myArr.splice(1,3)// whereas splice take value between start and end index 
                                // and it actually removes that splice from original array
console.log(myn2.join())
console.log("C ",myArr.join())