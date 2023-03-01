const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(Number(input[i]));
}

const maxNumber = Math.max(...arr);
console.log(maxNumber);

const findIndexNumber = (element) => element === maxNumber;
console.log(arr.findIndex(findIndexNumber) + 1);
