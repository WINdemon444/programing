let a = Math.abs(-10); // method makes number positive
console.log(a);

let b = Math.round(0.2);
console.log(b); // method rounds the number\

let c = Math.max(7, -4, 9, -8, -9, -5, 3, 1);// find biigest
console.log(c);

let d = Math.min(7, -4, 9, -8, -9, -5, 3, 1);//find smallest
console.log(d);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You have an array of grades with decimals. Round all grades to the nearest integer and store them in a new array.

let grades = [9.6, 7.3, 10.8, 5.5];
let grades2 = [];
for (let i = 0; i < grades.length; i++) {
  let rounded = Math.round(grades[i]);
  grades2.push(rounded);
}
console.log(`the rounded numbers are  ${grades2}!`);
