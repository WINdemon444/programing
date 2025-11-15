let a=Math.pow(3, 5)
console.log(a)//3*3*3*3*3     3 potencial 5
//////////////////////////////
// Given the side length of a square, calculate its area. (Formula: A = s^2).
let side=16
let area=Math.pow(16,2)
console.log(area)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let b=Math.random()*100//random number from 0 to 100
console.log(b)//15.185378915636205   random decimal number
console.log(Math.round(b))
////////////////////////////////////////////////////////////////////////////
// You have an array myArray that already contains the numbers [10, 50, 100].
//  Generate one random integer in the range from 1 to 20 and add it to the end of this array.
let myarray=[10, 50, 100]
let c=Math.random()*20
myarray.push(Math.round(c))
console.log(myarray)
/////////////////////////////////////
// Create an array randomArray1 containing 5 random integers. Each number must be generated in the range from 0 to 10

// Log the original (unsorted) array to the console with explanation.
let randomarray=[]
for (let i = 0; i < 5; i++) {
  let g=Math.random()*10
  randomarray.push(Math.round(g))
}
console.log(randomarray)