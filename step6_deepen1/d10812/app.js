const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim().split(`\n`);

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split(`\n`);

const [N, M] = input[0].split(" ").map((item) => parseInt(item));

// mid, mid+1, ..., end-1, end, begin, begin+1, ..., mid-1
let basket = [];

for (let i = 1; i <= N; i++) {
  basket.push(i);
}

for (let q = 1; q <= M; q++) {
  let [i, j, k] = input[q].split(" ").map((item) => parseInt(item));
  i--, j--, k--;
  basket.splice(i, j - i + 1, ...basket.slice(k, j + 1), ...basket.slice(i, k));
}
console.log(basket.join(" "));
