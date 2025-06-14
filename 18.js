// There are two lists of products from two different stores. Merge these lists into one using the concat() method and print the result.


// // Розв'язання / Solution
// const store1 = ["milk", "bread", "cheese"];
// const store2 = ["juice", "eggs", "butter"];
// let result=store1.concat(store2)
// console.log(result)

// There are three warehouses with different products. Merge all items into one list and sort them.


const warehouse1 = ["tomatoes", "onions"];
const warehouse2 = ["potatoes", "carrots"];
const warehouse3 = ["peppers", "cucumbers"];
let result=warehouse1.concat(warehouse2,warehouse3)
result.sort()
console.log(result)
