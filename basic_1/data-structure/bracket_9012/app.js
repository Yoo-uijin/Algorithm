const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(`\n`)
  .map((i) => i.replace(/\r/g, ""));
// const [T, ...input] = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(`\n`)
//   .map((i) => i.replace(/\r/g, ""));

let stack = [];
const result = [];

for (let i = 0; i < Number(T); i++) {
  input[i].split("").map((a) => {
    if (a === "(") {
      return stack.push(a);
    } else if (!stack.includes("(") && a === ")") {
      return stack.push(a);
    } else if (a === ")") {
      return stack.pop();
    }
  });

  if (stack.length === 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }

  stack = [];
}

console.log(result.join(`\n`));
