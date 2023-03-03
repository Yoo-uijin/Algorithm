const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [...inputs] = fs.readFileSync(file).toString().trim().split("\n");

// const [...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim().split("\n");

for (let i = 0; i < inputs.length; i++) {
  if (Number.isNaN(Number(inputs[i]))) {
    let input = inputs[i].replace(/\r/g, "");

    let firstLetter = input.substring(0, 1);
    let lastLetter = input.substring(input.length - 1, input.length);

    console.log(firstLetter + lastLetter);
  }
}
