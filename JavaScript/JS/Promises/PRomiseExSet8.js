function dpset() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

let answer = dpset();
answer.then(() => console.log("done"));

// the above using normal callbacks
//
//

function DPSET(cb) {
  setTimeout(cb, 1000);
}

function dosmt() {
  console.log("DONE");
}

DPSET(dosmt);
// it forms pyrmaid like this
function doom() {
  setTimeout(() => {
    console.log("DOOOOMMMM");
  }, 1000);
}

doom();
