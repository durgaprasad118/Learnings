let myDate = new Date();
// typeof myDate is object

// console.log(myDate.toString());//gives complete info

// console.log(myDate.toDateString());//gives=> day, month, date, year

// console.log(myDate.toLocaleString());//gives => date/month/year, time

let myCreateDate = new Date(2002,7,11);

let mycreate = new Date("08-11-2002");//mm/dd/yyyy
// console.log(mycreate.toString());



let myTimeStamp = Date.now();


let birthday = new Date("08-11-2002");
console.log(birthday.toDateString());
console.log(myDate.toDateString());


// console.log(birthday);

