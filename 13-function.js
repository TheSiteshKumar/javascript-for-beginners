// 🔹 Introduction to Functions in JavaScript

// A function in JavaScript is a block of code designed to perform a specific task.
// You can define it once and then use it many times.

// ✅ Why use functions?

// To reuse code (don’t repeat yourself).
// To organize logic into small parts.
// To make code more readable and maintainable.

// ✅ Basic Syntax
function functionName(parameters) {
  // code to be executed
}

// Example

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Sitesh"); 
greet("Priya");

// ✅ Function with Return Value
function add(a, b) {
  return a + b; 
}

let sum = add(5, 3);
console.log(sum); 


// 🔹 Beginner Level Functions

// 1. Write a function sayHello() that prints "Hello World" when called.
function sayHello() {
  console.log("Hello World");
}
sayHello();

// 2. Create a function greetUser(name) that takes a name and prints "Welcome, [name]!".
function greetUser(name) {
  console.log("Welcome, " + name + "!");
}
greetUser("Sitesh");
greetUser("Priya");
// 3. Write a function doubleNumber(num) that returns double of the number given.
function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(4));
console.log(doubleNumber(10));

// 4. Make a function subtract(a, b) that returns the result of a - b.
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 5));
console.log(subtract(20, 7));


// 5. Write a function square(num) that returns the square of a number.
function square(num) {
  return num * num;
}
console.log(square(5));
console.log(square(8));


// 1. Function to print numbers from 1 to n
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
printNumbers(5); 

// 2. Function to check if a number is even or odd
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
}

isEvenOrOdd(10);
isEvenOrOdd(7);

// 3. Function to print all even numbers between 1 and n
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(10);

