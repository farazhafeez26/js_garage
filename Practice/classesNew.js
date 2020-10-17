class Car {
    // Car Class
    constructor(brand, name, model, year, color) {
        this.brand = brand;
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;

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
    constructor(name, model, year, color) {
        super("Mercedes", name, model, year, color); // Call the constructor
        this.brandSuffix = "Benz";
    }
    // methods
    getFullName() {
        // const carName = super.getFullName(); // Car.getFullName()
        return this.brand + " " + this.brandSuffix + " " + this.name;
    }
}




class Harley extends Car {
    constructor(model, year, color) {
        super("Harley", "Davidson", model, year, color);
    }
    getFullName() {
        return this.model + " " + this.year + " is cool";
    }

    displayBike() {
        // const bikeHtml = `${this.getFullName()}`;

        const bike = document.getElementById(this.id);
        bike.innerHTML = this.buildHtml();

    }
}





const classA = new Mercedes("A Class", "A", 2010, "#845EC2");
const classS = new Mercedes("S class", "B", 2013, "#D65DB1");
const mustang = new Car("Ford", "Mustang", "1969", 1980, "#008F7A"); // Car Instance
const ford = new Car("ford", "discovery", "1970", 1990, "#FFC75F");
const tesla = new Car("Tesla", "Model X", "2010", 2010, "#FF6F91");
const fatboy = new Harley("fatboy", 2010, "fatb", "white");
const Nissan = new Car("Nissan", "logan", "y series", 2020, "silver");
const toyota = new Car("Camry", "series x", null, 2020, "brown");
const Maserati = new Car("Maserati", "quatro porte", 2020, null, "blue");

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
    }
    )



// Add an input field
// Add a submit botton
// Attach an action to the button
// Add 10 more cars of different brands
// Add a type property to car:"sedan" .... https://www.caranddriver.com/shopping-advice/g26100588/car-types/
// Add a image property to the class --> disaply the car image 