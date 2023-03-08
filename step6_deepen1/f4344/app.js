const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [repeatTests, ...inputs] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

// const [repeatTests, ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const output = [];

for (let i = 0; i < Number(repeatTests); i++) {
  let aboveAverage = 0;
  const [students, ...scores] = inputs[i].split(" ").map(Number);

  let average = scores.reduce((acc, cur, j, { length }) => {
    return j === length - 1 ? (acc + cur) / length : acc + cur;
  }, 0);

  scores.map((k) => {
    if (k > average) {
      return aboveAverage++;
    }
  });

  output.push(`${((aboveAverage / students) * 100).toFixed(3)}%`);
}

console.log(output.join(`\n`));
