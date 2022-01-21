const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const words = [];
for (let i = 1; i < input.length; i++) words.push(input[i]);

function maxValue(input, words) {
  const obj = {};
  const arr = [];
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
    for (let j = 0; j < words[i].length; j++) {
      obj[words[i][j]] = 0;
    }
  }
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      obj[word[i]] += Math.pow(10, i);
    }
  }
  for (let vehicle in obj) {
    arr.push([vehicle, obj[vehicle]]);
  }

  arr.sort(function (a, b) {
    return b[1] - a[1];
  });
  let temp = 9;
  for (let i = 0; i < arr.length; i++) {
    arr[i][1] *= temp;
    temp--;
    result += arr[i][1];
  }
  return result;
}
console.log(maxValue(input, words));
