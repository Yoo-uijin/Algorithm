const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
