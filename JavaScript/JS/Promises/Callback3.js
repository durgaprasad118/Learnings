function sum(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumofsmt(a, b, fn) {
  return fn(a) + fn(b);
}

const answer = sumofsmt(1, 2, sum);
console.log(answer);
