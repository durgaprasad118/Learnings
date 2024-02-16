function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function dosmt(fn, a, b) {
  return fn(a) + fn(b);
}

console.log(dosmt(cube, 1, 2));
