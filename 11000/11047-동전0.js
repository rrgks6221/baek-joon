const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const line0 = input[0].split(' ');
const n = parseInt(line0[0]);
const k = parseInt(line0[1]);
const a = [];

for (let i = n; i > 0; i--) a.push(parseInt(input[i]));

function minCount(n, k, a) {
  let count = 0;
  for (let i of a) {
    while (k >= i) {
      count += parseInt(k / i);
      k %= i;
    }
  }
  return count;
}
console.log(minCount(n, k, a));
