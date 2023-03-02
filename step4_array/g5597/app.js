const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [...inputs] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// const [...inputs] = require("fs")
// .readFileSync("/dev/stdin")
// .toString()
// .trim()
// .split("\n").map(Number);

const findNumber = [];

for (let i = 1; i <= 30; i++) {
  if (inputs.indexOf(i) === -1) {
    findNumber.push(i);
  }
}
findNumber.sort((a, b) => a - b);

const printResult = findNumber[0] + "\n" + findNumber[1];
console.log(printResult);
