class Car {
    // Car Class
    constructor(brand, name, model, year, color, vehicleType, image) {
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.vehicleType = vehicleType;
        this.image = image;

    }

    // methods
    getAge() {
        return new Date().getFullYear() - this.year;
    }

    // methods
    getFullName() {
        return this.brand + " " + this.name + " - " + this.model;
    }

    buildHtml() {
        const htmlToDisplayCar = `
                <div class="car-container" style="background-color:${this.color}">
                    <h3>${this.getFullName()}</h3>
                    <h4>Age: ${this.getAge()}<h4>
                    <h4>Year: ${this.year}<h4>
                    <h4>Model: ${this.model}</h4>
                    <h4>Vehicle Type: ${this.vehicleType}</h4>
                    <img src= ${this.image} style="width:200px;">
                    
                <div>
            `;
        return htmlToDisplayCar
    }

    display() {




        // create an element
        const carCont = document.createElement("div");
        // carCont.classList.add("car-container");

        // add content to it
        carCont.innerHTML = this.buildHtml();

        // place it in the DOM -- html
        document.getElementById("car-list").appendChild(carCont)

    }
}

class Mercedes extends Car {
    constructor(name, model, year, color, vehicleType, image) {
            super("Mercedes", name, model, year, color, vehicleType, image); // Call the constructor
            this.brandSuffix = "Benz";
        }
        // methods
    getFullName() {
        // const carName = super.getFullName(); // Car.getFullName()
        return this.brand + " " + this.brandSuffix + " " + this.name;
    }
}




class Harley extends Car {
    constructor(model, year, color, vehicleType, image) {
        super("Harley", "Davidson", model, year, color, vehicleType, image);
    }
    getFullName() {
        return this.model + " " + this.year + " is cool";
    }

    displayBike() {
        // const bikeHtml = `${this.getFullName()}`;

        const bike = document.getElementById(this.id);
        bike.innerHTML = this.buildHtml();

    }
};








const classA = new Mercedes("A Class", "A", 2010, "#845EC2", "compact", "A class.jfif");
const classS = new Mercedes("S class", "B", 2013, "#D65DB1", "compact", "S class.jfif");
const mustang = new Car("Ford", "Mustang", "1969", 1980, "#008F7A", "Sports", "Mustang.jfif"); // Car Instance
const ford = new Car("ford", "discovery", "1970", 1990, "#FFC75F", "sedan", "Ford.jfif");
const tesla = new Car("Tesla", "Model X", "2010", 2010, "#FF6F91", "jeep", "Tesla.jfif");
const fatboy = new Harley("fatboy", 2010, "#FF6F91", "bike", "Fatboy.jfif");
const Nissan = new Car("Nissan", "logan", "y series", 2020, "silver", "compact", "Nissan.jfif");
const toyota = new Car("Camry", "series x", null, 2020, "brown", "sedan");
const Maserati = new Car("Maserati", "quatro porte", 2020, null, "blue");

// add 10 more brands
const Honda = new Car("Honda", "Civic", "Deluxe Edition", 2020, "#2C4251", "Passenger");
const Suzuki = new Car("Honda", "Civic", "Deluxe Edition", 2020, "#B6C649", "Truck");
const Porsche = new Car("911", "A", "Deluxe Edition", 2020, "#C1C1C1", "SportsCar");
const Lambo = new Car("Aventador", "A", "Deluxe Edition", 2020, "#FFD5FF", "SportsCar");
const VW = new Car("Aventador", "A", "Deluxe Edition", 2020, "#B47EB3", "Hatchback");
const Hyundai = new Car("Accent", "A", "Basic Edition", 2020, "#8BB8A8 ", "SUV");
const Isuzu = new Car("Basic", "A", "Basic Edition", 2020, "#0B7189", "Minivan");
const BMW = new Car("7series", "A", "Basic", 2020, "#0B7189", "Van");
const Subaru = new Car("Forrester", "A", "Basic", 2020, "#9C95DC", "SportsCar");
const Tata = new Car("Faltroz", "A", "Basic", 2020, "49D49D", "SportsCar");
//const mustangCont = document.getElementById("mustang")

//mustangCont.innerHTML = mustang.display()


//const teslaCont = document.getElementById("tesla");

//teslaCont.innerHTML = tesla.display();

//const fordCont = document.getElementById("ford");

//fordCont.innerHTML = ford.display();

/*
fatboy.displayBike();
tesla.display();
ford.display();
mustang.display();
classA.display();
classS.display();
Nissan.display();
 
*/
const cars = [fatboy, tesla, ford, mustang, classA, classS, Nissan]

cars
    .sort(function sortByName(a, b) {
        return a.year - b.year;
    })
    .forEach(function displayCars(car) {
        car.display();
    })



// Add an input field - y
// Add a submit botton
// Attach an action to the button
// Add 10 more cars of different brands
// Add a type property to car:"sedan" .... https://www.caranddriver.com/shopping-advice/g26100588/car-types/
// Add a image property to the class --> disaply the car image