let a = new Promise((resolve) => resolve("Hello from promise"));

function showOnterminal(d) {
  console.log(d);
}

a.then(showOnterminal);

let p = new Promise((resolve) => resolve("immediately resolved"));

p.then((data) => console.log(data));
