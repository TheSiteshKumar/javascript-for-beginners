// Primitive = Immutable --- Cannot be changed
// Non-Primitive (Object, Array, Function) = Mutable -----  Can be changed

// let marks = 97
// marks = 98.6
// marks[0] = 6
// console.log(marks[0]); 

// console.log(marks); // 98.6


// let name = "Rohit "
// name[0] = "M"
// console.log(name)




// let user = {
//     name: "Rohit",
//     age: 24,
//     isActive: true
// }

// user.name = "Mohit"

// console.log(user)
// console.log(user.name)


// ✅ This is reassignment (creating a new value)
// let message = "Hello";
// message = "Hi there";  // Creates new string, doesn't change "Hello"

// ❌ This would be mutation (if it were possible)
// message[0] = "h";  // This doesn't work! Strings can't be mutated
// console.log(message); // Still "Hi there"



let name = "Shadan";
 let newName = name.toUpperCase()
console.log(name); 
console.log(newName); 



let person = {
    name: "Rohit",
    age: 30
};
person.name = "Mohit"; 
person.age = 25;
console.log(person); 