function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (array.length - 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
