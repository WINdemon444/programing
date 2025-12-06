let numbers=[8,7,78,56,69,37,6]
let y=numbers.filter((element)=>element>40)
console.log(y)

let words=['word','cola','spongebob','pepsi','wert']
let o=words.filter((element)=>element.length>4)
console.log(o)


//////////////////
// let damage = [45, 120, 30, 200, 55, 150, 10];
// Find all hits where damage is more than 100 (critical hits).
// Calculate the sum of these critical hits.
let damage = [45, 120, 30, 200, 55, 150, 10];
let p=damage.filter((element)=>element>100)
console.log(p)
let i=p.length
console.log(p)
