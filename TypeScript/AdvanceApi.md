```ts
interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

// suppose i have the user details in the above format now if i want to write a update function
//which only updates name and password
//1. i can create one more Type
//2. use the above type and create some easier one which solely depends oon the above User
//3. changing the above updates the below thing so we need not worry to change types

//picking some properties from the User.
//can pick from interface or type
type UpdatedProps = Pick<User, "name" | "password">;

function sumofAge(user1: User, user2: User): number {
  return user1.age + user2.age;
}

function UpdateUser(user: UpdatedProps) {
  console.log(user.name, user.password);
}

//  Partial
// when we want to make types or inerface optional

//{
// name?:string,
// password?:String
// }
type UpdatedOptionalProps = Partial<UpdatedProps>;

// we cannot re-assign the const reference variables {} \ []
// we change the values inside the refernce variable that are in the heap memory
// the thing is we cannot assign it to a new array or obj

//3. Readonly
// the properties can't be changed they can be read only
// if you try to change typescript complains
// USECASE: some config fields should not be updated
type UsernameProps = {
  name: string;
  readonly age: number;
};
// or we can just declare type or Interface
// Readonly<User>
const userName: UsernameProps = {
  name: "hello",
  age: 21,
};

// Record and Map
// object of objects

type UserObj = {
  id: number;
  username: string;
};

type UsersObj = {
  [key: string]: UserObj;
};
// instead of the ugly syntax above we can do this
type UsersObjeRECORD = Record<string, UserObj>;
const users: UsersObjeRECORD = {
  abc: {
    id: 1,
    username: "dp",
  },
  "@asdf": {
    id: 22,
    username: "hola",
  },
};

//map
type User = {
  name: string;
  age: number;
};
const users = new Map<string, User>();

users.set("hello", { name: "dp", age: 20 });
users.set("hello1", { name: "dp1", age: 21 });
const answer = users.get("hello");
console.log(answer);

//exclude

//similar to pick but opposite => let's you exlude types

type EventType = "scroll" | "click" | "mousemove";

type EventsOne = Exclude<EventType, "scroll">;

const handleEvent = (e: EventsOne) => {
  console.log(e);
};

// handleEvent("scroll")// complains
handleEvent("mousemove"); //OK
```

## zod and infer

```js

import { z } from 'zod'
import express from 'express'
// run Time zod
const app = express()
app.use(express.json())

const UpdateProfileSchema = z.object({
  name: z.string().min(1, { message: 'too short' }),
  email: z.string().email({ message: 'invalid email' }),
  age: z.number().min(18, { message: 'Must be >18years' }).optional(),
})

app.put('/usr', (req, res) => {
  const { success } = UpdateProfileSchema.safeParse(req.body)
  //getting the types from the zod validation
  const updatedBody: z.infer<typeof UpdateProfileSchema> = req.body
  if (!success) {
    return res.json({
      success: false,
      message: 'Not updated',
    })
  }
  // update the db here
  res.json({
    success: true,
    message: ' updated user successfully',
  })
})
```



## Generics

## Need and Syntax

```js
function ConvertToArrayNumber(x: number): number[] {
  return [x]
}

function ConvertToArrayString(x: string): string[] {
  return [x]
}

function ConvertToArrayBool(x: boolean): boolean[] {
  return [x]
}

//we find a common pattern here
// we need to establish a realtion between input and the return type
// the below is a generic Type
function ConvertAny<T>(x: T): T[] {
  return [x]
}
const ConvertToAnyType = <T>(x: T): T[] => {
  return [x]
}
const num = ConvertAny < number > 5
console.log(num)

const str = ConvertAny < string > 'dp'
console.log(str[0].toUpperCase())

```
```js
// return the index of the given target, given an array

const arr1 = [1, 2, 4, 5]
const arr2 = ['a', 'b', 'CD', 'EF']

function GetIndex<T>(arr: T[], target: T): number {
  return arr.findIndex((x) => x === target)
}

const Indexx = <T>(arr: T[], target: T): number => {
  return arr.findIndex((x) => x === target)
}
// console.log(GetIndex(arr1, 2))
// console.log(GetIndex(arr2, 'a'))

// take two args and return array of them

const ReturnArray = <T, K>(item1: T, item2: K): [T, K] => {
  return [item1, item2]
}

const arary = ReturnArray<number, string>(2, 'bd')
console.log(arary)

// we can also restrict the types
// <T extends string | number>
// using boolean gives error

```