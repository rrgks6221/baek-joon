const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

if (input[0] > input[1]) console.log('>');
else if (input[0] < input[1]) console.log('<');
else console.log('==');
