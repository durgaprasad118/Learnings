const date = new Date();
//month is 0 indexed so do +1
console.log(date.getMonth() + 1);

console.log(date.getFullYear());

console.log(date);
console.log(date.getTime()); // since 1970 time in milliseconds

function sum() {
  let answer = 0;
  for (let index = 0; index < 1000000; index++) {
    answer += index;
  }
  return answer;
}

// claculate the  time taken for the function to execute
let before = new Date().getTime();

sum();
let after = new Date().getTime();

console.log(after - before);
