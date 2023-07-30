"use strict"
// stack (primitive ), Heap memory(non-primitive)

/*
primitives => original doesnt change (only a copy)
non-primitives => original changes (same reference)
*/ 

let speaker ="pebble";

let b= speaker;//only a copy 

b="creative";//changes b to "creative" and speaker remains same
console.log(speaker);



let user={
    name:"dp",
    age:20,
    email:"dp@ybl"
}

let user2 =user;
user2.name="nani";//changes name to nani in user and user2
console.log(user2);
console.log(user);

let fruits =["apple","banana","grapes"]
let Frt= fruits;
Frt[0]="pineapple";//changes apple in fruits and Frt to pineapple
console.log(fruits);

console.log(Frt);