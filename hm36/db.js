// 💰 TASK: SHOPPING BUDGET CHECK

//   You are at the electronics store with a specific list of items to buy.
//   However, you only have a limited amount of money in your wallet.

//   First, import the data from './db'. You will get a 'shoppingList' array and a 'myWallet' number.

// { item: "Video Game", price: 60 },
//   { item: "Pizza", price: 15 },
//   { item: "Soda", price: 5 },
//   { item: "Headphones", price: 30 },

//   Your job is to create a loop to calculate the total price of all items in the list.
//   Store this total in a variable called 'totalCost'.

//   After calculating, compare the 'totalCost' with 'myWallet'.

//   If the total cost is less than or equal to your wallet amount, print: "Purchase Successful!".
//   But if the cost is higher than what you have, print: "Not enough money!".

//   Also, print how much money you need vs how much you have.
let mywallet = 190;
let shoppinglist = [
  { item: "Video Game", price: 60 },
  { item: "Pizza", price: 15 },
  { item: "Soda", price: 5 },
  { item: "Headphones", price: 30 },
];
module.exports = { mywallet, shoppinglist };
