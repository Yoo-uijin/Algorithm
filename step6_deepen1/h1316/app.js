const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(`\n`)
  .map((a) => a.replace(/\r/g, ""));
//   const [n, ...input] = require("fs").readFileSync("dev/stdin").toString().trim().split(`\n`).map((a) => a.replace(/\r/g, ""));

const stack = [];

input.map((e) => {
  stack[stack.length] = e[0];
  let num = 1;
  for (i = 1; i < e.length; i++) {
    if (!stack.includes(e[i])) {
      stack[stack.length] = e[i];
      num += 1;
    } else if (stack.includes(e[i])) {
      if (stack[stack.length - 1] === e[i]) {
        num += 1;
      } else {
        num += 0;
        break;
      }
    }
  }
  num === e.length
    ? (input[input.indexOf(e)] = true)
    : (input[input.indexOf(e)] = false);
  stack.length = 0;
});

let na = 0;
input.map((i) => (i === true ? (na += 1) : (na += 0)));
console.log(na);
