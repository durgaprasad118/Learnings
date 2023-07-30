"use strict" //treat all code as newer version


// primitive datatypes => 7
//NNSSBBU => number, null, symbol, string("", '', ``), boolean(true, false), BigInt, undefined

/*
null => standalone value  => special object
undefined => predefined global constant 
symbol => to find uniqueness
falsy values => 0, -0, 0n, null, false, undefined, '', NaN
*/


// typeof null => object
// typeof undefined => undefined
// typeof NaN => number
let num =3;
let name = "dp";
let isLoggedIn = false;
let temperature = null;

console.log(typeof(name));
console.log(typeof name);

let nig = 13n;
// console.log(typeof nig )  //bigint



let symb = Symbol("pi");
console.log(typeof symb);

/*
Reference( non primitive)
arrays, objects, functions
*/ 

console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

let count=0;
console.log(count++);
console.log(count);

let cnt =0;
console.log(++cnt);
console.log(cnt);