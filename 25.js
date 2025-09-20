// Description (English):
// You are given one big number and two arrays of numbers.
//  Write a program that subtracts all numbers from both arrays from the big number. Use a for loop and if to make sure
// the numbers are valid (e.g., not negative).

// Example Input:
// let bigNumber = 1000;
// let arr1 = [10, 20, 30];
// let arr2 = [5, 15, 25];

// Expected Output:
// Result after subtraction: 895
let bigNumber = 1000;
let arr1 = [10, 20, 30];
let arr2 = [5, 15, 25];
for (let i = 0; i < arr1.length; i++) {
  bigNumber -= arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
  bigNumber -= arr2[i];
}
console.log(bigNumber);

///////////////////////////////////////////////////////////////
// You are given one big number and two arrays. Add all numbers from the first array to the big number,
//  and multiply the big number by all numbers from the second array.

// Example Input:
let bigNumber2 = 7864;
let arr5 = [875, 7645, 87];
let arr6 = [4, 3, 5];

for (let i = 0; i < arr5.length; i++) {
  bigNumber2 += arr5[i];
}

for (let i = 0; i < arr6.length; i++) {
  bigNumber2 *= arr6[i];
}
console.log(bigNumber2);

//////////////////////////////
// You are given a big array of numbers. Write a program that counts how many numbers are positive and how many are negative.
//  Print both results.

// Example Input:

let numbers = [5, -3, 7, -8, 0, 12, -1, 4, -6];
let numbersneg = 0;
let numberspos = 0;
// Expected Output:

// Positive numbers: 4
// Negative numbers: 4
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberspos += 1;
  } else if (numbers[i] < 0) {
    numbersneg += 1;
  }
}
console.log(`positive numbers, ${numberspos}!`);
console.log(`negative numbers, ${numbersneg}!`);
