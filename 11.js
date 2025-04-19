let fruits=['apple','banana','orange','grape','kiwi','mango']
console.log(fruits [2])
console.log(fruits.length)
fruits.push('dragonfruit')//add new fruit to fruits
console.log(fruits)
let names=['vasyl','illia','dmytro','oleksander','oleksiy']
names.pop()//delete last
console.log(names)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//If there are more than 3 items in the backpack, remove the last one.

let backpack = ["book", "pen", "notebook", "apple"]
if(backpack.length>3){
 backpack.pop()
}
console.log(backpack)
// You have a list of toys:
// let toys = ["teddy", "car", "ball"];

// If the first toy is "teddy", and add "teddy hat" to the list .
// Then print the updated list of toys.
let toys = ["teddy", "car", "ball"]
if(toys [0]=='teddy'){
  toys.push('teddy hat')
}
console.log(toys)
