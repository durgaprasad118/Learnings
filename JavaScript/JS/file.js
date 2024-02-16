let date = new Date();

console.log(
  date.toLocaleDateString("en-US", {
    weekday: "long",
  }),
);

console.log(
  date.toLocaleDateString("en-US", {
    month: "long",
  }),
);

console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
