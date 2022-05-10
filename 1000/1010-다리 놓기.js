const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

for (let i = 1; i <= input[0]; i += 1) {
  const m = input[i].split(' ')[0];
  const n = input[i].split(' ')[1];

  console.log(Math.round(factorial(n) / (factorial(n - m) * factorial(m))));
}
