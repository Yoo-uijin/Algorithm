const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = parseInt(fs.readFileSync(file).toString());

// const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());

const result1 = [];
const result2 = [];

for (let i = 1; i <= input; i++) {
  result1.push(2 * i - 1);
}

for (let k = 0; k < result1.length; k++) {
  let repeatTimes = (2 * input - 1 - result1[k]) / 2;
  result1[k] = " ".repeat(repeatTimes) + "*".repeat(result1[k]);
}

for (j = 0; j < result1.length - 1; j++) {
  result2.push(result1[result1.length - 2 - j]);
}

const output = result1.concat(result2);
console.log(output.join(`\n`));
