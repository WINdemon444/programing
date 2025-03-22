// Task 6: Calculate the sum of numbers from 1 to 5
// 🔹 Condition (English):
// Find and print the sum of numbers from 1 to 5.
let sum=0
let JS=5
for(let i=1;i<=JS;i++){
    console.log(i)
    sum += i
}
console.log(sum)
//////////////////////////////////////////////////////////////////////////////////////////
// Condition (eng): Subtract numbers from 1 to 5 from 50. If the result is less than 40,
//  print "Not much left", else print "Still a lot".
let nuumber=50
for(let i=1;i<=5;i++){
    nuumber-=i
}console.log(nuumber)
if(nuumber<40){
    console.log('not much left')
}else{
    console.log('still a lot')
}