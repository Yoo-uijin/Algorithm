const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();
// const input = require("fs")
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim();

console.log(
  input.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match.startsWith("<")) {
      return match;
    }
    return [...match].reverse().join("");
  })
);
