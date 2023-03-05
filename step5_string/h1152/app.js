const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString();

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString();

let convertInput = input.trim().split(" ");
let countLetters = 0;

for (let i = 0; i < convertInput.length; i++) {
  if (convertInput[i] !== "") {
    countLetters++;
  }
}

console.log(countLetters);
