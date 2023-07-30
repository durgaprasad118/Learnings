// singleton => when formed with constructor

// object literals

// keys are treated as strings


const mySymbol= Symbol("key1")
const user = {
  name: "durga Prasad",
  age: 20,
  email: "durgaprasad@gmail.com",
  Location: "Hyderabad",
  isLoggedIn: false,
  [mySymbol]:"key1",//adding symbol
  LastLoginDays: ["Monday", "Saturday"],
};

console.log(user.name);
console.log(user["email"]);
console.log(user[mySymbol]);





user.greeting = function(){
    console.log("hello user!");
}
console.log(user.greeting());


user.greet = function(){
    console.log(`Hello user ${this.name}`);
}

user.greet()