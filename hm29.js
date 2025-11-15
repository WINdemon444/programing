// дз

// Create an array randomArray containing 20 random integers. Each number must be generated in the range from 0 to 1000.
// - Log the original (unsorted) array to the console with explanation.
// - Sort this array.
// - Log the sorted array to the console with explanation.


let randomArray=[]
for (let i = 0; i < 20; i++) {
  let d=Math.random()*1000
  randomArray.push(Math.round(d))
}   
console.log("Original array:", randomArray)
randomArray.sort((a, b) => a - b);
console.log("sorted array",randomArray)

