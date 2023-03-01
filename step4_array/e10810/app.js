const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const baskets = [];

//Create as many objects as the number of baskets and put them into an array.
const makeBaskets = () => {
  const numberOfBaskets = input[0].split(" ").map(Number)[0];
  for (let i = 1; i <= numberOfBaskets; i++) {
    baskets.push({ i });
  }
  for (let i = 0; i < baskets.length; i++) {
    baskets[i].ball = 0;
  }
};

const throwBall = () => {
  const numbefOfThrowBall = input[0].split(" ").map(Number)[1];

  for (let j = 1; j <= numbefOfThrowBall; j++) {
    let firstBasket = input[j].split(" ").map(Number)[0];
    let secondBasket = input[j].split(" ").map(Number)[1];
    let numberedBall = input[j].split(" ").map(Number)[2];

    let firstBasketOfIndex = baskets.findIndex((v) => v.i === firstBasket);
    let secondBasketOfIndex = baskets.findIndex((v) => v.i === secondBasket);

    for (let k = firstBasketOfIndex; k <= secondBasketOfIndex; k++) {
      baskets[k].ball = numberedBall;
    }
  }
};

makeBaskets();
throwBall();

const outcome = [];
baskets.forEach((v) => outcome.push(v.ball));

console.log(...outcome);
