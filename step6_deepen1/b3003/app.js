const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c, d, e, f] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// const [a,b,c,d,e,f] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString().trim().split(' ').map(Number);

const correctCount = [1, 1, 2, 2, 2, 8];
const output = [];

for (let i = 0; i < correctCount.length; i++) {
  output.push(correctCount[i] - [a, b, c, d, e, f][i]);
}

console.log(output.join(" "));
