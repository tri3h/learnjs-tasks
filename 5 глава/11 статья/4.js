function getDateAgo(date, days) {
    let copy = new Date(date);
    copy.setDate(copy.getDate() - days);
    return copy.getDate();
}
