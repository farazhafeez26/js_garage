
//map, reduce, push 
// constructor


//const colours = ["blue", "black", "green", "white"];

// const x = ["1", "2", "3", "4"];


//console.log(colours);



//------ create a function in object ---- Encapsulation

const car = {
    brandName: "Ford",
    model: "1995",
    type: "passenger",
    carNammode: function () {
        return this.brandName + " " + this.model;
    }

};

console.log(car.carNammode(car))

// pop, push, concat---------------------------
const colours = ["blue", "black", "green", "white"];

const x = [1, 2, 3, 4];

const y = colours.pop(); // not working or push 

console.log(y);  // concat works



//map, reduce, sort---------------------------

console.log(x.reduce(mySum));

function mySum(acc, sum) {
    {
        return acc + sum;
    };
};


//sort 
console.log(x.sort(mySort));

function mySort(a, b) {
    return a - b;
};



//filter  

const words = ["beat", "apple", "ball"];

function bWords(x) {

    if (x.includes("b")) {
        return true;
    }
    return false;

}


console.log(words.filter(bWords));

// for each / simple


const hobbies = ["tennis_racquet", "squash_racquet", "cricket", "football"];

hobbies.forEach(function printtoconsole(haha) {
    console.log(haha);
});

// --------------

const racquetSport = [];

hobbies.forEach(extractRacquet); // mistake uppercase E


function extractRacquet(sports) {
    if (sports.includes("racquet")) {
        racquetSport.push(sports);
    }
    return false;
};

// ----mapping stuff-------------


let myHobbies = [];

function makeHobbies(sports) {
    return "I love" + " " + sports;
}

myHobbies = hobbies.map(makeHobbies);

console.log(myHobbies);

// ----use reduce-------------

const wordList = ["I", "am", "a", "rockstar", "!"];


function buildThisSentence(acc, sum) {
    return acc + " " + sum;
}

const sentence = wordList.reduce(buildThisSentence);
console.log(sentence);




// Excercise 3 ---------------


const productList = [
    {
        name: "Milk",
        price: 3
    },
    {
        name: "Banana",
        price: 14
    },
    {
        name: "Muffin",
        price: 9
    }
];


function listByprice(a, b,) {
    return a.price - b.price;
}


const sortedProductLIst = productList.sort(listByprice);

console.log(sortedProductLIst);

// filter --------------------

const carList = [
    {
        name: "Mercedes",
        color: "BLUE"
    },
    {
        name: "BMW",
        color: "RED"
    },
    {
        name: "Tesla",
        color: "BLACK"
    },
    {
        name: "Mercedes",
        color: "RED"
    }
];




function filterRedcars(cars) {
    if (cars.color === "Red") {
        return true;
    }
    return false;
}


console.log(carList.filter(filterRedcars)); // what is going on here?


// Range filter

const numberList = [1, 3, 45, 67, 75, 3, 8, 93, 4, 45, 18];

function rangeFilter(arr, a, b) {
    function filterNumber(number) {
        if (number >= a && number <= b) {
            return true;
        }
        return false;
    }

    const filterArray = arr.filter(filterNumber);

    return filterArray;
}


console.log(rangeFilter(numberList, 10, 20));


// sum all the numbers in an array

const sumNumberList = [1, 3, 45, 67, 75, 3, 8, 93, 4, 45, 18];

function sumFunction(arr) {

    const sum = arr.reduce(function (acc, sum1) {   // help!!!!!!!
        return acc + sum1;
    });
    return sum;
}

const range = rangeFilter(sumNumberList, 10, 20);
const sum2 = range.reduce(sumFunction, 0);

console.log(sum2);