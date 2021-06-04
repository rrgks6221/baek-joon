const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString());

function solution(input) {
  let count = 0;
  while (input % 5 !== 0) {
    input -= 3;
    count++;
    if (input < 0) return -1;
  }
  return count += input / 5;
}
console.log(solution(input));