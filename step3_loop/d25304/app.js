const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const indicatedReceiptAmount = Number(input[0]);
const numberOfTypesOfObjects = Number(input[1]);

const calculateReceiptAmount = (
  numberOfTypesOfObjects,
  input,
  indicatedReceiptAmount
) => {
  let sum = 0;
  for (let i = 1; i <= numberOfTypesOfObjects; i++) {
    sum +=
      input[i + 1].split(" ").map(Number)[0] *
      input[i + 1].split(" ").map(Number)[1];
  }

  if (sum === indicatedReceiptAmount) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

calculateReceiptAmount(numberOfTypesOfObjects, input, indicatedReceiptAmount);
