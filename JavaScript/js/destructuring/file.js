let person={
    name:"dp",
    age:18
}
// accesing objects 
// let {name,age}=person;
// console.log(name);
// console.log(person.name)
// console.log(age);



// renaming values

let {name:fullName, age:vayas}=person;
console.log(fullName);
console.log(person);



//destruct a propety that doesnt exist => gives undefined

let {name,age,location}=person;
console.log(location);


let user={
    firstName:"Sonny",
    lastName: "Sangha",
    // Age: 28
    mN: "dp"
}

let {firstName,lastName, Age:currentAge=20,mN=""}= user;
console.log(currentAge );



// array destructuring

let arr =[1,2,3];
let [x,y,z]=arr;
console.log(x,y,z);


// spread => assigns remaining values to a single variable
// at the end only
// 

let names =["dines","bharat","raj","dp"];
let [a,...b]=names;
console.log(a);
console.log(b);


// destructing function

// a function may return an obj