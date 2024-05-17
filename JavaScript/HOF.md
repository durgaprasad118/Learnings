# Table of Contents
- [Table of Contents](#table-of-contents)
- [class Vs Classname](#class-vs-classname)
- [form](#form)
- [forEach (faster) VS map =\> both require callbacks, (ele,index,arry)](#foreach-faster-vs-map--both-require-callbacks-eleindexarry)
- [map](#map)
- [map filter, reduce](#map-filter-reduce)
- [destructuring , rest , spread](#destructuring--rest--spread)
  - [Nullish coalescing operator](#nullish-coalescing-operator)
- [Parse and json](#parse-and-json)

# class Vs Classname
- differnce between `class and classname`
  - In HTML, the `class` attribute is used to assign one or more CSS classes to an element
  - In JavaScript, the `class keyword` is used for defining `classes (constructor functions)` to create `objects with properties and methods`. Since React components are built using JavaScript classes, using the class keyword for defining CSS classes in JSX (React's syntax extension for JavaScript) could lead to ambiguity and conflicts.
- Lifting up the state
  - we take the state to the parent element


# form

- `onSubmit={(e)=>e.preventDefault()}` to prevent refreshing of page multiple times on every change

# forEach (faster) VS map => both require callbacks, (ele,index,arry)
- for Each just iterates over the elements of the array and doesn't return anyting
- Modifies the original array inplace
- Use when you want to perform an action on each element but don't need a new array.
- Cannot be chained with other array methods
# map
- Returns a new array with the transformed elements.
- Does not modify the original array.
- Use when you want to transform elements and create a new array with the results.
- can be chained with other array methods
# map filter, reduce

- map => for all elements

```js
const answer = arr.map((x) => {
  return x.toString(2);
});
```

- filter => to filter certain elements

```js
const oddValues = arr.filter((x) => {
  return x % 2 == 1;
});
```

- reduce => acc,curr => second parameter is the first value of the acc

```js
const sum = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
});
const greater = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// if age<30 return firstName
const ageReduce30 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.fN);
  }
  return acc;
}, []);

// ages if equal return no of times
const ages = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
```

# destructuring , rest , spread

- const{a,b}= object , destructuring objects
- const {a:one,b:two}= object, renaming varibles
- default values {a,b,c="three"}= object , default values if the value isn't present in the object the default value is returned
- rest (in the end only) => if we need first and second and the rest of the values can be destructured to rest operator
- swapping the values [a,b]=[b,a] array destructuring
- we can destructure function

```js
const obj ={
  name:'dp',
  details:{
    age:20,
    email:'dp.com'
  }
}


const {name,details:{age,email}}= obj;
console.log(name)
 // console.log(details)//give an error 
// Reference error details is not defined
console.log(age)
console.log(email)

const obj = {
  item: "mouse",
  name: "logitech",
  description: {
    price: {
      saleDay: 4000,
      normalDay: 8000,
    },
  },
};
const {
  description: {
    price: { saleDay },
  },
} = obj;

console.log(`${saleDay}`);//4000

```

```js
function getPerson() {
  return {};
}
```

- there are some cases it returns null so use (||) operator
- let [firstName,secondName]= getPerson()||{};
- let {naam:{fn:NAME}}=member; //name and id are top level and inside name (:) this is inside of
- ```js
  let displayFullName = ({ FN, LN }) => {
    //    return `${person.FN} ${person.LN}`
    return `${FN} ${LN}`;
  };

  let person = {
    FN: "DP",
    LN: "ACHANA",
  };
  console.log(displayFullName(person));
  ```

- `const [q, r, ...rest] = [1, 2, 3, 4, 5];`
- rest is used in the end of the array
# Optional Chaining
- The `?.` operator checks if the property on the left side (person.address) exists and is not `null or undefined`. If it is, the expression continues, and the property on the right side (city) is accessed. If, at any point, a property is `null or undefined`, the expression returns `undefined`, and the rest of the chain is skipped.



## Comparison function sorting
```js
const numbers = [5, 2, 8, 1, 10, 3];
// Sorting in ascending order
numbers.sort((a, b) => a - b);
// descending order
numbers.sort((a,b)=> b-a)
```
-  `(a, b) => a - b` is used as a comparison function=> ascending order  
-  If the result of the function is negative, `a comes before b`. If the result is positive, `b comes before a`. If the result is zero, the order of `a and b remains unchanged.`
## Nullish coalescing operator
- The behavior of the ?? operator is simple: it returns the value of the left-hand operand (a) if it is not null or undefined, and if it is null or undefined, it returns the value of the right-hand operand (b). In other words, it provides a default value (b) when the left-hand operand (a) is null or undefined.

# Parse and json
```js
//when we need to send data we store in toString()
//

const users = '{"name": "Harkirat", "age":2}';
console.log(users.name); // this is a string => undefined

const user = JSON.parse(users);
console.log(user.name);

const str = JSON.stringify(user);
console.log(typeof str); // string

// Stringify => converts to Stringify
// parse => converts string to js object

// Stringigy => for passing data to some other Sources
// Parse => for parsing data that is coming from some server


```