// дз

// You have an array of numbers. Split them into two arrays: positive (greater than 0) and negative (less than 0).
// !!!!!!! Use $ for print in terminal.

// let numbers = [-5, 10, -2, 0, 7, -9];

// // output:      $Positive: [10, 7]  $Negative: [-5, -2, -9]
let numbers = [-5, 10, -2, 0, 7, -9];
let positive = [];
let negative = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive.push(numbers[i]);
  } else if (numbers[i] < 0) {
    negative.push(numbers[i]);
  }
}
console.log(`the positive numbers are  ${positive}!`)
console.log(`the negative numbers are  ${negative}!`)