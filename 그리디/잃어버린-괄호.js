const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("-");

function solution(input) {
    let temp;
    let result = 0;
    temp = input[0].split("+");
    for (let i of temp) {
        result += parseInt(i);
    }
    for (let i = 1; i < input.length; i++) {
        temp = input[i].split("+");
        for (let j of temp) {
            result -= parseInt(j);
        }
    }
    return result;
}

console.log(solution(input));