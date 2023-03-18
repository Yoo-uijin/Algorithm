const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(file).toString().trim();
// const input = require("fs").readFileSync("dev/stdin").toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/gi, ".").length);
