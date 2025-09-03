const numbers = [1, 2, 3, 4, 5]; // [1,8, 27, 64, 125 ]

// // Double each value
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

let square = numbers.map((i) => {
  return i * i;
});

console.log(square);
console.log(numbers);

const users = [
  { id: 1, name: "Rohit" },
  { id: 2, name: "Abhi" },
  { id: 3, name: "Sameer" },
];

let names = users.map(user =>  user.name);

console.log(names);
