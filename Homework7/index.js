let num1Str = prompt("Введiть перше число:");
let num2Str = prompt("Введiть друге число:");
let num3Str = prompt("Введiть третє число:");

function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let x = sum / 3;
    return x;
}

let num1 = Number(num1Str);
let num2 = Number(num2Str);
let num3 = Number(num3Str);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Помилка: введено не число");
} else {
    let x = calculateAverage(num1, num2, num3);
    alert("Середнє арифметичне: " + x);
}