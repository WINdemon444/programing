let words = ["dolphin",'orange','tablet','apple']
words.sort()
console.log(words)
// let fruits = ["Banana", "apple", "Cherry"];
let fruits = ["Banana", "apple", "Cherry"];
let lower=[]
for(let i=0;i<fruits.length;i++){
    lower.push(fruits[i].toLowerCase())
}
lower.sort()
console.log(lower)
///////////////////////////////////////////////////////////////////////////

// let animals =["Zebra", "Cat", "dog"] 
let animals =["Zebra", "Cat", "dog"]
let lower2=[]
for(let i=0;i<animals.length;i++){
    lower2.push(animals[i].toLowerCase())
}
lower2.sort()
console.log(lower2)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sort words that are longer than 4 letters
// Condition:
// From the given list, select only the words that have more than 4 letters, then sort them alphabetically.


// let words = ["apple", "cat", "banana", "dog", "cherry"];
let words3 = ["apple", "cat", "banana", "dog", "cherry"];
let words4=[]
for(let i=0;i<words3.length;i++){
    if(words3[i].length>4){
        words4.push(words3[i])
    }
}
words4.sort()
console.log(words4)