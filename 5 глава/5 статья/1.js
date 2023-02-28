function camelize(str) {
    let newStr = str
        .split("-")
        .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1))
        .join("");
    if (str[0] !== "-") {
        newStr = newStr.slice(0, 1).toLowerCase() + newStr.slice(1);
    }
    return newStr;
}
