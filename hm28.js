// дз

// You have an array of numbers (some negative). Create a new array where all numbers are positive using Math.abs().

let arr = [-5, 10, -3, 8];
// Очікуваний вивід: $Absolute values: [5, 10, 3, 8]
let positiveArr = [];
for (let i = 0; i < arr.length; i++) {
  let positiveNum = Math.abs(arr[i]);
  positiveArr.push(positiveNum);
}
console.log(`Absolute values: [${positiveArr}]`);
