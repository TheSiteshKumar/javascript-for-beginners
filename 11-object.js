// Define an object
const user = {
    name: "John",
    age: 30,
    city: "Delhi"
  };
  
  // Method 1: Using for...in loop
  console.log("Using for...in:");
  for (let key in user) {
    console.log("Key:", key);
    // console.log("Value:", user[key]);
    console.log("Value:", user.key);
  }
  
  
  // Method 3: Just keys or values
  console.log("Keys:", Object.keys(user));
  console.log("Values:", Object.values(user));
