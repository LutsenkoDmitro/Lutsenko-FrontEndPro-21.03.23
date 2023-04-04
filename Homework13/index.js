const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let sumPositive = 0;
let countPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositive += arr[i];
        countPositive++;
    }
}

console.log(`Сума позитивних елементів: ${sumPositive}`); // Виведе 438
console.log(`Кількість позитивних елементів: ${countPositive}`); // Виведе 14

// Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minElement) {
        minElement = arr[i];
        minIndex = i;
    }
}

console.log(`Мінімальний елемент: ${minElement}`); // Виведе -63
console.log(`Його порядковий номер: ${minIndex}`); // Виведе 15

// Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
        maxIndex = i;
    }
}

console.log(`Максимальний елемент: ${maxElement}`); // Виведе 76
console.log(`Його порядковий номер: ${maxIndex}`); // Виведе 18

// Визначити кількість негативних елементів.
let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegative++;
    }
}

console.log(`Кількість негативних елементів: ${countNegative}`); // Виведе 10

// Знайти кількість непарних позитивних елементів.
let countOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        countOddPositive++;
    }
}

console.log(`Кількість непарних позитивних елементів: ${countOddPositive}`); // Виведе 4

// Знайти кількість парних позитивних елементів.
let countEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        countEvenPositive++;
    }
}

console.log(`Кількість парних позитивних елементів: ${countEvenPositive}`); // Виведе 10

// Знайти суму парних позитивних елементів.
let sumPositiveEven = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] % 2 === 0) {
        sumPositiveEven += arr[i];
    }
}

console.log(sumPositiveEven); // Виведе 262

// Знайдемо суму непарних позитивних елементів:

let sumPositiveOdd = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 && arr[i] % 2 !== 0) {
        sumPositiveOdd += arr[i];
    }
}

console.log(sumPositiveOdd); // Виведе 122

// Знайдемо добуток позитивних елементів:

let productPositive = 1;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        productPositive *= arr[i];
    }
}

console.log(productPositive); // Виведе 1488320768

// Знайдемо найбільший елемент масиву та обнулимо інші:

let maxElement = arr[0];

for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxElement) {
        maxElement = arr[i];
    }
}

for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== maxElement) {
        arr[i] = 0;
    }
}

console.log(arr); // Виведе [0,0,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0,0,0,0]

