function averageNumElements(arr) {
    const numElements = arr.filter((item) => typeof item === 'number');
    if (numElements.length === 0) {
        return null;
    }
    const sum = numElements.reduce((acc, item) => acc + item, 0);
    return sum / numElements.length;
}
let arr = [1, 'two', 3, 'four', 5];
let avg = averageNumElements(arr);
console.log(avg); // 3