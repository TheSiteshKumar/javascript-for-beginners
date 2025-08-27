
// An array is a container that holds multiple values
// Think of it like a list or a box with numbered slots

// Creating arrays - different ways
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["hello", 42, true, null];
let emptyArray = [];

let abc= [1,"string",true, ["nested", "array"], {key: "value"}];

console.log("Fruits array:", fruits);
console.log("Numbers array:", numbers);
console.log("Mixed array:", mixedArray);
console.log("Empty array:", emptyArray);

// Array length - how many items are in the array
console.log("Length of fruits array:", fruits.length);
console.log();

// ============================================
// LESSON 2: ACCESSING ARRAY ELEMENTS
// ============================================



// Arrays use INDEX numbers starting from 0
// Index:  0        1         2
let colors = ["red", "green", "blue"];

console.log("First color (index 0):", colors[0]);
console.log("Second color (index 1):", colors[1]);
console.log("Third color (index 2):", colors[2]);
console.log("Last color (using length-1):", colors[colors.length - 1]);

// What happens if we access a non-existent index?
console.log("Non-existent index:", colors[10]); // undefined
console.log();

// ============================================
// LESSON 3: MODIFYING ARRAYS
// ============================================


let animals = ["cat", "dog", "bird"];
console.log("Original animals:", animals);

// Change an element
animals[1] = "elephant";
console.log("After changing index 1:", animals);

// Add element at specific position
animals[3] = "fish";
console.log("After adding at index 3:", animals);
console.log();

// ============================================
// LESSON 4: ESSENTIAL ARRAY METHODS

// ============================================
// 4A: ADDING ELEMENTS
// ============================================

console.log("🔸 Adding Elements:");

let students = ["Alice", "Bob"];
console.log("Original students:", students);

// push() - adds to the END
students.push("Charlie");
console.log("After push('Charlie'):", students);

// unshift() - adds to the BEGINNING
students.unshift("David");
console.log("After unshift('David'):", students);
console.log();

// ============================================
// 4B: REMOVING ELEMENTS
// ============================================

console.log("🔸 Removing Elements:");

let cities = ["Paris", "London", "Tokyo", "Sydney"];
console.log("Original cities:", cities);

// pop() - removes from the END and returns it
let removedCity = cities.pop();
console.log("After pop():", cities);
console.log("Removed city:", removedCity);

// shift() - removes from the BEGINNING and returns it
let firstCity = cities.shift();
console.log("After shift():", cities);
console.log("First city removed:", firstCity);
console.log();

// ============================================
// 4C: FINDING ELEMENTS
// ============================================

console.log("🔸 Finding Elements:");

let grades = [85, 90, 78, 92, 88];
console.log("Grades:", grades);

// indexOf() - finds the index of an element
console.log("Index of 90:", grades.indexOf(90));
console.log("Index of 100 (not found):", grades.indexOf(100)); // -1

// includes() - checks if element exists
console.log("Does array include 78?", grades.includes(78));
console.log("Does array include 100?", grades.includes(100));
console.log();



// ============================================
// 4D: ARRAY INFORMATION
// ============================================

console.log("🔸 Array Information:");

let scores = [95, 87, 92, 78, 85];
console.log("Scores:", scores);

// length - number of elements
console.log("Number of scores:", scores.length);

// join() - converts array to string
console.log("Scores as string:", scores.join(", "));
console.log("Scores with ' - ':", scores.join(" - "));
console.log();

// ============================================
// LESSON 5: PRACTICAL EXAMPLES
// ============================================

console.log("📚 LESSON 5: Practical Examples");
console.log("-------------------------------");

// Example 1: Shopping Cart
console.log("🛒 Shopping Cart Example:");
let cart = [];
console.log("Empty cart:", cart);

// Add items
cart.push("laptop", "mouse", "keyboard");
console.log("After adding items:", cart);

// Remove last item
let lastItem = cart.pop();
console.log("Removed:", lastItem);
console.log("Cart now:", cart);

// Check if item exists
console.log("Has mouse?", cart.includes("mouse"));
console.log();

// Example 2: Student Grades
console.log("📊 Student Grades Example:");
let studentGrades = [85, 92, 78, 96, 88];
console.log("All grades:", studentGrades);

// Find passing grades (>= 80)
let passingGrades = studentGrades.filter(grade => grade >= 80);
console.log("Passing grades:", passingGrades);

// Add bonus points to all grades
let bonusGrades = studentGrades.map(grade => grade + 5);
console.log("Grades with bonus:", bonusGrades);

// Find highest grade
let highestGrade = Math.max(...studentGrades);
console.log("Highest grade:", highestGrade);


// ============================================
// LESSON 6: QUICK REFERENCE
// ============================================


// console.log("📝 Array Creation:");
// console.log("   let arr = [1, 2, 3];");
// console.log("   let arr = new Array(1, 2, 3);");


// console.log("📝 Common Methods:");
// console.log("   arr.push(item)     - add to end");
// console.log("   arr.pop()          - remove from end");
// console.log("   arr.unshift(item)  - add to beginning");
// console.log("   arr.shift()        - remove from beginning");
// console.log("   arr.length         - get array size");
// console.log("   arr.indexOf(item)  - find item index");
// console.log("   arr.includes(item) - check if item exists");
// console.log("   arr.join(separator)- convert to string");


// ------------Array constructor-------------

let arr = []
arr.push(1)
arr.push(2)
console.log(arr)


let arr2 = new Array(1,3,5)

console.log(arr2)