// дз
// From the list, select only numbers less than 50, then sort them from smallest to largest.

let numbers = [12, 87, 45, 33, 92, 18];
let numbers2=[]
for(let i=0;i<numbers.length;i++){
  if(numbers[i]<50){
    numbers2.push(numbers[i])
  }
}
numbers2.sort()
console.log(numbers2)
