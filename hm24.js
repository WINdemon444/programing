// Task: Shopping Cart Validation 🛒

// You need to write checks (validation logic) that will:
// 1. If the cart has fewer than 3 items, add a new product (e.g., "eggs").
// 2. If the cart has more than 4 items, remove the last product.
// 3. Finally, print the contents of the updated cart to the console.

// Starting Code:

let cart = ["bread", "milk"];

if (cart.length < 3) {
  cart.push("eggs");
} else {
  cart.pop();
}
console.log(cart);
