// setTimeout(() => {
//   console.log("First after 1s");
//   setTimeout(() => {
//     console.log("second hello");
//     setTimeout(() => {
//       console.log("third after 3 seconds");
//     }, 3000);
//   }, 2000);
// }, 1000);

// this can be got rid by

function promisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

let a = 1112;

//calling
// promise chaining
// promisified(1000)
//   .then(() => {
//     console.log("1st one called");
//     return promisified(2000);
//   })
//   .then(() => {
//     console.log("2nd one called");
//     return promisified(3000);
//   })
//   .then(() => {
//     console.log("Third one called");
//   });

async function main() {
  let firstanswer = await promisified(1000);
  console.log("Promise resolvedd after 1 sec");
  let secondAnswer = await promisified(2000);
  console.log("promise resolved after 2 sec after the 1st one is resolved");

  let thirdAnswer = await promisified(3000);
  console.log("Promise resolved after 3 seconds after the 2nd one is resolved");
}
main();
