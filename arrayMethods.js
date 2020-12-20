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
