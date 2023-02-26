const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let x = Number(input[0]);
let y = Number(input[1]);

if (x > 0 && y > 0) {
  console.log("1");
} else if (x < 0 && y > 0) {
  console.log("2");
} else if (x > 0 && y < 0) {
  console.log("4");
} else if (x < 0 && y < 0) {
  console.log("3");
}
