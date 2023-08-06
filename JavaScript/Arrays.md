# Arrays
- [Declaration](#declaration)
- [from](#from)
- [Add remove](#add-remove)
- [Loops](#loops)
- [Map - for entire array](#map---for-entire-array)
- [filter - for filtering the array](#filter---for-filtering-the-array)
- [reduce](#reduce)
- [some](#some)
- [every](#every)
- [find](#find)
- [forEach](#foreach)
- [concat](#concat)
- [slice()](#slice)
- [Splice(start,noof delte?, what to add)](#splicestartnoof-delte-what-to-add)
- [fill](#fill)
- [findIndex](#findindex)
- [flat](#flat)
- [reversing array](#reversing-array)
- [sort](#sort)
- [Spread and rest](#spread-and-rest)


## Declaration

```js
let arr = [];
let arr1 = new Array();
```

- Any type of data can be stored in array
- To check whether given is array or not `Array.isArray(arr)`
- To get the length of the array `arr.length`

## from 
- to get arrays from iterable objects
```js
const unique = Array.from(new Set(arr));//set to array
```
## Add remove

- `arr.push(4)` adds element to the end of the array
- `arr.pop()` removes the last element of the array
- `arr.unshift()` adds element to the start of the array
- `arr.shift()` removes the starting element of the array

## Loops

```js
for (let a of arr) {
  console.log(a); //apple banana cherry
}

for (let a in arr) {
  console.log(a); //0,1,2
}
```

## Map - for entire array

- returns a new array which takes a callback function

```js
arr.map((item, index, array) => {
  return item;
});
```

## filter - for filtering the array

- give a condition inside the callback
- the condition can be on item or index

```js
const answer = arr.filter((x, i) => {
  return x.includes("p");
});
```

## reduce

- accumulator, item, index, array

```js
const sum = arr.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);
```

## some

- same as filter but it returns only true or false
- if there is even one element it returns true

```js
const some = arr.some((x) => {
  return x.includes("z");
});
```

## every

- checks every item satisfies the given condition
- if yes returns true else false

```js
const every = arr.every((x) => {
  return x.includes("a");
});
```

## find

- returns the first element satisfying the condition otherwise gives undefined

```js
const find = arr.find((x) => {
  return x.includes("p");
});
```

## forEach

- doesn't give new array

```js
arr.forEach((x) => {
  console.log(x.toUpperCase());
});
```

## concat

- joins two arrays we can use any number of arrays in the second parameter to join

```js
let arr = ["apple", "banana", "acherry"];
let nums = [1, 2, 3];
let concated = arr.concat(nums, 5);
console.log(concated);
//[ 'apple', 'banana', 'acherry', 1, 2, 3, 5 ]
```

## slice()

- `returns new array`
- we need only certain part of the array
- takes two parameters (first,last)
- last parameter is excluded

```js
const newArr = arr.slice(0, arr.length);
```

## Splice(start,noof delte?, what to add)

- `does inplace`

```js
let arr = ["apple", "banana", "acherry"];
arr.splice(0, 1, "mango");
console.log(arr);
// [ 'mango', 'banana', 'acherry' ]s
```

## fill

- two parameters (what to fill,from where)
- `inplace`

```js
let arr = ["apple", "banana", "acherry"];
arr.fill("smt", 1); //from 1st index it replaces all with 'smt'
console.log(arr);
//[ 'apple', 'smt', 'smt' ]
```

## findIndex

- finds the first index of the desired element if not found -1
- `takes callback`

```js
const index = arr.findIndex((x) => {
  return x === "banana";
});
```

## flat

- removes the nested arrays and returns a single array

```js
array.flat(numberof levels);
```

## reversing array

- reverses the array
  ```js
  arr.reverse();
  ```

## sort 
- takes a comparison function
- Ascending order
```js
let sorted = arr.sort((a, b) => {
  return a - b;
});
```
- Descending order
```js
let sorted = arr.sort((a, b) => {
  return b-a;
});
```














## Spread and rest

- for copying arrays

```js
let answer = [...arr]; //spread
```

- To get the paramters in the function `rest ` is used

