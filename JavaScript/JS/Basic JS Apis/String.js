const str = "hello world";
console.log(str.length);

const index = str.indexOf("o");
console.log(index);

const lastIndex = str.lastIndexOf("o");
console.log(lastIndex);

//slice (part between first(incl) and lst(exclueded))
let sliced = str.slice(0, 4);
console.log(sliced);

let value = "harkirat singh";

// the first argument is index and the 2nd argumet is the LENGTH
let sub = value.substr(2, 5); // from 2 5 characters

let slicee = value.slice(2, 5); // 2-5(excluded);

console.log(sub, slicee);

///replace(
// if found replaces => if not gives the same string
const torp = "hello world";
// repalces first match
console.log(torp.replace("o", "O"));
// repalces all matches

console.log(torp.replaceAll("o", "O"));

// split
let s = "hello";
console.log(s.split(""));

//for spaces _ use trim
const vale = "  harkirat   ";
console.log(vale.trim());
console.log(vale.trimStart());
