// async await
//

function DpPromise() {
  let p = new Promise((resolve) => {
    resolve("Hi there");
  });
  return p;
}

function main() {
  DpPromise().then((data) => console.log(data));
}
main();

// using async await keywords
//
//
function DPPROMISE() {
  let p = new Promise((resolve) => {
    resolve("REsseolved");
  });
  return p;
}

async function MAIN() {
  const answer = await DpPromise();
  console.log(answer);
}
MAIN();
