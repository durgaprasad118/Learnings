//when we need to send data we store in toString()
//

const users = '{"name": "Harkirat", "age":2}';
console.log(users.name); // this is a string => undefined

const user = JSON.parse(users);
console.log(user.name);

const str = JSON.stringify(user);
console.log(typeof str); // string

// Stringify => converts to Stringify
// // parse => converts string to js object

// Stringigy => for passing data to some other Sources
// Parse => for parsing data that is coming from some server
