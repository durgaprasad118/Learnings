const arr = [1, 2, 3, 4, 5, 6];
// filter even numbers

function isEven(n) {
  return n % 2 === 0;
}

const filteredArray = arr.filter(isEven);
console.log(filteredArray);

// implementation
//
function FILTER(array, transform) {
  let answer = [];
  for (let i of array) {
    transform(i) && answer.push(i);
  }
  return answer;
}

const answer = FILTER(arr, isEven);
console.log(answer);
