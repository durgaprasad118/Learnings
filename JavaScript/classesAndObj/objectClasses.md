```js
// Objects

const student = {
  name: "dp",
  age: 20,
  marks: 94,
  printMarks: function () {
    console.log(this.marks); // 94
    console.log(this.name); // dp
    console.log(this.age); // 20
  },
};

const student2 = {
  name: "karan",
  marks: 98,
};
// the inbuilt functions are because of the prototype of object
// To set some custom we can use `__proto__`
student2.__proto__ = student;

console.log(student2.printMarks());
// this gives
// 98
// karan
// 20 from the student object
```

## Classes

```js
// template for creating similar objects
class Car {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  halt = function () {
    console.log("hello");
  };
  // this belongs to car class
  setBrand(brand) {
    this.brandName = brand;
  }
}

// new - create a new object through the class
let fortuner = new Car();

fortuner.setBrand("toyota");
console.log(fortuner); // Car{brandName:"toyota",halt:f()}
```

### constructor

- automatically invoked by new

```js
class Car {
  // wehenver new keyword is hit constructor is invoked
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
  }
}

const a = new Car("maruthi", 10);
console.log(a); //Car {brand: 'maruthi', mileage: 10}
```

## Inheritence

```js
// methods and properties of parent are passed to child
// If child and parent has same methods => child Method is called (METHOD OVERRIDIHNG)

class Parent {
  hello() {
    console.log("parent hello ");
  }
  start() {
    console.log("parent started");
  }
}

class Child extends Parent {
  hello() {
    console.log("child hello");
  }
}

let a = new Child();

a.hello(); // child hello
a.start(); // parent started
```

### Super

```js
class Person {
  constructor(name) {
    console.log("parent constructor invoked");
    this.species = "homosapeians";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch, name) {
    console.log("child constructor invoked");
    super(name); // to invoke parent class constructor
    this.branch = branch;
    console.log("child constructor exit");
  }
  work() {
    super.eat(); // for accessing eat function in Parent use super.xyz
    console.log("mechanical work");
  }
}

let dp = new Engineer("mechanical", "durga prasad");
// BEFORE USING this we need to call super
// child constructor invoked
// parent constructor invoked
// child constructor exit
//
//
//
//If the constructor in parent needs to have an argument then pass via super()
```

### question

```js
/*
  Question: Create a class with name and email .
  It also has viewData method that  allows you to see the data
*/
let data = "loremepusm";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log(data);
  }
}

// const user1 = new User("durga", "durga@gmail.com");
// console.log(user1);

class Admin extends User {
  editData(new_data) {
    data = new_data;
    console.log(data);
  }
}

const admin1 = new Admin("durga", "durag@gamail.com");
```
