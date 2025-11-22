// Create an array scores with 150 random "scores" (integers from 0 to 100).

// We need to count how many scores fell into the "F-range" (which is from 0 to 35 inclusive).

// Using a loop and an if statement, count the number of such scores.
let scores = [];
for (let i = 0; i < 150; i++) {
  let g = Math.random() * 100;

  scores.push(Math.ceil(g));
}
let f_range = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 35) {
    f_range += 1;
  }
}
console.log(`the amount of scores less than 35 are ${f_range}`)

