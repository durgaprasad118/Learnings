function Pr(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

Pr(1000).then(() => {
  console.log("Hello there");
});

async function main() {
  const answer = await Pr(1000);
}

// we don't expect callbacks here
