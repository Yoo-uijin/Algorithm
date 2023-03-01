const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const numberToCompare = input[0].split(" ").map(Number)[1];
const arr = input[1].split(" ").map((a) => +a);

const extractNumber = (array, num) => {
  return array.filter((v) => v < num);
};

console.log(extractNumber(arr, numberToCompare).join(" "));
