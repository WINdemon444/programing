const { users, players } = require("./db"); //./ means that we search for file in the same folder
console.log(players);
let totalage = 0;
for (let i = 0; i < players.length; i++) {
  totalage += players[i].age;
}
console.log(totalage);
