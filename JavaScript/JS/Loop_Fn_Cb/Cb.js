//We can call one funciton inside the other

function square(n) {
  return n * n;
}

function sumofSquares(a, b) {
  return square(a) + square(b);
}

console.log(sumofSquares(2, 3));

//you are also given cube funciton so we can do as below

function cube(a) {
  return a * a * a;
}

function Todo(fn, a, b) {
  return fn(a) + fn(b);
}

//if i ineed sum of sumofSquares

console.log(Todo(square, 2, 3));
