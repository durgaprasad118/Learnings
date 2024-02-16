const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("This is FIrst");

// prom

function FileRead() {
  const answer = new Promise((resolve) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      resolve(data);
    });
  });
  return answer;
}

function Log(data) {
  console.log(`This is the data that is from the promise :${data}`);
}

FileRead().then(Log);

// using async await

async function main() {
  const answer = await FileRead();
  console.log(`This is the data that is from the promise :${answer}`);
}

main();
