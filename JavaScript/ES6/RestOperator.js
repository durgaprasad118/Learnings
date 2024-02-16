function addNumbers(...nums) {
  let a = 0;
  for (const i of nums) {
    a += i;
  }
  return a;
}
// used when how many numbers are given through input and
console.log(addNumbers(1, 2, 2, 4, 5));
