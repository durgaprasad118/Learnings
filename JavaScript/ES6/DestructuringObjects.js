const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
    home: {
      hN: 3,
    },
  },
};
/*
 *
 *const{a,b}= object , destructuring objects
const {a:one,b:two}= object, renaming varibles
default values {a,b,c="three"}= object , default values if the value isn't present in the object the default value is returned
rest (in the end only) => if we need first and second and the rest of the values can be destructured to rest operator
swapping the values [a,b]=[b,a] array destructuring
we can destructure function

 *
 *
 * */
const {
  name,
  club: ClubName,
  address: {
    home: { hN: houseName },
  },
} = player;
//normal destructuring
console.log(name);

// renaming the destructured variable

console.log(ClubName);

//nested destructuring

console.log(houseName);
