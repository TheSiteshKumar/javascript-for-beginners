// Define an object
// const user = {
//   name: "John",
//   age: 30,
//   city: "Delhi",
// };

// Method 1: Using for...in loop
// console.log("Using for...in:");
// for (let key in user) {
//   console.log("Key:", key);
//   // console.log("Value:", user[key]);
//   console.log("Value:", user.key);
// }

// // Method 3: Just keys or values
// console.log("Keys:", Object.keys(user));
// console.log("Values:", Object.values(user));

// // Method 4: Using Object.entries
// const car = { brand: "Honda", year: 2018 };

// console.log(Object.keys(car)); // ["brand", "year"]
// console.log(Object.values(car)); // ["Honda", 2018]
// console.log(Object.entries(car)); // [["brand","Honda"], ["year",2018]]

// Method 5: Dot and Bracket Notation
// const user = {
//   name: "Ali",
//   age: 25,
//   city: "Delhi"
// };

// console.log(user.name);  // Output: Ali
// console.log(user["age"]); // Output: 25

// const person = {
//   name: "Sitesh",
//   age: 25,
//   city: "Delhi"
// };

// const keys = Object.keys(person); // ['name', 'age', 'city']

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log(key)
//   const value = person[key];
//   console.log(value);

//   // console.log(`key (${key}) : value ("${value}")`);
// }

// Initial object
// let person = { name: "Sitesh", age: 24 };

// console.log("Initial:", person);

// // 1️⃣ Add a new key-value pair
// person.country = "India";
// console.log("After adding country:", person);

// // 2️⃣ Update an existing key’s value
// person.age = 25;
// console.log("After updating age:", person);

// // 3️⃣ Remove a key-value pair
// delete person.country;
// console.log("After removing country:", person);

// // 4️⃣ Add using bracket notation (when key is in a variable)
// let newKey = "hobby";
// person[newKey] = "Coding";
// console.log("After adding hobby:", person);


