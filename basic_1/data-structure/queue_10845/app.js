const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs.readFileSync(file).toString().trim().split(`\n`);
// const [N, ...input] = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(`\n`);

const queue = [];
const output = [];

for (let i = 0; i < Number(N); i++) {
  if (input[i].includes("push")) {
    queue[queue.length] = input[i].slice(5);
  } else if (input[i].includes("pop")) {
    queue.length
      ? (output[output.length] = queue.shift())
      : (output[output.length] = -1);
  } else if (input[i].includes("size")) {
    output[output.length] = queue.length;
  } else if (input[i].includes("empty")) {
    queue.length ? (output[output.length] = 0) : (output[output.length] = 1);
  } else if (input[i].includes("front")) {
    queue.length
      ? (output[output.length] = queue[0])
      : (output[output.length] = -1);
  } else if (input[i].includes("back")) {
    queue.length
      ? (output[output.length] = queue[queue.length - 1])
      : (output[output.length] = -1);
  }
}

console.log(output.join(`\n`));
