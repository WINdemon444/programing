let charecter = {
  name: "spongebob",
  lastname: "squarepants",
  age: 13
};
console.log(charecter)
console.log(charecter.name)

charecter.job='cooker'
console.log(charecter)
////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////
  // Goal: Create a single object with two numerical categories and calculate their sum.

  // CONDITION:
  // 1. Create an object named 'heroStats'.
  // 2. Add the following properties to it:
  //    - 'strength': 85
  //    - 'agility': 60
  //    - 'className': "Scout"
  // 3. Calculate the total combat score 'battleRating' by adding 'strength' and 'agility'.
  // 4. Print the character's class and their total 'battleRating' to the console.
let herostats={
    strength:85,
    agility:60,
    classname:'scout'
}
let battlerating=herostats.strength+herostats.agility
console.log(`herostats are ${battlerating} in total`)