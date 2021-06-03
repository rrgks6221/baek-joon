const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const cost = input[0];

function changeCount(cost) {
    const moneykinds = [500, 100, 50, 10, 5, 1];
    let changeMoney = 1000 - cost;
    let count = 0;

    for (let i of moneykinds) {
        while (changeMoney >= i) {
            count += parseInt(changeMoney / i);
            changeMoney %= i;
        }
    }
    return count;
}

console.log(changeCount(cost));