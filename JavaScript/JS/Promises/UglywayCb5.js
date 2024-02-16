const fs = require("fs");

function Dpreadsfile(cb) {
  fs.readFile("b.txt", "utf-8", (err, data) => {
    cb(data);
  });
}

function Display(data) {
  console.log(data);
}

Dpreadsfile(Display);
