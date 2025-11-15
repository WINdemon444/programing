// Create an array rolls and fill it with 1000 random "dice rolls" (integers from 1 to 6).

// Create an array counts (or 6 separate variables) to count how many times each face (1, 2, 3, 4, 5, 6) appeared.

// Using a loop, iterate through your rolls array.

// Inside the loop, using if...else if update the counters in your counts array.

// After the loop finishes, log to the console:

// How many times each face was rolled (e.g., "1: 160 times").

// The percentage (%) that this count represents out of the total (1000 rolls). (e.g., "16.0%").
let rolls = [];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
for (let i = 0; i < 1000; i++) {
  let dice = Math.random() * 6;
  rolls.push(Math.ceil(dice));
}
console.log(rolls);

for (let i = 0; i < rolls.length; i++) {
  if (rolls[i] == 1) {
    count1 = count1 + 1;
  } else if (rolls[i] == 2) {
    count2++;
  } else if (rolls[i] == 3) {
    count3++;
  } else if (rolls[i] == 4) {
    count4++;
  } else if (rolls[i] == 5) {
    count5++;
  } else if (rolls[i] == 6) {
    count6++;
  }
}
console.log(
  `1 were: ${count1}, 2: ${count2}, 3 :${count3},4:${count4},5:${count5},6:${count6}`
);
