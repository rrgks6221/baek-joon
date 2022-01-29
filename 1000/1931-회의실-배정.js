const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(' '));
  for (let j = 0; j < 2; j++) {
    arr[i - 1][j] = parseInt(arr[i - 1][j]);
  }
}
function maxMeeting(arr) {
  arr.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
  let temp = arr[0][1];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] >= temp) {
      temp = arr[i][1];
      count++;
    }
  }
  return count;
}

console.log(maxMeeting(arr));
