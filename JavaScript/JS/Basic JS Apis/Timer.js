function printTimer() {
  let date = new Date();
  console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`);
}

setInterval(printTimer, 1000);
