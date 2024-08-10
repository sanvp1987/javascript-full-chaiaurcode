const marvel_heroes = ["Thor","Spiderman","IronMan"]
const dc_heroes = ["Superman","Flash","Batman"]
const indian_heroes = ["Shaktiman","Krish"]

//marvel_heroes.push(dc_heroes) // it actually push (add) array as 4rd element
//const all_heroes = marvel_heroes.concat(dc_heroes) //it add two arrows
//console.log(all_heroes)

const all_newHeroes = [...marvel_heroes,...dc_heroes,...indian_heroes] //spread operators can add more than 2 arrays as well

//console.log(all_newHeroes)
//console.log(marvel_heroes)

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[3,4,5]]]

const real_another_array = anotherarray.flat(Infinity) // it flats all array into single array 
//console.log(real_another_array)

// console.log( Array.isArray("Sandeep"))
// console.log( Array.from("Sandeep"))
// console.log( Array.from({fname:"Sandy", age:36})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // it returns any value as array