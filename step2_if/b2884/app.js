const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");

let hour = Number(input[0]);
let min = Number(input[1]);

if (hour === 0) {
  hour = +24;
}

const total = hour * 60 + min - 45;

hour = parseInt(total / 60);
min = total - 60 * hour;

if (hour === 24) {
  hour = 0;
}

console.log(`${hour} ${min}`);
