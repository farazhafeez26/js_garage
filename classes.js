class Car {
    // Car Class
    constructor(brand, name, model, year) {
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.year = year;
    }

    // methods

    getAge() {
        return new Date().getFullYear() - this.year;
    }

    // methods
    getFullName() {
        return this.brand + " " + this.name;
    }
  
    static makeNoise() {
        // use method without instantiating the class
        console.log("Noise!!");
    }
  
    static getTax() {
        // use method without instantiating the class
        return 0.16;
    }
}

class Mercedes extends Car {
    constructor(name, model, year) {
        super("Mercedes", name, model, year); // Call the constructor
        this.brandSuffix = "Benz";
    }
    // methods
    getFullName() {
        // const carName = super.getFullName(); // Car.getFullName()
        return this.brand + " " + this.brandSuffix + " " + this.name;
    }
}

const classA = new Mercedes("A Class", "A", 2010);
const classS = new Mercedes("S class", "S", 2011, "B", 2013);

console.log(classS);

console.log(classA);
console.log(classA.getFullName());
console.log(classS.getFullName());

const mustang = new Car("Ford", "Mustang", "1969", 1980); // Car Instance

console.log(mustang);

const ford = new Car("ford", "discovery", "1970", 1990);
const tesla = new Car("Tesla", "Model X", "2010", 2010);

console.log(ford);
console.log(ford.getAge());
console.log(mustang.getAge());
console.log(mustang.getFullName());




