const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  let result = A + B;

  if (result === 0) {
    return;
  } else {
    console.log(result);
  }
}
