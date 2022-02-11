const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = input[1].split(' ');

function solution(arr) {
  let temp = 0;
  let result = 0;
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i of arr) {
    temp += parseInt(i);
    result += temp;
  }
  return result;
}

console.log(solution(arr));
