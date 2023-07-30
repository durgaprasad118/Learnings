console.log(Math.abs(-4));


console.log(Math.round(3.49));


console.log(Math.ceil(3.001)); //gives the next integer

// floor gives the before integer
console.log(Math.floor(3.4));



// random
/*
Gives between 0 and 1

*/

console.log((Math.random()*10)+1);


// for range

const min =10;
const max =20;

console.log(Math.floor((Math.random()*(max-min+1)))+min);// we add 1 to avoid 0s and in the final we added min becasue at least greater than min is needed



