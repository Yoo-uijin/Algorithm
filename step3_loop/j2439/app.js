let fs = require("fs");
let file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ");

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

result = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    // for (let j = num - 1; j > i; j--) {
    result += " ";
  }

  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
