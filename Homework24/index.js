class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        // Перевірка коректності введення операції
        const validOperators = ["+", "-", "/", "*", "%"];
        if (!validOperators.includes(znak)) {
            console.log("Неправильна операція!");
            this.input(obj); // Повторне введення даних
            return;
        }

        const calculation = `${X} ${znak} ${Y}`;
        const result = eval(calculation); // Обчислення виразу

        // Питання користувача, чи він хоче зробити розрахунок
        const confirmMessage = `Ви бажаєте розрахувати вираз ${calculation}? (y/n)`;
        const shouldCalculate = confirm(confirmMessage);

        if (shouldCalculate) {
            console.log(`Результат: ${result}`);
        } else {
            this.input(obj); // Повторне введення даних
        }
    }

    input(prevObj = {}) {
        // Введення нових даних
        const newX = Number(prompt("Введіть X:", prevObj.X || 0));
        const newY = Number(prompt("Введіть Y:", prevObj.Y || 0));
        const newZnak = prompt("Введіть операцію (+, -, /, *, %):", prevObj.znak || "+");

        // Створення нового об'єкту з введеними даними
        const newObj = { X: newX, Y: newY, znak: newZnak };
        this.check(newObj); // Перевірка та розрахунок
    }
}