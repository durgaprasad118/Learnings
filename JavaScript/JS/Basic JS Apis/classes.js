class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  // this static is associated with particular class
  static myType() {
    console.log("Animal type");
  }
  speak() {
    console.log(" hi there" + this.speaks);
  }
}

let dog = new Animal("dog", 4, "bow bow");

dog.speak();

Animal.myType();
