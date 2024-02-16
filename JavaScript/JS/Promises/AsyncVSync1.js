function findSum(n) {
  let answer = 0;
  for (let index = 0; index < n; index++) {
    answer += index;
  }
  return answer;
}
function findSumTillHundered() {
  console.log(findSum(100));
}
// setTime(); is an async function which delegates task

setTimeout(findSumTillHundered, 100);
console.log("Hello world");
