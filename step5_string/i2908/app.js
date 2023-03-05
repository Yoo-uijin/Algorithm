const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num1, num2] = fs.readFileSync(file).toString().trim().split(" ");

// const [num1, num2] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString().trim().split(" ");

console.log(
  Math.max(
    Number(num1[2] + num1[1] + num1[0]),
    Number(num2[2] + num2[1] + num2[0])
  )
);
