class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeSound(sound = "somesound") {
    console.log(sound);
  }

  get MetaData() {
    return `Type: ${this.type} legs:${this.legs}`;
  }
  static giveClass() {
    console.log("From static funciton :Animal class");
  }
}

// we an also redefine the values of the instance of the class
let cat = new Animal("cat", 4);
console.log(cat);
cat.makeSound();
console.log(cat.legs);

Animal.giveClass();

console.log(cat.MetaData);
