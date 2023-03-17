const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(`\n`);
// const input = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(`\n`);

const arr = input[1].split(" ");
let stack = [];
let result = [];

for (let i = 0; i < arr.length - 1; i++) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] < arr[k]) {
      stack[stack.length] = arr[k];
    }
  }
  result[result.length] = stack[0] ? stack[0] : -1;
  stack.length = 0;
}
result[result.length] = -1;

console.log(result.join(" "));
