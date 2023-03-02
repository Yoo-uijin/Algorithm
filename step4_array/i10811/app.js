const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const [numberOfBaskets, numberOfExchanges] = input[0].split(" ").map(Number);
let result = [];

for (let i = 1; i <= numberOfBaskets; i++) {
  result.push(i);
}

for (let j = 1; j <= numberOfExchanges; j++) {
  let [a, b] = input[j].split(" ").map(Number);
  let rev = result.slice(a - 1, b);
  result.splice(a - 1, b - a + 1, ...rev.reverse());
}

console.log(result.join(" "));
