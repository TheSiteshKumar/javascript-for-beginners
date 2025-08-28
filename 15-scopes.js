// Global variable
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible inside a function
}

showGlobal();
console.log(globalVar); // ✅ Accessible outside too


// Local variable
function showLocal() {
  let localVar = "I am local";
  console.log(localVar); // ✅ Works here
}

showLocal();
console.log(localVar); // ❌ ReferenceError: localVar is not defined


// Block scope with let and const
if (true) {
  let blockScoped = "Inside block";
  console.log(blockScoped); // ✅ Accessible here
}
console.log(blockScoped); // ❌ ReferenceError

//  scope with var

if (true) {
  var notBlockScoped = "I ignore block scope";
}
console.log(notBlockScoped); // ✅ Accessible (var is function-scoped, not block-scoped)



// | Type         | Where declared?                  | Accessible in?     | Keyword behavior      |
// | ------------ | -------------------------------- | ------------------ | --------------------- |
// | Global Scope | Outside functions                | Everywhere         | `var`, `let`, `const` |
// | Local Scope  | Inside functions                 | Only that function | `var`, `let`, `const` |
// | Block Scope  | Inside `{}` (with `let`/`const`) | Only that block    | `let`, `const`        |
