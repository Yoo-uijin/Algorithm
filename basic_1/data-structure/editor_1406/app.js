const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(`\n`)
  .map((i) => i.replace(/\r/g, ""));
// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map((i) => i.replace(/\r/g, ""));

const string = input[0].split("");
const length = string.length;
const M = Number(input[1]);
const command = input.slice(2);

let cursor = string.length;

const result = () => {
  for (let i = 0; i < M; i++) {
    if (command[i] === "L") {
      if (cursor !== -1) {
        cursor -= 1;
      }
    } else if (command[i] === "D") {
      if (cursor !== length) {
        cursor += 1;
      }
    } else if (command[i] === "B") {
      if (cursor !== -1 && cursor !== 0) {
        string.splice(cursor - 1, 1);
        cursor -= 1;
      }
    } else if (command[i].includes("P")) {
      cursor === -1
        ? string.splice(0, 0, command[i].slice(-1))
        : string.splice(cursor, 0, command[i].slice(-1));

      cursor += 1;
    }
  }
  console.log(string.join(""));
};

result();
