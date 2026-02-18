
// Этап 3: Условия и циклы
// Определитель времени суток: Запроси у пользователя текущий час 
//(число от 0 до 23). Используя if...else if...else, определи и выведи: "Доброе утро" (6-11), "Добрый день" (12-17) и т.д.уу

const mnePoxNaNazvanie = () => {
    const timeee = prompt("какой у тя час(целое число 0-23) )")
    if ( timeee >= 6 && timeee <= 11) {
        alert("ду")
    }
    if ( timeee >= 12 && timeee <= 17) {
        alert("вечер")
    }
    if ( timeee >= 0 && timeee <= 5) {
        alert("ночь")
    }
    else {
        alert ("ты проиграл")
    }
}

mnePoxNaNazvanie()