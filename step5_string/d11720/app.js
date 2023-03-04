const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [numberCount, numbers] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

// const [numberCount, numbers] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim().split("\n");

let total = 0;

for (let i = 0; i < Number(numberCount); i++) {
  total += numbers.split("").map(Number)[i];
}

console.log(total);
