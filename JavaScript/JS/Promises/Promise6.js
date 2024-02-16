const fs = require("fs");

function DpfileRead() {
  return new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
}

function display(data) {
  console.log(data);
}

let promiseReturn = DpfileRead();
promiseReturn.then(display);
