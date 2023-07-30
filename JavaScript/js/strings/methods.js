let stringOne = "freeCodeCamp is the best place to learn";
let stringTwo = "frontend and backend develeopment";
//1. charAt() => gives the character at a particular index , if index is undefined then it gives an empty string
//  console.log(stringOne.charAt(500));

//2. charCodeAt() => returns the unicode of the character at  the specified index
// console.log(stringOne.charCodeAt(1));


//3. concat() => joins two or more strings 

let one = "hello";
let two = "world";
let three = one.concat(two,"!");
// console.log(three);

// 4. endsWith() => returns a boolean whether a string ends with a particular string or not
// console.log(stringOne.endsWith("ern"));

// 5. startsWith() => whether string begins with a specific character


console.log(stringOne.startsWith("f"));

// 6. includes() => Checks wheather a string contains a specific string
// we can also add index as a second paramater from there checking happens
let str = "Dogs are the best!";
// console.log(str.includes("Dog"));

// 7. indexOf() => gives the index of the first occurance of the character
// if not present gives -1
// console.log(str.indexOf("r"));

// 8. lastIndexOf()=> gives the last occurance of the character in a string



//*******#**#**#*#** */ 9. match => matching of a string against a regular expression

// console.log(str.match("are"));



// 10. padStart() => we can add padding to  string in beginning so it is equal to certain length 
// by default white spaces are added

let s = "1234";
let answer = s.padStart(10,"*");
// console.log(answer);//******1234



// 11. padEnd()  => we can add padding to the string at end

let ans= s.padEnd(10,"#");
// console.log(ans);//1234######



//12. repeat() => repats the string as many times as specified
let a =s.repeat(3);
// console.log(a);//123412341234




//*##************# 13. replace() => searches for a string or regex and repleces with new one

let S=s.replace(/1/,"7");
// console.log(S);


// 14. search => searches for a specific value or regex and returns the starting match


// 15. toUpperCase() => converts to uppercase
// 16. toLowerCase() => converts to lowercase


// 17. split() => splits at given string or regEx
let msg = "yes you can do it!"
// 1. passing where to split
let arr = msg.split(' ');
// console.log(arr);
// 2. till where
let arr2 = msg.split(" ",2);// splits till 2 only
// console.log(arr2);

// 3.without any arguments=> gives the whole string as an array elemnt in the position 0
let arr3 = msg.split();
// console.log(arr3);

// 4. splitting an empty string gives empty element in array
let hi = "";
let arr4 = hi.split();
// console.log(arr4);


let arr5 =hi.split(" ");
// console.log(arr5);



//18.  join()=> by default uses ,

let arr6=[1,2,3,4];
let joined = arr6.join("  and ");
// console.log( joined);



// 19. slice() =>

/*
extracts a section of string

returns it as a new string without modifying original string
*/


let fullName ="Bro Code";

let firstName;
let lastName;
// lastName =fullName.slice(4);
// firstName=fullName.slice(0,3);//last index is not included
firstName = fullName.slice(0,fullName.indexOf(" "));

lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(`The firstname is ${firstName} and the last name is ${lastName}`);



// 20. substring()

const nameAndAge = "James Quick-31";

console.log(nameAndAge.substring(nameAndAge.indexOf("-"+1)));

let pebble = "abcd";
let cre = pebble.substring(1,2);
console.log(cre);
// 21. trim() => removes all white spaces from the begining and end


let pixel = " hello ";
let gp = pixel.trim();
console.log(gp);

// 22. trimStart() =>removes the whitespaces in the begining 
// 23. trimEnd() => removes the whitespaces in the end of the string




// best way to remove all the white spaces in the string
let fN = " apac h e ";
let anc= fN.replaceAll(" ", "");
console.log(anc);