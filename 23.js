// Given a list of exactly 6 words, convert all of them to uppercase
 const words = ["car", "bike", "train", "apple", "zebra", "bus"];
 for(let i=0;i<words.length;i++){
    console.log(words[i].toUpperCase())
     
}
//////////////////////////////////////////////////////////////////////////////////
// You have an array of fruits. Remove the last fruit from the array and show the new array.

let fruits = ["apple", "banana", "orange", "pear"];
fruits.pop()
console.log(fruits)





// You have an array of animals. Add a new animal to the array using push() and show the new array.

let animals = ["cat", "dog", "rabbit"];
animals.push("frog")
console.log(animals)



// 🔹 Завдання (push + pop)

// Task:
// You have an array of numbers. 
// First, add a new number to the array using push(). Then remove the last number using pop(). Finally, show the result.

let numbers = [10, 20, 30];
numbers.push(40)
console.log( `we added number 40 to ${numbers}`)
numbers.pop()
console.log(`we deleted number 40 from ${numbers}`)