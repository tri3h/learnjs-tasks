function formatDate(date) {
    let now = new Date();
    let diff = now - date;
    let seconds = Math.round(diff / 1000);
    let minutes = diff / 60 / 1000;
    let hours = minutes / 60 / 60 / 1000;
    if (seconds < 1) {
        return "прямо сейчас";
    } else if (minutes < 1) {
        return `${seconds} сек. назад`;
    } else if (hours < 1) {
        return `${minutes} мин. назад`;
    } else {
        return `${addZero(date.getDate())}.${addZero(
            date.getMonth() + 1
        )}.${date.getFullYear().toString().slice(2)} ${addZero(
            date.getHours()
        )}:${addZero(date.getMinutes())}`;
    }
}

function addZero(value) {
    if (+value < 10) {
        return "0" + value;
    }
    return value;
}
