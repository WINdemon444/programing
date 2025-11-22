// з
// Create an array numbers containing 100 random integers (from 0 to 100).
// -Count how many of these numbers are greater than 50.
// -Log the count to the console.



let randomarray = [];
for (let i = 0; i < 100; i++) {
  let g = Math.random() * 100;

  randomarray.push(Math.ceil(g));
}
let count = 0;
console.log(randomarray);
for (let i = 0; i < randomarray.length; i++) {
  if (randomarray[i] > 50) {
    count += 1;
  }
}
console.log(`the amount of numbers greater than 50 are ${count}`)
/////////////////////////////////////////////////////////////////
