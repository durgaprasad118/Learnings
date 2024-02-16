function addressMaker(state, city) {
  const newAdress = { state, city };
  console.log(newAdress);
}
// if key is same as the value then => we need not write Key:values(
// we can write just key => that gives the desired value
// );

addressMaker("Telangana", "Hyderabad");

function adress(adress) {
  const { city, state } = adress;
  const newAdress = {
    city,
    state,
  };

  console.log(newAdress);
}

adress({ city: "Hyd", state: "Telanaga" });
