let arr = [1, 2, 3, 4, 5];

function transform(x) {
  return x * 2;
}
// if we have a transformation funciton and input array
// we can transform each element of the array using the transformation function
//Map_ applied over each and every element of the array
//returns a new array
//other array methods can be chained
let answer = arr.map(transform);
console.log(answer);

// Map function implementation

function MAP(array, transform) {
  let answer = [];
  for (let i of array) {
    answer.push(transform(i));
  }
  return answer;
}

let nums = [1, 2, 3, 4];
function triple(b) {
  return b * 3;
}

let tripled = MAP(nums, triple);
console.log(tripled);
