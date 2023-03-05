const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const tests = fs.readFileSync(file).toString().trim().split("\n");

// const tests = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim().split("\n");

const repeats = [];
const strings = [];
const output = [];

for (i = 0; i < tests.length; i++) {
  let [repeat, string] = tests[i].split(" ").map((a) => a.replace(/\r/g, ""));

  if (string === undefined) {
  } else {
    repeats.push(Number(repeat));
    strings.push(string);
  }
}

for (let i = 0; i < repeats.length; i++) {
  let splitStrings = strings[i].split("");
  output.push(splitStrings.map((b) => b.repeat(repeats[i])).join(""));
}

console.log(output.join("\n"));
