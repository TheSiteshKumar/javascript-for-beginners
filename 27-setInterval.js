const id = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log("Stopped!");
}, 1000*60*60);


setTimeout(FName, 2000);

