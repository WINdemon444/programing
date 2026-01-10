// 🏆 TASK: THE GRAND Gate

//   Imagine you are the main referee of a digital tournament.
//   Your goal is to determine which team is stronger.

//   First, you need to import the data from the local file './data' into a variable.
//   Inside that data, you will find two teams: teamBlue and teamRed.

//   You must create a loop to calculate the total power of the Blue Team and save it into a variable.
//   Then, do the exact same thing for the Red Team to find their total score.

//   Finally, write a logic check to compare the scores.
//   If Blue has more points, print "Blue Team Wins!".
//   If Red has more points, print "Red Team Wins!".
//   If they have the same amount of power, print "It is a Draw!".


const { teamBlue, teamRed } = require("./data"); 
let totalpower = 0;
for (let i = 0; i < teamBlue.length; i++) {
  totalpower += teamBlue[i].power;
}
let totalpower2=0
for (let i = 0; i < teamRed.length; i++) {
  totalpower2 += teamRed[i].power;
}
console.log(totalpower2)
if(totalpower<totalpower2){
    console.log("red wins!")
}else if(totalpower2<totalpower){
    console.log("blue wins!")
}else{
    console.log("tie!")
}