// // 🔹 Beginner Level Functions

// // 1. Write a function sayHello() that prints "Hello World" when called.
// function sayHello() {
//   console.log("Hello World");
// }
// sayHello();

// // 2. Create a function greetUser(name) that takes a name and prints "Welcome, [name]!".
// function greetUser(name) {
//   console.log("Welcome, " + name + "!");
// }
// greetUser("Sitesh");
// greetUser("Priya");
// // 3. Write a function doubleNumber(num) that returns double of the number given.
// function doubleNumber(num) {
//   return num * 2;
// }
// console.log(doubleNumber(4));
// console.log(doubleNumber(10));

// // 4. Make a function subtract(a, b) that returns the result of a - b.
// function subtract(a, b) {
//   return a - b;
// }
// console.log(subtract(10, 5));
// console.log(subtract(20, 7));

// // 5. Write a function square(num) that returns the square of a number.
// function square(num) {
//   return num * num;
// }
// console.log(square(5));
// console.log(square(8));

// // 1. Function to print numbers from 1 to n
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// printNumbers(5);

// // 2. Function to check if a number is even or odd
// function isEvenOrOdd(num) {
//   if (num % 2 === 0) {
//     console.log(num + " is even.");
//   } else {
//     console.log(num + " is odd.");
//   }
// }

// isEvenOrOdd(10);
// isEvenOrOdd(7);

// // 3. Function to print all even numbers between 1 and n
// function printEvenNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// printEvenNumbers(10);

// 1. Function to return the sum of an array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4]));

// 2. Function to return the maximum number
function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(maxArray([3, 7, 2, 9, 5]));

// 3. Function to print all even numbers in an array
function countEven(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }

  return even;
}

// console.log(countEven([1, 2, 3, 4, 6, 11, 17, 31, 20]));

function twoDigit(kuchhBhi) {
  for (let i = 0; i < kuchhBhi.length; i++) {
    if (typeof kuchhBhi[i] === "number") {
      console.log(kuchhBhi[i]);
    }
  }
}

twoDigit(["jajfh", "gagf", "ghafhg", 1, 22, 3, 44, 55, 666, 7, 88, 9999, true]);




// 4. Function to reverse an array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// 5. Function to remove duplicates from an array
function removeDuplicates(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// 1. Function to return string length
function stringLength(str) {
  let count = 0;
  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }
  return count;
}

// 2. Function to count vowels
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// 3. Function to capitalize first letter of each word
function capitalizeWords(sentence) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (capitalizeNext && char !== " ") {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === " ") {
      capitalizeNext = true;
    }
  }

  return result;
}

// 4. Function to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 10
// 9
//  // 3
// console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// console.log(stringLength("Hello")); // 5
// console.log(countVowels("javascript")); // 3
// console.log(capitalizeWords("hello world from sitesh")); // "Hello World From Sitesh"
// console.log(reverseString("hello")); // "olleh"
