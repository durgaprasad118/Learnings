function ps() {
  let n = 1;
  return new Promise((resolve, reject) => {
    n == 2 ? resolve("Yep its 2") : reject("No its not 2");
  });
}

ps()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let arr = [1, 2, 3];

const newArr = arr.map((x) => x * 2);
console.log(newArr);

const even = arr.filter((x) => x % 2 == 0);
console.log(even);
