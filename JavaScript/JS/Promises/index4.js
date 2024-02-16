const fs = require("fs");
// file system module
fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Hello synchronously");

let a = 0;
for (let i = 0; i < 10000000; i++) {
  a++;
}
console.log("step 2 after a heavy task");
