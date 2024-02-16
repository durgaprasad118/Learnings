let arr = [];
//adding to the last of the array => we can add any nuber of elements to the arrray end
arr.push(1, 2, 3);
console.log(arr);
// returns the popped value and removes the last value of the array
let popped = arr.pop();
console.log(arr);
console.log(popped);
// adding elment to the start of the array unlike push
arr.unshift(5);
console.log(arr);

// removing the first element like pop
let firstremove = arr.shift();
console.log(firstremove);
console.log(arr);

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9];
// we can concat any number of arrays
let answer = a.concat(b, c);
console.log(answer);

let concat = [...a, ...b, ...c];
console.log(concat);

// Iteration

let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

function logIt(i) {
  console.log(i);
}
// forEach takes a cb function applies it alover the array
array.forEach(logIt);

function a1() {
  console.log("a function called");
}

function b1() {
  console.log("b function called");
}

function whatToLog(fn) {
  fn();
}

whatToLog(b1);

let arr1 = ["a", "b", "c"];

arr1.forEach((x) => console.log(x.toUpperCase()));
