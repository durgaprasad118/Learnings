# Table of Contents
- [class Vs Classname](#class-vs-classname)
- [form](#form)
- [forEach (faster) VS map =\> both require callbacks, (ele,index,arry)](#foreach-faster-vs-map--both-require-callbacks-eleindexarry)
- [map filter, reduce](#map-filter-reduce)
- [destructuring , rest , spread](#destructuring--rest--spread)


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

