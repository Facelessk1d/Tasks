// Калькулятор: Запроси у пользователя два числа и операцию (+, -, *, /). 
//Выведи результат, используя if или switch.

const operationFunc = (number1, number2) => {
    let x;
    let  uslovie = false
    while(!uslovie) {
        const promtedOperator = prompt("Введите оператор из [+, -, *, /,]:");
        switch (promtedOperator) {
            case "+":
                x = number1 + number2
                uslovie = true
                break;
                
            case "*":
                x = number1 * number2
                uslovie = true
                break;
                
            case "/":
                x = number1 / number2
                uslovie = true
                break;
                
            case "-":
                x = number1 - number2
                uslovie = true
                break;

            case "%":
                x = number1 % number2
                uslovie = true
                break;

            default:
                console.log("ты даун ээээ ыыы ээ ")
        }
    }
    return x
}
console.log(operationFunc(3, 4324))