- [parameters vs arguments](#parameters-vs-arguments)
- [Declaration or Statement](#declaration)
- [Expression](#expression)
- [Arrow function](#arrow-function)
- [Pure functions](#pure-functions)
- [IIFE](#iife)
- [First Class funcions](#first-class-funcions)
## parameters vs arguments

- parameters

  - we pass in function declaration

- Arguments
  - When we pass the actual value while calling the function

## Declaration aka Statement

```js
function func() {
  console.log("Hey dp!");
}
```

## Expression

```js
const fun = function () {
  console.log(`This is a function expression`);
};
```
 ### Major difference between statement and expression is in hoisting
   - In the memory creation phase statement is normal function and whole fun body is attached to it
   - where as  expression it is treated as normal variable and undefined is attached to it
## Anonymous Function
- function without name
```js
function(){
}
```
## Named function exrpession
```js
let b = function xyz(){
    console.log("b called");
}

b();//b called
xyz();// reference error : xyz not defined
```
## Arrow function

```js
const sub = (a, b) => {
  return a - b;
};
```

- If arrow function is done in one line we can remove the curly braces and return statement

```js
const mul = (a, b) => a * b;
```

- If arrow function is one line and only one parameter then braces and return

```js
const one = (x) => x * 4;
```

## Pure functions

- If input is same it gives same output
- It should not change the value of a global variable
```js
function greet(name) {
  return `hello ${name}`;
}
console.log(greet("Dp"));
```

## IIFE

```js
// iife => imediatly invoked function expression
// executes right after it is defined
(function () {
  console.log(`IIFE`);
})();
```
## First Class funcions aka first class citizens
- We can assign a function to a varible
- You can pass a function as a argument
- You can return a function from a function
```js
// Example 1: Assigning a function to a variable
function sayHello(name) {
  return `Hello, ${name}!`;
}

let greeting = sayHello; // Assign the sayHello function to the 'greeting' variable
console.log(greeting("John")); // Output: Hello, John!

// Example 2: Passing a function as an argument
function add(a, b) {
  return a + b;
}

function operate(a, b, operation) {
  return operation(a, b);
}

let result = operate(3, 4, add); // Pass the 'add' function as an argument
console.log(result); // Output: 7

// Example 3: Returning a function from a function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = createMultiplier(2); // Returns a function that doubles the input
console.log(double(5)); // Output: 10
```
