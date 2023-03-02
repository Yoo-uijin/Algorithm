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

const remainders = inputs.map((i) => i % 42);
const removeDuplicateElements = remainders.filter(
  (val, i, _remainders) => _remainders.indexOf(val) === i
);

console.log(removeDuplicateElements.length);
