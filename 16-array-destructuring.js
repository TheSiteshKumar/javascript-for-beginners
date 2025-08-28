// 1. Array Destructuring
// Array destructuring allows you to unpack values from arrays into separate variables.

const numbers = [10, 20, 30];

// Destructuring
const [a, b, c] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// You can also skip values

const colors = ["red", "green", "blue"];
const [first, , third] = colors;

console.log(first); // red
console.log(third); // blue

// Default values

const nums = [1,3];
const [x, y, z = 100] = nums;

console.log(x); // 1
console.log(y); // 100 (default used)

console.log(nums)


// Swapping variables

let p = 1
let  q = 2;
[p, q] = [q, p];
console.log(p, q);

