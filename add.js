function Sum(a, b) {
  return a + b;
}

function Diff(a, b) {
  return a - b;
}

function Mul(a, b) {
  return a * b;
}

function ArithmeticOperation(a, b, fn) {
  return fn(a, b);
}
const answer = ArithmeticOperation(1, 2, Diff);
console.log(answer);
