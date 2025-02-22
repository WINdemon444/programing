// Experience Points 
// Description: Create a program that starts with an ʼexperienceʼ variable initialized to 0.
//  The user inputs a number ʼlevelʼ.
//  If ʼlevelʼ is above 5, add 15 to ʼexperienceʼ. If ʼlevelʼ is 5 or below, add 3 to ʼexperienceʼ.
// Print the final value of ʼexperienceʼ.

// Example:

// Input level: 8
// Result: Experience = 15
//use comments for all lines
let experience=0
let level=3
if(level>5){
    experience += 15
}else{
    experience += 3
}
console.log("total value =" , experience)