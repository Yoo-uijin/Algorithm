const fs = require("fs");
// const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(file).toString().trim());

const multiplicationTable = (input) => {
  for (let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
};

multiplicationTable(input);
