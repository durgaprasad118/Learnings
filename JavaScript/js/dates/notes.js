// getTime gives time in milliseconds from 1st january 1970
//  date.now also gives the milliseconds from 1st jan 1970
// all starts form 0
/*
days => 0-6
month => 0-11
hour => 0 -23
minutes => 0-59
second => 0- 59
date => (1-31)
*/ 
// human readable format of date


let now = new Date();
let year = now.getFullYear();
let date = now.getDate();
let month = now.getMonth()+1;
let hr = now.getHours();
let min= now.getMinutes();
console.log(`${date}/${month}/${year} ${hr}:${min}`);




