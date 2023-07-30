// resizable, zero-based, array copy => shallow copying =>properties share same reference as that of source from which the copy is made


const arr =[1,3,4,5];


const arr1= new Array(1,2,3,4);
console.log(arr1[0]);


// methods

// 1. push (original array modified)
arr.push(10);
console.log(arr);

// 2.pop() (original array modifies)
let popped=arr.pop();//we can store the popped element 
console.log(popped);
console.log(arr);


// 3. unshift() //=> adds element to the array in the starting position
arr.unshift(0);
console.log(arr);

// 4. shift() // => removes the first element

let shifted=arr.shift();
console.log(shifted);
console.log(arr);




// 5. includes() returns boolean


// 6. indexOf() => gives number if present gives index else gives -1


// 7.join() => joins elements to string with specified joiner
let arr2=[1,2,3,4];
let arr3= arr2.join("");
console.log(arr3);




// slice() Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array

let myn1 =["hello","hi","bye","gn"];
let answer = myn1.slice(1,4);
console.log(answer);
console.log(myn1);
// splice()


let myn2 = myn1.splice(1,3);
console.log(myn2);
console.log(myn1 );




// spread

let a1 =["dairy","book"];
let b1 = ["pencil","pen"];
let f1 =["keyboard"]
let c1= a1.concat(b1,f1);
console.log(c1);


let d1= [...a1,...b1];
console.log(d1);


// flat(Infinity(kitne depth tak jaana hai))
let unflated =[1,2,3,[4,5],[6,7,[8,9]]];
let flat = unflated.flat(Infinity);
console.log(flat);

// checking array

console.log(Array.isArray("hitesh"));