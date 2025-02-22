let d=1000
d=d+20
console.log(d)
let c=250
c += 90//is the same like c = c+90
console.log(c)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let team1 = 500000
let team2 = 500001
team1 += 80
team2 += 70
if (team1>team2){
    console.log("team1 is higher")
}else{
    console.log("team2 is higher")
}
//////////////////////////////////////////////////////////////////////////////////////////Task: Bonus Points
// Description: Write a program that starts with a variable bonus initialized to 0.
// The program receives an integer x from the user. If x is greater than 10, add 5 to bonus.
//  If x is 10 or less, add 1 to bonus. Print the value of bonus after the operation.

// Example:

// - Input number: 12
// - Result: Bonus = 5
let bonus=0
let x=12
if (x>10){
    bonus += 5//If x is greater than 10, add 5 to bonus.
}else{
    bonus += 1//If x is 10 or less, add 1 to bonus.
}
console.log(bonus)
//