const fs = require('fs');
// string
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  if (input.length === 1) {
    return console.log(input);
  }

  const obj = {};

  for (let i = 0; i < input.length; i += 1) {
    if (obj[input[i]]) {
      obj[input[i]] += 1;
    } else {
      obj[input[i]] = 1;
    }
  }

  let oddNumberCount = 0;
  let oddAlpha = '';

  for (const key in obj) {
    if (obj[key] % 2 === 1) {
      oddAlpha = key;
      obj[key] -= 1;
      oddNumberCount += 1;
    }

    if (oddNumberCount > 1) {
      return console.log("I'm Sorry Hansoo");
    }
  }

  const arr = Object.entries(obj)
    .map(([key, value]) => {
      return [key, value / 2];
    })
    .sort((a, b) => {
      return a[0].charCodeAt() - b[0].charCodeAt();
    });

  const centerAlpha = oddAlpha;
  let leftAlpha = '';
  let rightAlpha = '';

  arr.forEach(([alpha, count]) => {
    leftAlpha += alpha.repeat(count);
    rightAlpha = alpha.repeat(count) + rightAlpha;
  });

  return console.log(leftAlpha + centerAlpha + rightAlpha);
}

solution(input);
