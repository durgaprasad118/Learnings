function hello(cb) {
  cb("Hello");
}

function callback(x) {
  console.log(x);
}

hello(callback);

//promises
//
function hiFromPromise() {
  return new Promise((resolve) => {
    resolve("Hello from Promise");
  });
}

function printHello(x) {
  console.log(x);
}

hiFromPromise().then(printHello);

// async await
//
function hiFromAsync() {
  return new Promise((resolve) => {
    resolve("Hello from Async function");
  });
}

async function main() {
  const value = await hiFromAsync();
  console.log(value);
}
main();
