function topSalary(salaries) {
    let bestName = null;
    let bestSalary = 0;
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > bestSalary) {
            bestSalary = salary;
            bestName = name;
        }
    }
    return bestName;
}
