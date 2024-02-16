## Sync

- Sequential and one step at a time

## Async

- multi tasking / context switching or delegating tasks

- Even though js is sync we can delegate tasks or context switch using _async functions_
- Some async functions
  - setTimeout
  - setInterval
  - fetch\_ fetching data from some data from api endpoint
  - reading a file ( fs.readFile)

> suppose we have a file read , then a heavy operation it consoles answer

- even if the delegation is complete js waits till the synchronous operataion is done then goes to the async work
- Like kamala didi has waited till the man does the chopping and making maggie though she has brought the ketchup she waited

- what to run next is tracked by event loop

### Event loop

- call stack\_ which line of code is running
- web apis \_ Timer runs here for example setTimeout
- callback queue \_ The delegated tasks waits here
- event loop \_ after the thread is free the thing in callback queue is pushed to the call stack

- No matter what is there in the callback queue it is left waited until the stack is free
- until the thread is idle , the funciton which needs to call the call back waits in the callback queue

## fs

- error first callback
- This is a funciton similar to setTimeout written priorly
- This is not commonly used \_ so whoever needs it imports it

## Promises ( syntaxical sugar that makes the code readable)

- No callbacks passed
- we synchronously get returned the promise not the data
- data comes asynchronously

---

- three states
- pending
- resolve
- reject

- Async await is more sugar coat to promises (under the hoood uses promises and callbacks only) makes it much more readabele

- the funciton that is calling the promise function needs to be `async`
- every await needs to be wrapped inside the async funciton

## call back hell

- nesting of callbacks
- setTimeout insside setTimeout

# callback vs promise

- callback

  - doesn't return anything
  - taakes callback as input

- promises
  - returns a promise
  - does'nt take callback as an input

```js
function hello(callback){

}

// the abovr is same as


function Hello(function{
callback()
})
```
