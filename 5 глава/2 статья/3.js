function readNumber() {
    let n;
    while (true) {
        n = prompt("number?");
        if (n === null || n === "") {
            return null;
        } else if (isFinite(n)) {
            return +n;
        }
    }
}
