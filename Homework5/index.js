
let op;

function func() {

    let result;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num1) {
                result = num1 / num2;
            } else {
                result = `Дiлити на 0 не можна`;
            }
            break;

    }
    document.getElementById("result").innerHTML = (`${num1}${op}${num2} = ${result}`);
}
