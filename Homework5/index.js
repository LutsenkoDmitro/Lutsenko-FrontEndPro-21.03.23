
const operation = prompt("Введіть дію, яку ви хочете виконати (add, sub, mult, div): ");
if (!['add', 'sub', 'mult', 'div'].includes(operation)) {
    alert("Некоректна дія. Спробуйте ще раз.");
} else {
    let num1 = prompt("Введіть перше число: ");
    if (isNaN(num1)) {
        alert("Некоректне перше число. Спробуйте ще раз.");
    } else {
        num1 = parseFloat(num1);

        let num2 = prompt("Введіть друге число: ");

        if (isNaN(num2)) {
            alert("Некоректне друге число. Спробуйте ще раз.");
        } else {
            num2 = parseFloat(num2);

            if (operation === 'div' && num2 === 0) {
                alert("Друге число не може бути рівним нулю. Спробуйте ще раз.");
            } else {

                let result;
                if (operation === 'add') {
                    result = num1 + num2;
                    alert(`${num1} + ${num2} = ${result}`);
                } else if (operation === 'sub') {
                    result = num1 - num2;
                    alert(`${num1} - ${num2} = ${result}`);
                } else if (operation === 'mult') {
                    result = num1 * num2;
                    alert(`${num1} * ${num2} = ${result}`);
                } else if (operation === 'div') {
                    result = num1 / num2;
                    alert(`${num1} / ${num2} = ${result}`);
                }
            }
        }
    }
}