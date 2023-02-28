function groupById(arr) {
    return arr.reduce((prev, cur) => {
        prev[cur.id] = cur;
        return prev;
    }, {});
}
