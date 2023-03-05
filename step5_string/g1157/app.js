const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("")
  .map((i) => i.toUpperCase());

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim().split("").map((i) => i.toUpperCase());

// Find Duplicate Values
const count = input.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const valuesOfCount = Object.values(count).sort((a, b) => b - a);
const keysOfCount = Object.keys(count);

if (valuesOfCount[0] === valuesOfCount[1]) {
  console.log("?");
} else {
  console.log(keysOfCount.find((key) => count[key] === valuesOfCount[0]));
}
