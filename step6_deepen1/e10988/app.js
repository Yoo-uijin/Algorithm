const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputArr = `${fs.readFileSync(file)}`.trim().split("");

// const inputArr = `${require('fs').readFileSync('dev/stdin')}`.trim().split('');

const reverseArr = [...inputArr].reverse();
if (JSON.stringify(inputArr) === JSON.stringify(reverseArr)) {
  console.log(1);
} else {
  console.log(0);
}
