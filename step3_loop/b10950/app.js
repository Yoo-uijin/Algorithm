const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const numberOfIteratioin = Number(input[0]);

const testCase = (numberOfIteratioin, input) => {
  for (let i = 0; i < numberOfIteratioin; i++) {
    console.log(
      input[i + 1].split(" ").map(Number)[0] +
        input[i + 1].split(" ").map(Number)[1]
    );
  }
};

testCase(numberOfIteratioin, input);
