const fetchData = () => {
  const answer = fetch("https://fakestoreapi.com/products/1");
  answer.then((result) => result.json()).then((data) => console.log(data));
};

fetchData();

// using async awit

async function dataFetch() {
  let response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();
  console.log(data);
}

dataFetch();
