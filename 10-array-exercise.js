// 1. Create an array named favoriteFoods
let favoriteFoods = ["pizza", "biryani", "sushi", "ice cream"];

// 2. Add a new food item to the end
favoriteFoods.push("pasta");

// 3. Remove the first item
favoriteFoods.shift();

// 4. Check if "pizza" exists
let hasPizza = favoriteFoods.includes("pizza");
console.log("Has pizza:", hasPizza);

// 5. Create upperFoods array (all UPPERCASE)
let favFoods = ["pizza", "biryani", "sushi", "ice cream", "pasta"];

let upperFoods = [];

for (let i = 0; i < favFoods.length; i++) {
  upperFoods.push(favFoods[i].toUpperCase());
}

console.log("Uppercase Foods:", upperFoods);

// 4 Array questions

let newArr = ["swimming", "eating", "coding", "swimming", "sleeping", "advanture", "swimming"];

let index = newArr.indexOf("coding"); // find the index of coding
console.log("Index of 'coding':", index);

let itemAt3 = newArr[3]; // find the item at index 3
console.log("Item at index 3:", itemAt3);

let isEating = newArr.includes("eating"); // check if eating is included
console.log("Contains 'eating':", isEating);

// Count how many times "swimming" is included and list its indexes
let count = 0;
let indexes = [];

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === "swimming") {
    count++;
    indexes.push(i);
  }
}

console.log("Swimming count:", count);
console.log("Swimming indexes:", indexes);
