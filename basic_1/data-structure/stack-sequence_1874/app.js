const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(`\n`).map(Number);

// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number)
const N = input[0];
const numbers = input.slice(1);

const result = (N, numbers) => {
  let stack = [];
  let result = "";
  let j = 0;

  for (let i = 1; i <= N; i++) {
    stack.push(i);
    result += "\n+";
    while (stack[stack.length - 1] === numbers[j]) {
      stack.pop();
      result += "\n-";
      j++;
      if (j === N) break;
    }
  }

  return stack.length === 0 ? result.slice(1) : "NO";
};

console.log(result(N, numbers));
