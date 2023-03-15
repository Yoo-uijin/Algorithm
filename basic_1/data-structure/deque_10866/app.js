const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(file).toString().trim().split(`\n`);
// const [N, ...input] = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(`\n`);

const deque = [];
const output = [];

for (let i = 0; i < Number(N); i++) {
  if (input[i].includes("push_front")) {
    deque.unshift(input[i].slice(11));
  } else if (input[i].includes("push_back")) {
    deque[deque.length] = input[i].slice(10);
  } else if (input[i].includes("pop_front")) {
    deque.length
      ? (output[output.length] = deque.shift())
      : (output[output.length] = -1);
  } else if (input[i].includes("pop_back")) {
    deque.length
      ? (output[output.length] = deque.pop())
      : (output[output.length] = -1);
  } else if (input[i].includes("size")) {
    output[output.length] = deque.length;
  } else if (input[i].includes("empty")) {
    deque.length ? (output[output.length] = 0) : (output[output.length] = 1);
  } else if (input[i].includes("front")) {
    deque.length
      ? (output[output.length] = deque[0])
      : (output[output.length] = -1);
  } else if (input[i].includes("back")) {
    deque.length
      ? (output[output.length] = deque[deque.length - 1])
      : (output[output.length] = -1);
  }
}

console.log(output.join(`\n`));
