// Callback hell or pyramid of doom => refers to a situation in async programming where multiple nested callbacks whose results depend on each other => make code dif to read, maintain , handle errorrs, and understand
//  the code is hard to refactor and also hampers in reusibility





const promise = new Promise((resolve, reject) => {
  // asynchronous operation
  //  call resolve(value) when the operation succeds
  //  call reject(error) when the operation fails
});

// a promise may have one of these three states
// pending => it is the initial state of a promise it means async operation is still going on and promise is neither fulfilled nor rejected
// fulfilled => async operation completed and promise is resolved with a value
//  rejected => async operation has encountered an error and promise is rejected with an error reason

// we use promise.then() and catch() to handle promise results with a callback in them and .finally() is always executed no matter resolved or rejected

/*
new Promise(executor)
state: pending          => result("done")=> state: fulfilled
result : undefined                           result: done




new Promise(executor)
state: pending          => result("error")=> state: rejected
result : undefined                           result: error



*/

// chaining => adding promise to another
// if we encounter any error it is shown in the end or we can write error block using , as shown in prom2 using callback

// const prom1 = doSomething();

// const prom2 = prom1.then(succesCallback, failureCallback);

// example

let exampleTask = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

exampleTask.then(function Succesvalue1(result) {
  console.log(result);
});

/*

example 1:=> promise that resolves a random number if it is < 0.5

promise.then(() => {}).catch(() => {}); // handling promise

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rndm = Math.random();
    if (rndm < 0.5) {
      resolve(rndm);
    } else {
      reject(new Error("promise rejected!"));
    }
  }, 2000);
});

prom
  .then((val) => {
    console.log(val);
  })
  .catch((er) => {
    console.log(er);
  });
*/

/*
//example 2 => a promise that resolves the boolean

const count = true;

const countValue = new Promise((resolve, reject) => {
  count
    ? resolve("The count value is true")
    : reject("the count value is false");
});

console.log(countValue);

countValue
  .then((val) => {
    console.log(val);
  })
  .catch((x) => {
    console.log(x);
  });

  */
