const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v => +v);

const arr = [];
for (let i = 1; i < input.length; i++) arr.push(input[i]);

function solution(arr) {
    let maxWeigth = 0;
    let temp = 0;
    let count = 1;
    arr.sort((a, b) => {
        return b - a;
    })
    for (let i = 0; i < arr.length; i++, count ++) {
        temp = arr[i] * count;
        maxWeigth = (maxWeigth < temp) ? temp : maxWeigth;
    }
    return maxWeigth;
}

console.log(solution(arr));