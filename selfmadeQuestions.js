// function is also object {true or false} ----- false

function fn(){}

// console.log(fn == Object);


// check number or number object

let a = 5;
let b = new Number(5);

console.log(a==b);  // true
console.log(a===b);  // false

// null is object or not ----

const check = typeof null == Object
console.log(check)  // false

// what is type of null

console.log(typeof null);


