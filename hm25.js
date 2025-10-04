// дз
// You are given one big number and two arrays. Add all numbers from the first array to the big number,
//  and multiply the big number by all numbers from the second array. 
// !!!!!!! Use $ for print in terminal.

// Example Input:
let bigNumber1 = 1000;
let arr1 = [200, 300, 500,400];   // add
let arr2 = [2, 5, 10];        // multiply


 
for (let i = 0; i < arr2.length; i++) {
  bigNumber1 *= arr2[i];
  
}




for (let i = 0; i < arr1.length; i++) {
  bigNumber1 += arr1[i];
  
}
console.log(`the result is ${bigNumber1}!`)