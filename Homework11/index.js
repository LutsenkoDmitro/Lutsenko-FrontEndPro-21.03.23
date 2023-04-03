// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const rate = 27;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    let cost = dollars * rate;
    console.log(`${dollars} доларів коштують ${cost} гривень.`);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.


const n = 100;
for (let i = 1; i <= 10; i++) {
    let square = i * i;
    if (square > n) {
        break;
    }
    console.log(square);
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).


const number = 18;
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).


const number = 81;
let result = number;

while (result > 1) {
    if (result % 3 !== 0) {
        console.log(`${number} не можна отримати шляхом зведення числа 3 у деякий ступінь.`);
        break;
    }
    result = result / 3;
}

if (result === 1) {
    console.log(`${number} можна отримати шляхом зведення числа 3 у деякий ступінь.`);
}