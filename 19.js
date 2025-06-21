// There are three warehouses with products. Merge them into one list and convert all product names to uppercase.

const warehouse1 = ["tomatoes", "onions"];
const warehouse2 = ["potatoes", "carrots"];
const warehouse3 = ["peppers", "cucumbers"];
let result=warehouse1.concat(warehouse2,warehouse3)
let result2=[]
for(let i=0;i<result.length;i++){
    result2.push((result[i].toUpperCase()))
}
console.log(result2)



// Merge products from three warehouses and print only those with names longer than 4 characters.

const array = ["milk", "cheese"];
const array2 = ["bread", "eggs"];
const array3 = ["yogurt", "butter"];
let eee=array.concat(array2,array3)
ressult=[]
for(let i=0;i<eee.length;i++){
    if(eee[i].length>4){
    ressult.push((eee[i]))}
}
console.log(ressult)