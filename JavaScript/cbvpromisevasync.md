```js
function fetchdt(cb) {
  setTimeout(() => {
    let daata = "dp";
    cb(daata);
  }, 1000);
}

fetchdt((x) => {
  console.log(x);
});

function fetchUsingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "dp";
      resolve(data);
      // reject("error");
    }, 1000);
  });
}

fetchUsingPromise()
  .then((x) => console.log(x))
  .catch((er) => console.log(er))
  .finally(() => console.log("done"));

async function fetchUsingAsync() {
  try {
    const response = await fetchUsingPromise();
    console.log(response);
  } catch (er) {
    console.log(er);
  }
}

fetchUsingAsync();
```
