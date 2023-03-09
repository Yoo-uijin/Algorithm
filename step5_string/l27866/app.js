const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [word, letterN] = fs.readFileSync(file).toString().trim().split(`\n`);
// const [word, letterN] = require("fs").readFileSync("dev/stdin").toString().trim().split(`\n`);

console.log(word[Number(letterN - 1)]);
