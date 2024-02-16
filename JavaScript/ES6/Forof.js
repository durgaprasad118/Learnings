let incomes = [1, 2, 3, 4];
let total = 0;
for (const i of incomes) {
  total += i;
}

console.log(total);

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];

for (const i of students) {
  console.log(`${i.name} lives in ${i.city}`);
}
