# ES6_Scrimba
- [ES6\_Scrimba](#es6_scrimba)
  - [Template Literals](#template-literals)
  - [Object Destructuring](#object-destructuring)
  - [Array Destructuring](#array-destructuring)
  - [Object Literals](#object-literals)
## Template Literals

- Using `${}` for writing with ``
- Can from multiline strings and also we can avoid using `+` for string concatenation
- we can also write multi line strings using ``
## Object Destructuring

```js
const player = {
  name: 'Lebron James',
  club: 'LA',
  address: {
    city: 'Los angeles',
  },
}
const {
  name,
  age = 20,
  club,
  address: { city },
} = player
```

- `const{a,b}= obj`
- We can rename variables while destructuring `const {a:one}= obj`
- Default values `const {a,b,c="Three"}`
- rest in the end `...`

```js
const obj = {
  item: 'mouse',
  name: 'logitech',
  description: {
    price: {
      saleDay: 4000,
      normalDay: 8000,
    },
  },
}
const {
  description: {
    price: { saleDay },
  },
} = obj

console.log(`${saleDay}`) //4000
```

- multi level destructuirng

## Array Destructuring

```js
let names = ['Dp', 'Madhu', 'Srinu']
console.log(names[0])

// instead of that we do
let [one, two, three] = names
console.log(one, two, three)
```

## Object Literals

- If the key is same as the value we can write only keys
- This is highly helpful while writing `express and mongodb`

```js
function addressMaker(city, state) {
  const newAddress = { city: city, state: state }
  console.log(newAddress)
}
addressMaker('Hyd', 'Telangana')

// if  they key is same as the value we can write as below
function AdressFormer(city, state) {
  const newAddress = { city, state }
  console.log(newAddress)
}
AdressFormer('Vizag', 'Andra Pradesh')
// Answer:
// { city: 'Vizag', state: 'Andra Pradesh' }
```

- Combining {}} literals and Template Literals

```js
function addressMaker(address) {
  const { city, state, country = 'UnitedStates' } = address
  const newAddress = {
    city,
    state,
    country,
  }
  console.log(newAddress)
}

addressMaker({ city: 'Austin', state: 'Texas' })
// Answer
// {city: "Austin", state: "Texas", country: "UnitedStates"}
```
