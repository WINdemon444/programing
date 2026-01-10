const { serverCapacity, proccesess } = require("./db")
// 🔥 TASK PART 2: CHECK SERVER STATUS

//   1. Create a file named 'server.js'.
//   2. Import the data from './db'.
//   3. Create a variable 'totalLoad' (start at 0).
//   4. Create a loop to sum up the 'memory' of all processes from the array.
//   5. Compare 'totalLoad' with 'serverCapacity':
//      - If totalLoad > serverCapacity -> Print "CRITICAL ERROR! Server Overload!".
//      - If totalLoad <= serverCapacity -> Print "System Stable.".
//   6. Print the numbers (Total Load and Capacity) to see the details.
let totalLoad=0
for (let i = 0; i < proccesess.length; i++) {
  totalLoad += proccesess[i].memory;
}
console.log(totalLoad)