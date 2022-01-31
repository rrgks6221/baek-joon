const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

const over = input.reduce((acc, cur) => (acc += cur), 0) - 100;

for (let i = 0; i < input.length - 1; i += 1) {
  for (let j = i + 1; j < input.length; j += 1) {
    if (over === input[i] + input[j]) {
      [input[i], input[j]] = [0, 0];
      input.sort((a, b) => a - b).splice(0, 2);
      break;
    }
  }
  if (input.length === 7) break;
}

for (let i of input) console.log(i);
