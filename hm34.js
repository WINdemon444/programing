// 🏷 TASK: FIND EXPENSIVE ITEMS
// 1. Create a loop to go through the 'products' array.
// 2. Check if the 'price' is greater than (>) 500.
// 3. If true, push that product into the 'expensiveItems' array.
// 4. Print 'expensiveItems' to the console.

let products = [
  { title: "Smartphone", price: 800 },
  { title: "Case", price: 15 },
  { title: "Laptop", price: 1500 },
  { title: "Mouse", price: 25 },
  { title: "Monitor", price: 300 },
];
let expensiveitems = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 500) {
    
    
    
    
  expensiveitems.push(products[i]);
  }
}
console.log(expensiveitems);
