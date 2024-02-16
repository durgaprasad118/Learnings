let arr = [1, 2, 3, 4, 5];
// gives the first occurance of the target if not -1
console.log(arr.indexOf(1));

// includes give true or false wheather the element is present or not
//
console.log(arr.includes(0));
console.log(arr.includes(4));

/*
 ** includes() Challenge
 * You want to make a chocolate cake
 * And you have a list of ingredients represented with an array
 * Using the JavaScript includes() function
 * Check if you have the ingredient chocolate in your
 * list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
 * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
 */

const listIngredients = ["flour", "sugar", "eggs", "butter"];

if (listIngredients.includes("chocolate")) {
  console.log("we can make a chocolate");
} else {
  console.log("we can't make a chocolate");
}

listIngredients.includes("chocolate")
  ? console.log("we can make a chocolate")
  : console.log("we can't make a chocolate");
