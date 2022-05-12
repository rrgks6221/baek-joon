const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input[0] = input[0].split(' ');
input[1] = input[1]
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => a - b);

console.log(input[1][input[0][1] - 1]);
