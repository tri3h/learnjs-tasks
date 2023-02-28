function Calculator() {
    this["+"] = (a, b) => a + b;
    this["-"] = (a, b) => a - b;
    this.calculate = function (str) {
        str = str.split(" ");
        return this[str[1]](+str[0], +str[2]);
    };
    this.addMethod = function (name, func) {
        this[name] = func;
    };
}
