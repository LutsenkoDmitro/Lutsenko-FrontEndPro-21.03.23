let yearOfBirth = prompt("Введіть Ваш рік народження:");
let city = prompt("Введіть назву міста, де Ви живете:");
let favoriteSport = prompt("Введіть Ваш улюблений вид спорту:");

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

if (yearOfBirth === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
}
else if (isNaN(yearOfBirth) || yearOfBirth.length !== 4) {
    alert("Введіть коректний рік народження!");
}


else if(city === null) {
    alert("Шкода, що Ви не захотіли ввести своє мiсто");
}
else if (!isNaN(city) || city === "") {
    alert("Введіть коректну назву міста!");
}
else if(favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
}
else if (!isNaN(favoriteSport)) {
    alert("Введіть коректний улюблений вид спорту!");
} else {
    let message = `Ваш вік: ${age}\n`;

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        let country = "";

        switch (city) {
            case "Київ":
                country = "Україна";
                break;
            case "Вашингтон":
                country = "США";
                break;
            case "Лондон":
                country = "Великобританія";
                break;
        }

        message += `Ти живеш у столиці ${country} ${city}`;
    } else {
        message += `Ти живеш у місті ${city}`;
    }
    const sports = [
        {
            name: "футбол",
            champion: "Крiстiано Роналдо"
        },
        {
            name: "баскетбол",
            champion: "Кобi Брайант"
        },
        {
            name: "теніс",
            champion: "Новак Джоковіч"
        }
    ];




    const sport = sports.find(sport => sport.name === favoriteSport);

    if (sport) {

        message += `\nКруто! Хочеш стати як ${sport.champion}?`;

    }
    alert(message + `\nТвій улюблений вид спорту: ${favoriteSport}`);
}