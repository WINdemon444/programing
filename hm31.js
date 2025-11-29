// HW: "Legends of Brawl Stars" ⭐️
// Imagine you are analyzing a Brawl Stars club with 60 members.

// Your Task:
// Create an array called brawlerTrophies.
// Fill it with 60 random numbers (representing trophies from 0 to 1000).
// We need to find the pro players who are close to Rank 30.
// Count how many players have more than 888 trophies.
// Use a for loop and an if statement to solve this.
let brawlerTrophies = [];
for (let i = 0; i < 60; i++) {
  let club = Math.random() * 1000;
  brawlerTrophies.push(Math.round(club));
}
console.log(brawlerTrophies);
