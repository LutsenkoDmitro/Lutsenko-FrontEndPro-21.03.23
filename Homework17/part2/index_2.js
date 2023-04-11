function doMath(x, znak, y) {
    let result;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = null;
            break;
    }
    return result;
}
let x = 10;
let y = 5;
let znak = '+';
let result = doMath(x, znak, y);
console.log(result); // 15