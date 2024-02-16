let arr = [1, 2, 3];
let answer = arr; // refeerence of  arr
let unpushed = [...arr]; // formed by actual values of arr
arr.push(4);
console.log(answer);
console.log(unpushed);

// also used for concatenation

// can be same for concatenation of arrays and objects also
//

const shoppingList = ["eggs", "milk", "butter"];
