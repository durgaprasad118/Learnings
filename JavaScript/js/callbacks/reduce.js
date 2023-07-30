const strings = ["nani", "shiva", "dp", "pixcel"];

const reduced = strings.reduce(function (x, y) {
  x = x + y;
  return x;
}, "");
// console.log(reduced);

// average of array

const numbers = [1, 2, 3, 4];
const average = numbers.reduce(function (x, y) {
  x += y;
  return x / numbers.length;
}, 0);
console.log(average);

// filtering using reduce
const fil = numbers.reduce(function (x, y) {
  if (y % 2 == 0) {
    x.push(y);
  }
  return x;
}, []);
console.log(fil);

const mapped = numbers.reduce(function (x, y) {
  x.push(y * 2);
  return x;
}, []);

console.log(mapped);

const duplicates = [1, 1, 2, 3, 2, 5,5,5,5,5];
const ans = duplicates.reduce(function (x, y) {
  if (!x.includes(y)) {
    x.push(y);
  }
  return x;
}, []);
console.log(ans);