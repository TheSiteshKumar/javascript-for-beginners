// onClick event listener
let myButton = document.querySelector("#myButton")

myButton.addEventListener("click", ()=> {
    myButton.style.backgroundColor = "red"
  console.log("Button clicked!");
});

// // onBlur event listener
// document.getElementById("myInput").addEventListener("blur", function () {
//   console.log("Input lost focus!");
// });

// // onChange event listener
// document.getElementById("mySelect").addEventListener("change", function () {
//   console.log("Selection changed!");
// });

// // onFocus event listener
// document.getElementById("myInput").addEventListener("focus", function () {
//   console.log("Input gained focus!");
// });

// // setTimeout example
// setTimeout(function () {
//   console.log("This message appears after 2 seconds!");
// }, 2000); // 2000 milliseconds = 2 seconds

// // setInterval example
// setInterval(function () {
//   console.log("This message appears every 3 seconds");
// }, 3000); // 3000 milliseconds = 3 seconds