// var is globally scoped
//

if (false) {
  var example = "hello";
}

console.log(example);

// if we use let here
// gives error => answer is not defined cz in tdz
// block scope variable
if (false) {
  let answer = "dp";
}
// console.log(answer);

let a = 1;
a = 2;
console.log(a);

// this gives typeError: assignment to a constant variable
const b = 3;
b = 4;
console.log(b);

// for const primitive types it's only read only defineProperties, );
