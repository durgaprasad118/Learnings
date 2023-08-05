- [Primitives - _Stack Memory_](#primitives---stack-memory)
- [Non Primitives Reference {(),{},\[\]} - _Heap Memory_](#non-primitives-reference----heap-memory)
- [Conversions](#conversions)
- [Switch Case](#switch-case)
- [Ternary - WTF](#ternary---wtf)
- [Math and Number](#math-and-number)
## Primitives - _Stack Memory_

```js
NNSSBBU - number, null, Symbol, String("", "", ``), boolean, BigInt, undefined;
/*
   null => standalone value  => special object
   undefined => predefined global constant 
   symbol => to find uniqueness
   falsy values => 0, -0, 0n, null, false, undefined, '', NaN
   */

// typeof null => object
// typeof undefined => undefined
// typeof NaN => number
let num = 3;
let name = "dp";
let isLoggedIn = false;
let temperature = null;

console.log(typeof name);
console.log(typeof name);

let nig = 13n;
// console.log(typeof nig )  //bigint

let symb = Symbol("pi");
console.log(typeof symb);

/*
   Reference( non primitive)
   arrays, objects, functions
   */

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number
```

## Non Primitives Reference {(),{},[]} - _Heap Memory_

- whatever written using the brackets
- If we copy we only get the reference but not the actual copy of the value is `non-primitive`
- Original can be changed by the copy
- I and Bharat have same remote (mera aur bharat ka) => I destroyed it, then it is also destroyed for Bharat
- `In order to copy`

```js
"use strict";
// stack (primitive ), Heap memory(non-primitive)

/*
primitives => original doesnt change (only a copy)
non-primitives => original changes (same reference)
*/
let speaker = "pebble";
let b = speaker; //only a copy
b = "creative"; //changes b to "creative" and speaker remains same
console.log(speaker);

let user = {
  name: "dp",
  age: 20,
  email: "dp@ybl",
};
let user2 = user;
user2.name = "nani"; //changes name to nani in user and user2
console.log(user2);
console.log(user);

let fruits = ["apple", "banana", "grapes"];
let Frt = fruits;
Frt[0] = "pineapple"; //changes apple in fruits and Frt to pineapple
console.log(fruits);
console.log(Frt);
```

## Conversions

```js
let score = "33";
// try for null and undefined=> Number() => null gives 0 and undefined gives NaN
// to get all the requried in a specific datatype we convert them to desired

/*
- if string doesnt contain number it gives NaN
- if first digit is not number it gives NaN
- if it contains spaces followed by digits it gives digits
- gives digits till they are not disturbed by other characters 
*/

// converting string to number
// 1.) using Number(enter string here)
let valueInNumber = Number("d4");
console.log(
  `the value is ${valueInNumber} and its type is ${typeof valueInNumber}`
);

// 2.) using ParseInt(string,base)

let valueInInt = parseInt("", 10);
console.log(valueInInt);

// 3.
let val = parseFloat("5f4");
console.log(val);

// 4. using "+" infront of string that contains number => else NaN, empty gives 0, space gives number
let answer = +" 4";
console.log(answer);

// 5. multiply with number

let mul = "" * 1; //string that contains number => else NaN, empty gives 0, space gives number
console.log(mul);

//6. using ~~
let nu = ~~"4sda";
console.log(nu);

// converting number to string
let number = 55;
let toString = String(number);
console.log(typeof toString);
// addition of strings and numbers
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// JavaScript is a dynamically typed language. This means that the type of a variable is not known until runtime
```

## Switch Case

```js
let num = 5;
switch (num) {
  case 1:
    console.log("yes it is 1");
    break;
  case 2:
    console.log("it is 2");
    break;
  case 3:
    console.log("it is 3");
    break;
  case 5:
    console.log("yesss");
    break;

  default:
    console.log("Enter valid");
}
```

## Ternary - WTF

- What is the condition ? True : False

```js
let isRaining = true;
isRaining ? console.log("Take umberella") : console.log("no need");
```

## Math and Number

- To get a range of Numbers

```js
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```
