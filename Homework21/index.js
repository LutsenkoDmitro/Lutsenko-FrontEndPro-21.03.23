class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class Building {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Max number of apartments reached");
        }
    }
}
// Створення екземплярів класу Person
const person1 = new Person("Василь", "чоловік");
const person2 = new Person("Марія", "жінка");
const person3 = new Person("Іван", "чоловік");

// Створення екземплярів класу Apartment та додавання до них жителів
const apartment1 = new Apartment();
apartment1.addResident(person1);
apartment1.addResident(person2);

const apartment2 = new Apartment();
apartment2.addResident(person3);

// Створення екземпляру класу Building та додавання до нього квартир
const building = new Building(2);
building.addApartment(apartment1);
building.addApartment(apartment2);