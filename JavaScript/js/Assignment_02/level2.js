// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof "10");//type is string

let modified = Number("10");
console.log(modified===10);
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'));

// Generate a random number between 0 and 100 inclusively.


let max;
let min;
max =100, min= 50;
// Generate a random number between 50 and 100 inclusively.
// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

max = "JavaScript".length-1;
min =0;

let answer = Math.floor(Math.random()*(max-min+1))+min;
console.log("JavaScript"[answer]);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'



let string ='You cannot end a sentence with because because because is a conjunction';


let index1 = string.indexOf("because")
let index2 = string.indexOf("is")
let ans = string.substring(index1, index2-1)
console.log(ans);