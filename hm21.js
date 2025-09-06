// з
// Task:

// Given an array of words, print only the words that have more than 5 letters.

// const words = ["car", "bicycle", "airplane", "bus", "motorcycle"];

const words = ["car", "bicycle", "airplane", "bus", "motorcycle"];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    console.log(words[i]);
  }
}
