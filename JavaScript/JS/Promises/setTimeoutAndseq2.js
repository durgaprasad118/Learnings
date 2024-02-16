setTimeout(() => {
  console.log("Hello from setTimeout");
}, 0);
let a = 0;
for (let i = 0; i < 100000; i++) {
  a++;
}

console.log("Hello from sync");
