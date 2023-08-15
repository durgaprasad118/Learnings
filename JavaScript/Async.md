
## Synchronous

- Default behavior of JavaScript code
- Each statement is executed one after the other in sequential order
  - **line by line execution**
- Single Threaded
  - Executes one statement at a time
  - One thread of execution

## Execution context

- executes one line of code at a time
- Each operation waits for the last one to complete before executing

## Blocking code

- blocks the flow of program
- **Order pizza and after its arrival call friend**
- Synchronous

## non blocking code

- doesn't block the execution
- **Order pizza and call a friend**
- Asynchronous

## Best

- For reading files etc.. _Async is best_
- Depends on the use case the best is confirmed

## Synchronous JS

- Default behavior of JavaScript code
- Each statement is executed one after the other in sequential order

## Asynchronous JavaScript (can delegate tasks)

- It is a technique that enables your program to start a potentially long-running task and be able to be responsive to other events while that task runs, rather than waiting until the task is finished. Once it is done the result is shown.
- How to find `async js`

  1.  `setTimeout`
  2.  `setInterval`
  3.  `promises`
  4.  `fetch`
  5.  `axios`
  6.  `XMLHttpRequest`

- **Need**
  - Sometimes our final code is dependent on the some other server, we don't know when we will get the data from that server. In order to avoid this blocking our code,`we use async js` which gives answer whenever we get that data from the server
    - Mostly used when we don't know how much time does it take to get the answer, whenever received do the task

```js
setTimeout(() => {
  console.log("Hello after 2seconds");
}, 2000);
console.log("Synchronous code");
//solution
// Synchronous code
// Hello after 2seconds
```

- Firstly it goes to setTimeout() and it is async operation so it sends to web API and meanwhile the control goes to the next task
- It may take a lot of time (2nd task) even then after second task one is done
- the first task waits in callback queue till 2 finishes the execution

```js
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
```

## Promise

- The `promise object` represents the eventual completion(or failure) of an asynchronous operation and its resulting value

```js
let answer = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  if (num > 5) {
    return resolve();
  } else {
    return reject();
  }
});
answer
  .then(() => {
    console.log("Answer got vro");
  })
  .catch(() => {
    console.log("Ugh nooooooooooooooooooo");
  });
```

## Interval

- setInterval(fn,timer,parameter)

## API

- Gives two things
  1. Protocol
  2. What data to send and receive

# Promises

- **Promise is an object representing the eventual completion or failure of an asynchronous operation**
- Three states
  1. Pending
  - it is the initial state of a promise it means async operation is still going on and promise is neither fulfilled nor rejected
  2. fulfilled
  - async operation completed and promise is resolved with a value
  3. rejected
     - async operation has encountered an error and promise is rejected with an error reason
