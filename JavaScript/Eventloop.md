## Interview

### Event Loop

- Example

```js
let a = 20;

setTimeout(() => {
    a++;
    console.log(`First setTimeout value is ${a}`);
}, 2000);

setTimeout(() => {
    a++;
    console.log(`Second setTimeout value is ${a}`);
}, 1000);

console.log(`Synchronous value is ${a}`);
```

1. first `a` is created
2. Then it encounters first setTimeOut which is Asynchronous the the timer is set to 2sec
3. Then it encounters second setTimeOut which is Asynchronous the the timer is set to 1sec
4. It goes to the Synchronous console statement line and consoles it
5. After that call stack is empty as soon as the timer finishes the 1s (i.e., second callback is pushed to callback queue)
6. Event loop constantly checks if callstack is empty and if it is then pushes the first thing in the callback queue
7. Meanwhile the 1st timeout expires and pushes to the callback queue and sends to the call stack and executed accordingly
