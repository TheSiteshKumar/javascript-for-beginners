// 🔹 Introduction to Functions in JavaScript

// A function in JavaScript is a block of code designed to perform a specific task.
// You can define it once and then use it many times.

// ✅ Why use functions?

// To reuse code (don’t repeat yourself).
// To organize logic into small parts.
// To make code more readable and maintainable.

// ✅ Basic Syntax
// function functionName(parameters) {
//   // code to be executed
// }

// // Example

// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// greet("Sitesh"); 
// greet("Priya");

// // ✅ Function with Return Value
// function add(a, b) {
//   return a + b; 
// }

// let sum = add(5, 3);
// console.log(sum); 


// function declearation

function sayHi(){
    console.log('hello');
}
sayHi();


// function expression
let sayHello = function(){    // anonymous function
    console.log('hello');
}

sayHello();



let sayBye= function something(){    // named function
    console.log('bye');
}

sayBye();



// Arrow function
let getInfo= ()=>{
    console.log('this is an arrow function');
}

getInfo();
