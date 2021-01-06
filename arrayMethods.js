const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const alphabet = ["A", "B", "C"];
const [a, b, ...rest] = alphabet;

console.log(rest);

//https://www.youtube.com/watch?v=R8rmfD9Y5-c
//https://docs.google.com/spreadsheets/d/1SZVNfIRqIJ3k_CbiRZPGG-MnGc0OVVL5Hm1DkrkiMy8/edit#gid=0
//practice filter, map, for each, find,reduce, includes
const itemNames = items.forEach((item) => {
  console.log(item.name);
});

console.log(itemNames);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("you must type something here");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
}

function outputItems() {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}
console.log(outputItems());

function useX() {
  for (x of items) {
    console.log(x);
  }
}
console.log(useX());

function printMynumber(y) {
  return y / y;
}

console.log(printMynumber(5));

//Sum

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = array[i] + total;
  }
  return total; // total has been already calculated why do we need to return it.
}

console.log(sum([2, 3])); // Is this because of the array data type

function max(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= maxValue) {
      maxValue = array[i];
    }
    return maxValue;
  }
}
console.log(max([5, 6, 2]));

function longestword(string) {
  let maxValue = 0;
  let longest = "";
  let words = string.split(" "); //?
  for (let i = 0; i < words.length; i++) {
    if (words[i] > maxValue) {
      //wordsi is a string how can a string be greater than a number?
      longest = words[i];
      maxValue = longest.length;
    }
    return longest;
  }
}

console.log(longestword("sieze the day"));

//???????? doesnt work

function remove(array, element) {
  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      finalArray.push(array[i]);
    }
    return finalArray;
  }
}

console.log(remove([1, 2, 3, 3, 4, 4], 4));

//???????? doesnt work

function even(array) {
  let finalArray = [];

  for (let i = 0; i < array[i]; i++) {
    if (array[i] % 2 === 0) {
      finalArray.push(array[i]);
    }
    return finalArray;
  }
}
