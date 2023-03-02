const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [numberOfSubjects, ...scores] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n");

// const [numberOfSubjects, ...scores] = require("fs")
// .readFileSync("/dev/stdin")
// .toString()
// .trim()
// .split("\n");

const scoresArray = scores[0].split(" ").map(Number);
const topScore = Math.max(...scoresArray);

const manipulatedScores = scoresArray.map((i) => (i / topScore) * 100);

const average = manipulatedScores.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average);
