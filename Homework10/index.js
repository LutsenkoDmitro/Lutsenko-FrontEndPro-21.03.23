
// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let output = "";
for (let i = 10; i <= 20; i++) {
    output += i + ", ";
}
console.log(output);


// Вивести квадрати чисел від 10 до 20.
for (let i = 10; i <= 20; i++) {
    console.log(i ** 2);
}

// Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

// Знайти добуток усіх цілих чисел від 15 до 35.

let prod = 1;
for (let i = 15; i <= 35; i++) {
    prod *= i;
}
console.log(prod);

//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
let mean = sum / 500;
console.log(mean);

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let n = prompt("Введіть натуральне число:");
let divisors = "";
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        divisors += i + " ";
    }
}
console.log(`Дільники ${n}: ${divisors}`);

// Визначити кількість його парних дільників:

let n = prompt("Введіть натуральне число:");
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) {
        count++;
    }
}
console.log(`Кількість парних дільників ${n}: ${count}`);

// Знайти суму його парних дільників.

let n = prompt("Введіть натуральне число:");
let sum = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) {
        sum += i;
    }
}
console.log(`Сума парних дільників ${n}: ${sum}`);

// Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
}