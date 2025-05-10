// From the array, sum only the numbers greater than 18. let numbers = [10, 55, 120, 8, 47, 99];
let numbers=[10,55,120,8,47,99]
let result=0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>18)
        console.log(numbers[i])
  result+=numbers[i]//sum of all elements in array
}
console.log(result)
// You have an array of words. Add to a new array only the words longer than 5 characters.
// let words = ["apple", "banana", "cat", "strawberry", "hi", "elephant"];
let words=["apple", "banana", "cat", "strawberry", "hi", "elephant"]
let result2=[]
for(let i=0;i<words.length;i++){
if(words[i].length>5){
    result2.push(words[i])
}
}
console.log(result2)