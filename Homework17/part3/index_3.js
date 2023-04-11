function fillArray() {
    let mainLength = +prompt("Введіть довжину основного масиву:");
    let subLength = +prompt("Введіть довжину внутрішніх масивів:");
    let value = prompt("Введіть значення елементів масивів:");

    let arr = [];
    for (let i = 0; i < mainLength; i++) {
        let subArr = [];
        for (let j = 0; j < subLength; j++) {
            subArr.push(value);
        }
        arr.push(subArr);
    }

    return arr;
}
let arr = fillArray();
alert(arr);