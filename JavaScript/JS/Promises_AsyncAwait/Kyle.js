let p = new Promise((resolve, reject) => {
  let a = 3 + 1;
  if (a == 2) {
    resolve("Succccessful!!");
  } else {
    reject("Failed");
  }
});

p.then((data) => console.log(data)).catch((er) => console.log(er));
