let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = 0;
for (let name in salaries) {
    sum += salaries[name];
}
