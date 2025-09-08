const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// Using the reduce method
const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(total);``

// for maximum
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
// console.log(max);

// Using the reduce method
const big = numbers.reduce((max, current) => {
  if (max < current) {
    return (max = current);
  }
});
// console.log(big);


// EXAMPLES
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

const output = users.map((x) => x.firstName + " " + x.lastName);

// console.log(output);

const FName30 = users
    .filter(user => user.age < 30)
    .map(user => user.firstName);

// console.log(FName30); 

// Using reduce method with arrow function
const result = users.reduce(function(acc, curr){
    if (curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [ ])
// console.log(result);

const FName = users
    // .filter(user => user.age > 25)
    .map(user => user.firstName);

// console.log(FName); // ["akshay", "donald", "elon", "deepika"]