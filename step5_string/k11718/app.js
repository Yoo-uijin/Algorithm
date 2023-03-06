const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString();

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString();

console.log(input);
