let score ="33"
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
console.log(`the value is ${valueInNumber} and its type is ${typeof valueInNumber}`);

// 2.) using ParseInt(string,base)

let valueInInt =parseInt("",10)
console.log(valueInInt);

// 3.
let val = parseFloat("5f4");
console.log(val);

// 4. using "+" infront of string that contains number => else NaN, empty gives 0, space gives number 
let answer = +" 4";
console.log(answer);

// 5. multiply with number

let mul = "" *1; //string that contains number => else NaN, empty gives 0, space gives number 
console.log( mul );

//6. using ~~
let nu = ~~"4sda";
console.log(nu);


// converting number to string


let number = 55;
let toString = String(number);
console.log(typeof toString);













// addition of strings and numbers


console.log("1"+2);
console.log(1+"2");
console.log("1"+2 +2);
console.log(1+2+"2");

// JavaScript is a dynamically typed language. This means that the type of a variable is not known until runtime



