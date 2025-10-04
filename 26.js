// You have an array of student grades. If the grade is greater than or equal to 10, add it to a new array goodMarks.

let marks = [5, 12, 7, 10, 15];
let goodmarks = [];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 10) {
    goodmarks.push(marks[i]);
  }
}
console.log(`good marks is, ${goodmarks}!`);

////////////////////////////////////////////////////////////
// You have an array of words. If a word has more than 4 letters, add it to a new array longWords.

let words = ["cat", "school", "dog", "computer"];
let longWords = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
    longWords.push(words[i]);
  }
}
console.log(`words are, ${longWords}!`);

// You have an array of names. Check if the array contains "Oleg". If yes — print $Found Oleg, otherwise $Not found.

let names = ["ira", "oleg", "maria"];

for (let i = 0; i < names.length; i++) {
  if (names[i] == "oleg") {
    console.log(`, ${names}  is found!`);
    break;
  } else {
    console.log(`, ${names}  is  not found!`);
    break;
  }
}
