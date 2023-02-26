const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const [firstNum, secondNum, thirdNum] = [input[0], input[1], input[2]];

const answer = (firstNum, secondNum, thirdNum) => {
  if (firstNum === secondNum && secondNum === thirdNum && thirdNum === firstNum)
    return console.log(10000 + firstNum * 1000);

  if (
    firstNum !== secondNum ||
    secondNum !== thirdNum ||
    thirdNum !== firstNum
  ) {
    if (firstNum === secondNum || firstNum === thirdNum) {
      return console.log(1000 + firstNum * 100);
    }
    if (secondNum === thirdNum) {
      return console.log(1000 + secondNum * 100);
    }
  }

  if (
    firstNum !== secondNum &&
    secondNum !== thirdNum &&
    thirdNum !== firstNum
  ) {
    // Passing a comparison function that defines the sort order to the sort method as an argument
    const sortNum = [firstNum, secondNum, thirdNum].sort((a, b) => b - a);
    console.log(sortNum[0] * 100);
  }
};

answer(firstNum, secondNum, thirdNum);
