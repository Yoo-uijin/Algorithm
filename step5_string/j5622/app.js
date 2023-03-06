const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString().trim();

let countTime = 0;

const alphabets = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

for (i = 0; i < input.length; i++) {
  for (k = 0; k < alphabets.length; k++) {
    if (alphabets[k].includes(input[i])) {
      countTime += k + 3;
    }
  }
}

console.log(countTime);
