console.log("Hello start");

setTimeout(() => {
  console.log("FIrst st");
  setTimeout(() => {
    console.log("Second st");
  }, 1000);
}, 1000);

console.log("hello last");
