class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, numberPlate, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.numberPlate = numberPlate;
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner must be over 18 years old");
        }
    }

    printInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Number Plate: ${this.numberPlate}`);
        console.log(`Owner Info: `);
        this.owner.printInfo();
    }
}
const person1 = new Human("John", 25);
const person2 = new Human("Mary", 19);

const car1 = new Car("Toyota", "Camry", 2022, "AA1234BB", person1);
const car2 = new Car("Honda", "Civic", 2019, "AA5678BB", person2);

car1.printInfo();
car2.printInfo();