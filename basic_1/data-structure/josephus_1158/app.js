const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs.readFileSync(file).toString().trim().split(" ").map(Number);
// const [N, K] = require("fs").readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

const arr = Array.from({ length: N }, (_, i) => i + 1);

const output = [];
let index = K - 1;

while (arr.length) {
  output[output.length] = arr.splice(index, 1);
  index = (index + K - 1) % arr.length;
}

console.log(`<${output.join(", ")}>`);
