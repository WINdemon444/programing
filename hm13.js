// You have an array of numbers. Use a loop to find the sum of all the numbers and store it in a variable called result. Finally,
//  print the value of result to the console.
// let  numbers = [10, 55, 120, 8, 47, 99];
let result=0
let numbers=[10,55,120,8,47,99]
for(let i=0;i<numbers.length;i++){
  result+=numbers[i]//sum of all elements in array
}
console.log(result)
