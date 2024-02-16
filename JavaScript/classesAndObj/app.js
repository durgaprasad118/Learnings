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
