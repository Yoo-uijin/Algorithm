const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

for (let i = 0; i < input.length; i++) {
  let numbers = input[i].split(" ");

  console.log(Number(numbers[0]) + Number(numbers[1]));
}
