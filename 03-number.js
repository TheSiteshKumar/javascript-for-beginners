// console.log("Welcome to JavaScript Numbers!");


// // Creating numbers
// let age = 25;           
// let price = 19.99;      
// let temperature = -5;   

// console.log("age =", age);
// console.log("price =", price);
// console.log("temperature =", temperature);














// // 2. NUMBERS vs STRINGS

// let numberAge = 25;      
// let stringAge = "25";    

// console.log("numberAge:", numberAge, "- Type:", typeof numberAge);  
// console.log("stringAge:", stringAge, "- Type:", typeof stringAge);  



// console.log("5"+ 2)
// console.log("5"- 10) 
// console.log("50"/ 2) 
// console.log(50 - "2" ) 
// console.log(typeof NaN)
// console.log(NaN + 1)

// console.log("Can we do math with numberAge?", numberAge + 5);
// console.log("What happens with stringAge?", stringAge + 5);














// // 3. BASIC MATH OPERATIONS

// let num1 = 10;
// let num2 = 3;

// console.log("Addition:", num1 + num2);
// console.log("Subtraction:", num1 - num2);
// console.log("Multiplication:", num1 * num2);
// console.log("Division:", num1 / num2);
// console.log("Remainder (modulo):", num1 % num2);



















// // 4. CONVERTING STRINGS TO NUMBERS


// let stringNumber = "42";
// console.log("Original string:", stringNumber, "- Type:", typeof stringNumber);

// // Method 1: Number() function
// let converted1 = Number(stringNumber);
// console.log("Using Number():", converted1, "- Type:", typeof converted1);

// // Method 2: parseInt() for whole numbers
// let converted2 = parseInt(stringNumber);
// console.log("Using parseInt():", converted2, "- Type:", typeof converted2);

// // Method 3: parseFloat() for decimal numbers
// let decimalString = "3.14";
// let converted3 = parseFloat(decimalString);
// console.log("Using parseFloat():", converted3, "- Type:", typeof converted3);
// console.log();















// // 5. IMPORTANT NUMBER METHODS

// let pi = 3.14159;
// console.log("Original number:", pi);

// toFixed() - rounds to specific decimal places
// console.log("2 digit after the decimal point:", pi.toFixed(2)); // 3.14 
// console.log("No digits after the decimal point:", pi.toFixed(0));   // 3














// Example 1: Calculate age from birth year
// let currentYear = 2025;
// let birthYear = 1995;


// 
// let calculatedAge = currentYear - birthYear;
// console.log("If you were born in", birthYear, "you are", calculatedAge, "years old");














// Example 2: Calculate discounted price
let MRP = 999;
let discountPercent = 9.99;

let discountAmount = MRP * (discountPercent / 100);
let finalPrice = MRP - discountAmount;
console.log("Original price: " + MRP);
console.log("Discount: " + discountPercent + "%");                
console.log("Final price: " + finalPrice.toFixed(2));





// console.log("Final price: $" + finalPrice.toFixed(2));




