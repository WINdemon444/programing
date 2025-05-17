// дз
// From the array, sum only the numbers greater than 18.
let result=0

let numbers = [5, 22, 19, 33, 12, 48]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>18)
        console.log(numbers[i])
  result+=numbers[i]//sum of all elements in array
}
console.log(result)
