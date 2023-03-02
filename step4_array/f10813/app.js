const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, ...input] = fs.readFileSync(file).toString().trim().split("\n");

// const [a, ...input] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const [numberOfBaskets, numberOfExchanges] = a.split(" ").map(Number);

const arrayOfBaskets = [];
for (let i = 1; i <= numberOfBaskets; i++) {
  arrayOfBaskets.push(i);
}

for (let j = 0; j < numberOfExchanges; j++) {
  let firstNum = input[j].split(" ").map(Number)[0];
  let secondNum = input[j].split(" ").map(Number)[1];

  let beforeExchangeBasket1 = arrayOfBaskets[firstNum - 1];
  let beforeExchangeBasket2 = arrayOfBaskets[secondNum - 1];

  arrayOfBaskets[firstNum - 1] = beforeExchangeBasket2;
  arrayOfBaskets[secondNum - 1] = beforeExchangeBasket1;
}

console.log(...arrayOfBaskets);
