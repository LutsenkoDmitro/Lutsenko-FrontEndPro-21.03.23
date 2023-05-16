class SuperMath {
    calculate(X, Y, znak) {
        let result;

        switch (znak) {
            case "+":
                result = X + Y;
                break;
            case "-":
                result = X - Y;
                break;
            case "/":
                result = X / Y;
                break;
            case "*":
                result = X * Y;
                break;
            case "%":
                result = X % Y;
                break;
            default:
                console.log("Некоректний знак операції!");
                return;
        }

        console.log(`Результат: ${result}`);
    }

    input() {
        const X = +prompt("Введіть значення для X:");
        const Y = +prompt("Введіть значення для Y:");
        const znak = prompt("Введіть операцію (+ - / * %):");

        this.calculate(X, Y, znak);
    }
}

const p = new SuperMath();
