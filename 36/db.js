// 💾 TASK PART 1: CREATE THE DATABASE

//   1. Create a new file named 'db.js'.
//   2. Inside, create an array named 'processes'.
//   3. You need to add 4 objects to this array based on this server report:
//      - First process: name is "Website Server", memory usage is 500.
//      - Second process: name is "Database Service", memory usage is 300.
//      - Third process: name is "Email Sender", memory usage is 150.
//      - Fourth process: name is "Backup Task", memory usage is 200.
  
//   4. Create a constant variable named 'serverCapacity' and set it to 1000.
//   5. Export both 'processes' and 'serverCapacity' using module.exports.

// 🔥 TASK PART 2: CHECK SERVER STATUS

//   1. Create a file named 'server.js'.
//   2. Import the data from './db'.
//   3. Create a variable 'totalLoad' (start at 0).
//   4. Create a loop to sum up the 'memory' of all processes from the array.
//   5. Compare 'totalLoad' with 'serverCapacity':
//      - If totalLoad > serverCapacity -> Print "CRITICAL ERROR! Server Overload!".
//      - If totalLoad <= serverCapacity -> Print "System Stable.".
//   6. Print the numbers (Total Load and Capacity) to see the details.
let proccesess=[
    {name:"website server",memory:500},
    {name:"database",memory:300},
    {name:"email",memory:150},
    {name:"backup",memory:200}
]
let serverCapacity=1000
module.exports = { serverCapacity, proccesess }