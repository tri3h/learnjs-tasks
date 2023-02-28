const login = prompt("Кто там?");
if (login === "Админ") {
    const passw = prompt("Пароль?");
    if (passw === "" || passw === null) {
        alert("Отменено");
    } else if (passw === "Я главный") {
        alert("Здравствуйте!");
    } else {
        alert("Неверный пароль");
    }
} else if (login === "" || login === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}
