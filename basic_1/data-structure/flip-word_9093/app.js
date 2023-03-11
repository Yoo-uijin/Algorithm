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

const result = [];

for (let i = 0; i < T; i++) {
  result.push(
    input[i]
      .split(" ")
      .map((a) => a.split("").reverse().join(""))
      .join(" ")
  );
}

console.log(result.join(`\n`));
