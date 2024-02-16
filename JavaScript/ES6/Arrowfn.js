const lunchMenu = (food) => {
  console.log(`The lunch menu is ${food}`);
};

//default params
const breakfast = (tiffin = "idly") => console.log(`breakfast is ${tiffin}`);

const dinner = (staters, main) =>
  console.log(`starter is ${staters} and main course is ${main}`);

lunchMenu("Biryani");
breakfast();
dinner("prawn", "mutton");

const goToShop = (item = "something") =>
  console.log(`I'm going to buy ${item} from the grocery shop`);

goToShop("milk");
