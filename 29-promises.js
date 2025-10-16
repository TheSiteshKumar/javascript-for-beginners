// Createing a new Promise

// let a = {
//     new : function(resolve, reject) {
//         console.log("new called")
//     }
// }

// let jsClass =new Promise((res, rej)=>{

// })

const myPromise = new Promise((resolve, reject) => {
  const result = true;

  if (result) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

// Consuming the Promise

myPromise
  .then((a) => {
    console.log("Success:", a);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Finally");
  });




  quetion 


// step 1: create a promise 
// step 2: assign a variable ( let balance = 1000; )
// step 3: widhraw amount as input ( let withdrawAmount = 200; )
// step 4: if yes resolve the promise with message "You can withdraw money"
// step 5: if no reject the promise with message "Insufficient balance"
// step 6: consume the promise using then and catch to log the message to console 
// step 7: use finally to log "Transaction completed" and also print balance after withdrawl if successfull