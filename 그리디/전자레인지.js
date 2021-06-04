const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const second = parseInt(input[0]);

function minBtn(second) {
    const btnTime = [300, 60, 10];
    const btnCount = [];
    
    if (!((second % btnTime[2]) === 0)) return -1;

    for (let i of btnTime) {
        btnCount.push(parseInt(second / i));
        second %= i;
    }
    return btnCount.join(" ");
}

console.log(minBtn(second));