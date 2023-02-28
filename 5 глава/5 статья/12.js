function unique(arr) {
    let answer = [];
    for (let elem of arr) {
        if (!answer.includes(elem)) {
            answer.push(elem);
        }
    }
    return answer;
}
