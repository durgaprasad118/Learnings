let arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log(sum);

const max = arr.reduce((acc, curr) => {
  acc = curr > acc ? curr : acc;
  return acc;
}, Math.max());

console.log(max);

const min = arr.reduce((acc, curr) => {
  acc = curr < acc ? curr : acc;
  return acc;
}, Math.min());

console.log(min);

// count the frequencies
let nums = [1, 1, 1, 3, 4];

let frequencies = arr.reduce((acc, curr) => {
  acc[curr] ? acc[curr]++ : (acc[curr] = 1);
  return acc;
}, {});
