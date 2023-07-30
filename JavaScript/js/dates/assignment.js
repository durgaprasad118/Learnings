let now = new Date();

// What is the year today?
let year = now.getFullYear();
console.log(year);
// What is the month today as a number?
let month = now.getMonth()+1;
console.log(month);
// What is the date today?
let date = now.getDate();
console.log(date);
// What is the day today as a number?
let day = now.getDay()+1;
console.log(day);
// What is the hours now?
let hr = now.getHours();
console.log(hr);
// What is the minutes now?
let min = now.getMinutes();
console.log(min);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let time = now.getTime();
console.log(time);

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hr}:${min}`);
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm



// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05


if(hr<10){
    hr= '0'+hr;
}
if(min<10){
    min= '0'+min;
}
console.log(`${year}-${month}-${day} ${hr}:${min}`);
console.log(hr);
console.log(min);