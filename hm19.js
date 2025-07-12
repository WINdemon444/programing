// дз
// Merge products from three warehouses and print only those with names
//  longer than 5 characters and sort this array. and convert all product names
//  to uppercase.


 const warehouse1 = ["plates", "cups"];
 const warehouse2 = ["spoons", "forks"];
const warehouse3 = ["napkins", "glasses"];





let eee=warehouse1.concat(warehouse2,warehouse3)
let       ressult=[]
for(let i=0;i<eee.length;i++){
    if(eee[i].length>5){
    ressult.push((eee[i]).toUpperCase())}
}
ressult.sort()
console.log(ressult)













