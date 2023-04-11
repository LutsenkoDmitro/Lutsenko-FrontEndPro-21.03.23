function removeChars(inputStr, charsToRemove) {
    charsToRemove.forEach(function(char) {
        inputStr = inputStr.replace(new RegExp(char, "g"), "");
    });
    return inputStr;
}

let inputStr = " hello world";
let charsToRemove = ['l', 'd'];
let outputStr = removeChars(inputStr, charsToRemove);
console.log(outputStr);