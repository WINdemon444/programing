let guests=['anna','oleh','sasha','marta','dmytro']
if(guests.length==5){
  guests.pop()
}
console.log(guests)
// ////////////////////////////////////////////////////
// Add "friend" if there are less than 3 friends
// Task: If array has less than 3 friends, add "new friend"
let friends=['nazar','illia','mark']
if(friends.length<3){
  friends.push('new friend')
}
console.log(friends)
//////////////////////////////////////////////////////////////////////////////////////////
// Task: If the first number is more than 90, add "winner" to the array.


// const scores = [50, 85, 95];
let points=[50,85,95]
if(points[0]>90){
  points.push('winner')
}
console.log(points)
////////////////////////////////////
// If the first health value is more than 70, add "shield".
// If not — remove the last value.
// Print the updated array.

// let health = [60, 40, 30];
let health=[160,40,30]
if(health[0]>70){
  health.push('shield')
}else{
  health.pop()
}
console.log(health)
