## Goal

- Register a user
- Login a user
- Allow him to access the dashboard but after login only

## Information at register

- firstname,lastname, email, password, mobile number

## Login

- email and password

---

## Start

- `npm init -y`
- `npm i express`
- `npm i mongoose`
  - _for connecting to mongodb_
- `npm i jsonwebtoken`
  - _for generation of token_
- `npm i bcryptjs`
  - _for encrypting password_
  - A library to help you hash passwords.
  - specially for js
  - zero dependencies

1.

```js
npm init -y
```

2.

```js
npm i express mongoose jsonwebtoken bcryptjs
```

> Assume you always gonna encounter error and use try catch

### config

- **connect to the database**

```js
const mongoose = require("mongoose");
const MONGODB_URL = "xyz";
// to make it available for other files to use
exports.connect = async () => {
  // url, options
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (er) {
    console.log("DB connection failed");
    console.error(error); // show error
    process.exit(1); // to exit with failed code
  }
};
```

- using `.then`

```js
export const conect = async () => {
  // url, options
  try {
    await mongoose
      .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("connected"));
  } catch (er) {
    console.log("DB connection failed");
    console.error(error); // show error
    process.exit(1); // to exit with failed code
  }
};
```

### model

- **structure (Schema) of database**
- user.js
  - firstname
  - lastname
  - email
  - password
  - token

```js
const mongoose = require("mongoose");
/*
type
validation - min,max, required, unique
*/
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: null,
  },
  lastName: {
    type: String,
    required: true,
    default: null,
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true, //checks in all the collections and says if it is unique or not
  },
  password: {
    type: String, //don't do much here like validation min,max etc
    // bcrypt does it for us
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);
// always stored in mongodb as users (it automatically pluralizes)
// module.exports = mongoose.model("user", userSchema);
export default User;
```

### controller

- **functionality of website happens**
- Routes
  - _/register_
    - collect all info from frontend => req.body
    - validate => if all data exists if not, send a note
    - check if user already exists, if yes , don't proceed
    - Encrypt the password
    - Save to DB and send a key(token)
  - _/login_
    - collect email and password from frontend => req.body
    - validate => if all data exists if not, send a note
    - check if user exists in DB
    - Match the password - password is already encrypted
    - create a key(token) and send (direct or cookie)
  - _/dashborad_
    - check if key exists
    - allow the access else forbidden

```js
// Main file
// start my database
import user from "./model/user.js";
import connect from "./your-module-file.js";
connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// import model -User
const User = require("./model/user.js");

const app = express();
const secret = "12345DP";
app.use(express.json()); //for parsing application/json or to get info from req.body()
app.use(express.urlencoded({ extended: true })); //for parsing aplplication/form

app.get("/", (req, res) => {
  res.send(<h1>Hello Auth System</h1>);
});

app.post("/register", async (req, res) => {
  // req.body is an object by default it is undefined
  // So we first check if it is undefined => if so we throw an error message
  //   database is in other continent so we use async await
  try {
    //collect data from the body
    const { firstName, lastName, email, password } = req.body;
    // validate all the data exists or not

    if (!(firstName && lastName && email && password)) {
      res.status(401).send("All fields are required!");
    }
    // email format correct or not
    function validateEmail(email) {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(email);
    }
    const isValid = validateEmail(email);
    if (!isValid) {
      res.status(401).send("Enter a valid email id");
    }
    // check if user exists in db
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(401).send("User already exists");
    }
    // encrypt the password => bcrypt
    // password will be converted to same long string
    const myEncryptPassword = await bcrypt.hash(password, 10);

    // create a new entry in DataBase
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: myEncryptPassword,
      token,
    });
    // create a token and send to user
    const token = jwt.sign({ id: newUser._id, email: email }, "12345DP", {
      expiresIn: "1h",
    });
    // filling the data not in database
    newUser.token = token;
    // save this in the databse find by id and update
    // User.findByIdAndUpdate()
    // we don't want to send password so
    newUser.password = undefined;
    res.status(200).json(user);
  } catch (er) {
    console.log(er);
    console.log("error is resposne route");
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send("please enter all the details");
    }
    // email format correct or not
    function validateEmail(email) {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(email);
    }
    const isValid = validateEmail(email);
    if (!isValid) {
      res.status(401).send("Enter a valid email id");
    }
    // checking in db
    // const existingUser = await User.findOne({ email: email });
    // if (!existingUser) {
    //   res.status(401).send("User doesn't exist");
    // }

    // match the password

    // method 1. collect from the user and use bcrypt to match
    if (existingUser && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: existingUser._id }, secret, {
        expiresIn: "1h",
      });
      // existingUser also has passsword so we make it undefined
      existingUser.password = undefined;

      // creating a cookie
      // no body can manipulate this cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
      });
    }
    res.sendStatus(404).send("Password is incorrect");
  } catch (er) {
    console.log(er);
    console.log("Falied");
    process.exit(1);
  }
});

app.listen(3000);
```
