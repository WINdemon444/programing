let numbers =[8,9,10,14,78]
numbers.sort((a,b)=>a-b)
console.log(numbers)




// let numbers = [8, 15, 3, 22, 10, 5];//From the list, select numbers greater than 10, then sort them.
let numbers2 = [8, 15, 3, 22, 10, 163]
words4=[]
for(let i=0;i<numbers2.length;i++){
    if(numbers2[i]>10){
        words4.push(numbers2[i])
    }
}
words4.sort((a,b)=>a-b)
console.log(words4)
//.,.,.,.,.,.,,.,.,.,././././/././.
let numbur=[67,68,69,60,81,63]
numbur.sort((b,a)=>a-b)// from big to small
console.log(numbur)
///././././//././/../././../././/.//,./,./,./.,./,..,./../...////.//./.,/./,.......................................
// let numbers = [-5, 12, 0, 7, -3, 8];
// Select numbers greater than 0 and sort
// Condition:
// From the list, select only positive numbers, then sort them.

let number = [-5, 12, 0, 7, -3, 8];
nuber=[]
for(let i=0;i<number.length;i++){
    if(number[i]>0){
        nuber.push(number[i])
    }
}
nuber.sort((a,b)=>a-b)
console.log(nuber)
