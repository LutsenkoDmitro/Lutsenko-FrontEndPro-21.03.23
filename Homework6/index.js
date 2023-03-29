let hoursStr = prompt("Яку кiлькiсть годин перевести в секунды?:");

function hoursToSeconds(hours) {
    if (typeof hours === "number") {
        let seconds = hours * 3600;
        return seconds;
    } else {
        return "Введiть число";
    }
}

let hours = Number(hoursStr);
if (isNaN(hours)) {
    alert("Введiть число");
} else {
    let result = hoursToSeconds(hours);
    alert(`${result} Секунд`);
}