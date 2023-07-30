const radius = [1, 2, 3, 4];
const area = function (r) {
  return Math.PI * r * r;
};
const circumference = function (r) {
  return Math.PI * 2 * r;
};

const calculate = function (arr, lgc) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(lgc(arr[i]));
  }
  return answer;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));

console.log(radius.map(area));
