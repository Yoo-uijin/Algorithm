const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(`\n`);
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let cases = Number(input[0]);
let splited = input[1].split(" ");
let stack = [];

for (let i = 0; i < cases; i++) {
  while (
    stack.length !== 0 &&
    Number(splited[i]) > Number(splited[stack[stack.length - 1]])
  ) {
    splited[stack.pop()] = splited[i];
  }
  stack[stack.length] = i;
}

while (stack.length !== 0) {
  splited[stack.pop()] = -1;
}
console.log(splited.join(" ").trim());
