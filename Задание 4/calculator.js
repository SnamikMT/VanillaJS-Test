class Calculator {
    constructor() {

    }

    add(a, b) {
        return `${a} + ${b} = ${a + b}`;
    }

    subtract(a, b) {
        return `${a} - ${b} = ${a - b}`;
    }

    multiply(a, b) {
        return `${a} * ${b} = ${a * b}`;
    }

    divide(a, b) {
        if (b === 0) {
            return "Делить на ноль нельзя как бы";
        }
        return `${a} / ${b} = ${a / b}`;
    }
}

const calculator = new Calculator();

console.log(calculator.add(6, 3));          // Сложим
console.log(calculator.subtract(25, 7));    // Вычитаем
console.log(calculator.multiply(5, 6));     // Умножаем
console.log(calculator.divide(12, 4));      // Делим
console.log(calculator.divide(5, 0));       // Выводим ошибочку
