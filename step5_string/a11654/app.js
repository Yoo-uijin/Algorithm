const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim();

let index = 0;
let i = input.charCodeAt(index);
console.log(i);
