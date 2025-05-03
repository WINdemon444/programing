let score=[160,75,85]
if(score[0]>80){
  score.push('champion')
}else{
  score.pop()
}
console.log(score)
// You have an array of numbers. Use a loop to find the sum of all numbers and store it in a variable called result. At the end, print the value of result to the console.
let result=0
let numbers=[10,90,79,67,35]
for(let i=0;i<numbers.length;i++){
  result+=numbers[i]//sum of all elements in array
}
console.log(result)
