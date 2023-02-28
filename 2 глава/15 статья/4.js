function pow(x, n) {
    return x ** n;
}

const x = prompt("Введите х");
const n = prompt("Введите n");

if (n >= 1) {
    alert(pow(x, n));
}
