const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const firstNum = input[0];
const secondNum = input[1];
const thirdNum = input[2];

if (firstNum === secondNum && secondNum === thirdNum && thirdNum === firstNum) {
  console.log(`${10000 + firstNum * 1000}`);
} else if (
  firstNum === secondNum ||
  secondNum === thirdNum ||
  thirdNum === firstNum
) {
  if (firstNum === secondNum) {
    console.log(`${1000 + firstNum * 100}`);
  }
  if (secondNum === thirdNum) {
    console.log(`${1000 + secondNum * 100}`);
  }
  if (thirdNum === firstNum) {
    console.log(`${1000 + thirdNum * 100}`);
  }
} else if (
  firstNum !== secondNum &&
  secondNum !== thirdNum &&
  thirdNum !== firstNum
) {
  if (firstNum > secondNum && firstNum > thirdNum) {
    console.log(`${firstNum * 100}`);
  } else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log(`${secondNum * 100}`);
  } else if (thirdNum > firstNum && thirdNum > secondNum) {
    console.log(`${thirdNum * 100}`);
  }
}
