function getAverageAge(users) {
    return users.reduce((prev, cur) => (prev += cur.age), 0) / users.length;
}
