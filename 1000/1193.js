const fs = require('fs');
// number
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const consoleResult = (max, sub, direction) => {
  if (direction === 'left') {
    console.log(String(1 + sub) + '/' + String(max - sub));
  }
  if (direction === 'right') {
    console.log(String(max - sub) + '/' + String(1 + sub));
  }
};

let count = 0;
let max = 0;
let direction = 'left';

for (let i = 1; 1; i += 1) {
  if (direction === 'left') direction = 'right';
  else direction = 'left';
  max += 1;
  count += i;

  if (count === input) {
    consoleResult(max, max - 1, direction);
    break;
  }

  if (count > input) {
    count -= i;
    const sub = input - count - 1;
    consoleResult(max, sub, direction);
    break;
  }
}
