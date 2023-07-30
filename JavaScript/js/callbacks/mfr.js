const arr = [5, 1, 2, 3, 4];

// for all the values in the array => map

function double(a) {
  return a * 2;
}
function toStr(a) {
  return a.toString(2);
}
const answer = arr.map((x) => {
  return x * 2;
});
// console.log(answer);

// filter => eg all even numbers

const filtered = arr.filter((x) => x % 2 === 0);
// console.log(filtered);

const greater = arr.filter((x) => x >= 4);
// console.log(greater);

// reduce => come up with a single value from the array of values

// find sum, greatest element, smallest element
const ar = [1, 2, 3, 4];

function findSum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(findSum(ar));
const output = ar.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);
const smallest = ar.reduce(function (acc, curr) {
  if (curr < acc) {
    acc = curr;
  }
  return acc;
}, Math.min());
console.log(smallest);

const users = [
  { fN: "akshay", lN: "Saini", age: 26 },
  { fN: "Durga", lN: "Prasad", age: 20 },
  { fN: "Kunal", lN: "kushwaha", age: 26 },
  { fN: "Thalasila", lN: "Bharat", age: 22 },
];

// list of fullnames
const fullNames = users.map((x) => {
  return x.fN + " " + x.lN;
});
console.log(fullNames);


const lessAge = users.filter(x=>x.age<25).map(x=>x.fN);
console.log(lessAge);


