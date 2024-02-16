let obj = {
  key1: "dp",
  key2: "mac",
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
//converts  Object to array
console.log(Object.entries(obj));

const array = Object.entries(obj);
console.log(array);

const objBack = Object.fromEntries(array);
console.log(objBack);

//chekcing if particular key is there or not
console.log(obj.hasOwnProperty("key1"));

let newObj = Object.assign({}, obj, { newProp: "new Value" });
console.log(newObj);
let abc = {
  k: "get",
  c: "put",
};
let obj1 = { ...obj, ...abc };
console.log(obj1);
