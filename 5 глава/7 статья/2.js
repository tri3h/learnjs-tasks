function aclean(arr) {
    let map = new Map();
    for (let value of arr) {
        let key = value.toLowerCase().split("").sort().join("");
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
    return Array.from(map.values());
}
