const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const arr = input[1].split(" ").map((a) => +a);
arr.sort((a, b) => a - b);

console.log(arr[0], arr[arr.length - 1]);
