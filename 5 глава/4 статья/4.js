function sumInput() {
    let arr = [];
    while (true) {
        let n = prompt("number?");
        if (n === "" || n === null || !isFinite(n)) {
            break;
        } else {
            arr.push(+n);
        }
    }
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
