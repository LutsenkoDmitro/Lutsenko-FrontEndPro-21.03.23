function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = generateKey(16, characters);
console.log(key);