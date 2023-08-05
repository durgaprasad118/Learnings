- [parameters vs arguments](#parameters-vs-arguments)
- [Declaration](#declaration)
- [Expression](#expression)
- [Arrow function](#arrow-function)
- [Pure functions](#pure-functions)
- [IIFE](#iife)
## parameters vs arguments

- parameters

  - we pass in function declaration

- Arguments
  - When we pass the actual value while calling the function

## Declaration

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
