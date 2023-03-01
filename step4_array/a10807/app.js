const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const arr = input[1].split(" ").map((a) => +a);
const numberToFind = Number(input[2]);

if (!arr.includes(numberToFind)) {
  console.log(0);
} else {
  const findArray = arr.filter((i) => i === numberToFind);
  console.log(findArray.length);
}
