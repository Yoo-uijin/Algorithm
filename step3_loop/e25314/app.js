const fs = require("fs");
// const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(file).toString().trim());

const numberOfLoop = input / 4;
console.log("long ".repeat(numberOfLoop) + "int");
