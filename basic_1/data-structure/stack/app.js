const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(`\n`)
  .map((i) => i.replace(/\r/g, ""));
// const [N, ...input] = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(`\n`)
//   .map((i) => i.replace(/\r/g, ""));

const stack = [];
const outcome = [];

for (let i = 0; i < Number(N); i++) {
  if (input[i].includes("push")) {
    stack.push(input[i].trim().split(" ")[1]);
  }

  if (input[i] === "pop") {
    outcome.push(stack.pop());
    if (outcome[outcome.length - 1] === undefined) {
      outcome[outcome.length - 1] = -1;
    }
  }

  if (input[i] === "size") {
    outcome.push(stack.length);
  }

  if (input[i] === "empty") {
    if (stack.length === 0) {
      outcome.push(1);
    } else {
      outcome.push(0);
    }
  }

  if (input[i] === "top") {
    if (stack.length === 0) {
      outcome.push(-1);
    } else {
      outcome.push(stack[stack.length - 1]);
    }
  }
}

console.log(outcome.join(`\n`));
