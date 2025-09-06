
// You have a list of numbers. Find the sum of all numbers using a loop for.

// const numbers = [3, 7, 2, 5, 10];

const numbers = [3, 7, 2, 5, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
