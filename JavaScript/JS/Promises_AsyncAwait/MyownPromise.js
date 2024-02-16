function Myst(fn, timer) {
  setTimeout(fn, timer);
}

Myst(() => {
  console.log("Hollllllaaaa");
}, 1000);
