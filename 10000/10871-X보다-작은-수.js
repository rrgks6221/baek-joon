const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, x] = input[0].split(' ').map((v) => +v);
const a = input[1].split(' ').map((v) => +v);

const result = a.filter((v) => x > v).join(' ');

console.log(result);
