class Car {
    // Car Class
    constructor(brand, name, model, year, id) {
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.year = year;
        this.id = id;
    }

    // methods
    getAge() {
        return new Date().getFullYear() - this.year;
    }

    // methods
    getFullName() {
        return this.brand + " " + this.name + " - " + this.model;
    }

    display() {

        const carHtml = `
                <div style="padding: 20px" class="car-container">
                    <h3>${this.getFullName()}</h3>
                    <h4>Age: ${this.getAge()}<h4>
                    <h4>Year: ${this.year}<h4>
                    <h4>Model: ${this.model}</h4>
                <div>
            `;

        const carCont = document.getElementById(this.id);

        carCont.innerHTML = carHtml;

    }
}

class Mercedes extends Car {
    constructor(name, model, year, id) {
        super("Mercedes", name, model, year, id); // Call the constructor
        this.brandSuffix = "Benz";
    }
    // methods
    getFullName() {
        // const carName = super.getFullName(); // Car.getFullName()
        return this.brand + " " + this.brandSuffix + " " + this.name;
    }
}




class Harley extends Car {
    constructor(model, year, id) {
        super("Harley", model, year, id);
    }
    getFullName() {
        return this.model + " " + this.year + " is cool";
    }

    displayBike() {
        const bikeHtml = `${this.getFullName()}`;

        const bike = document.getElementById(this.id);
        bike.innerHTML = bikeHtml;

    }
}

const fatboy = new Harley("fatboy", 2010, "fatb");

console.log(fatboy.displayBike());


const classA = new Mercedes("A Class", "A", 2010, "Deluxe");
const classS = new Mercedes("S class", "B", 2013, "Exclusive");
const mustang = new Car("Ford", "Mustang", "1969", 1980, "mustang"); // Car Instance
const ford = new Car("ford", "discovery", "1970", 1990, "ford");
const tesla = new Car("Tesla", "Model X", "2010", 2010, "tesla");

const Nissan = new Car("Nissan", "logan", "y series", 2020, "nissan");

//const mustangCont = document.getElementById("mustang")

//mustangCont.innerHTML = mustang.display()


//const teslaCont = document.getElementById("tesla");

//teslaCont.innerHTML = tesla.display();

//const fordCont = document.getElementById("ford");

//fordCont.innerHTML = ford.display();


tesla.display();
ford.display();
mustang.display();
classA.display();
classS.display();

Nissan.display();


