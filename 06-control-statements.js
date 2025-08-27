// if (false) {
//   console.log("Hello World");
// } else {
//     console.log("Hello Universe");
// }


let age = 10;

if (age > 18) {
    console.log("You can play video games");
}
else {
    console.log("You cannot play video games");
}



let dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
  console.log("Day 1: Monday");
} else if (dayOfWeek === "Tuesday") {
  console.log("Day 2: Tuesday");
} else if (dayOfWeek === "Wednesday") {
  console.log("Day 3: Wednesday");
} else if (dayOfWeek === "Thursday") {
  console.log("Day 4: Thursday");
} else if (dayOfWeek === "Friday") {
  console.log("Day 5: Friday");
} else if (dayOfWeek === "Saturday") {
  console.log("Day 6: Saturday");
} else if (dayOfWeek === "Sunday") {
  console.log("Day 7: Sunday");
} else {
  console.log("Invalid day entered");
}

// switch (expression) {
//   case value1:
//     // Code to execute if expression matches value1
//     break;
//   case value2:
//     // Code to execute if expression matches value2
//     break;
//   // ... more cases
//   default:
//     // Code to execute if no case matches the expression
//     break;
// }

switch (dayOfWeek) {
  case "Monday":
    console.log("Day 1: Monday");
    break;
  case "Tuesday":
    console.log("Day 2: Tuesday");
    break;
  case "Wednesday":
    console.log("Day 3: Wednesday");
    break;
  case "Thursday":
    console.log("Day 4: Thursday");
    break;
  case "Friday":
    console.log("Day 5: Friday");
    break;
  case "Saturday":
    console.log("Day 6: Saturday");
    break;
  case "Sunday":
    console.log("Day 7: Sunday");
    break;
  default:
    console.log("Invalid day entered");
    break;
}
