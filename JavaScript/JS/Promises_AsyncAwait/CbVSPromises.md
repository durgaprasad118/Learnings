## Callbacks, promises, async await

```js
function c1(cb) {
  setTimeout(() => {
    console.log("c1 called");
    cb();
  }, 1000);
}

function c2(cb) {
  setTimeout(() => {
    console.log("c2 called");
    cb();
  }, 1000);
}
function c3(cb) {
  setTimeout(() => {
    console.log("c3 called");
    cb();
  }, 1000);
}

c1(() => {
  c2(() => {
    c3(() => {
      console.log("done all three");
    });
  });
});

function P1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p1 called");
      resolve();
    }, 1000);
  });
}

function P2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p2 called");
      resolve();
    }, 1000);
  });
}

function P3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("p3 called");
      resolve();
    }, 1000);
  });
}

P1()
  .then(() => P2())
  .then(() => P3())
  .then(() => {
    console.log("all threetasks are done");
  });

async function K() {
  await P1();
  await P2();
  await P3();
  console.log("all threetasks are done");
}
K();
```
