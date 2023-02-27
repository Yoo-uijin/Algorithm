const fs = require("fs");
// const input = +fs.readFileSync("/dev/stdin").toString().trim();
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(file).toString().trim();

const sumOfNumbers = (input) => {
  let output = 0;
  for (let i = 1; i <= input; i++) {
    output += i;
  }
  console.log(output);
};

sumOfNumbers(input);
