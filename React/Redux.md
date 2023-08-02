# Redux

- It is a separate library for `managing the state`
- It is not mandatory for react project

- ADVANTAGES
  - When you are building a large scale application
  - redux gives great solution for handling data, managing the store
  - Easier to debug
- It is used for `state management of JS APPS`
- OFFERS
  - React-Redux - bridge between react and redux
  - Redux-Toolkit (RTK) - newer way of writing redux

## Redux Toolkit (RTK)

- Standard way to write redux
- Solves three problems
  1. Configuring a redux store is too complicated
  2. Need to add a lot of packages to get redux to do smt useful
  3. Too much boiler plate in redux

## Redux store

- It is a big object and kept in a central global space
- We can keep **most of the data to the redux store**
- We have slices in redux store (by logical separation)
  - Themes
  - logged information
  - cart
- slice holds all the data

## how it is done

- when we click the add button it `dispatches an action`
- `calls a function` **Reducer Function **
- This function modifies the cart
- WHEN WE CLICK ON THE ADD BUTTON IT DISPATCHES AN `ACTION` , WHICH CALLS THE `REDUCER FUNCTION` WHICH MODIFIES `THE SLICE OF REDUX STORE`

- we get the data from the slice using `SELECTOR` and this selector gives the data
- when we use selector this phenomena is `SUBSCRIBING TO THE STORE`
- header is subscribed to the store=> it is in sync with the store

- we see only button and the cart updating behind the scenes it is done

## Code

- install @reduxjs/toolkit and react-redux
- Build our own store
- Connect our store to app
- We will create a cart slice to add items to the store
- dispatch (action)
- read the data using selector

## store

- store in utils

```js
import { configureStore } from "@reduxjs/toolkit";
const Appstore = configureStore();
```

## provide

- providing this store to our application in the `ROOT OF THE APPLICATION`

```js
import { Provider } from "react-redux";
```

- we wrap the whole application into the provider
- and pass the store as props
- if we don't to use it in the entire app we wrap it in the desired location

## slice

```js
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  // name of the slice
  name: "cart",
  //   initial state
  initialState: {
    items: [],
  },
  //   we write reducer functions here corresponding to the actions
  //   we write reducer functions corresponding to each action
  //   below action is additems and the reducer function
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// we export our actions
// we default export reducer
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```


## IMP 
- Make sure to subscribe to the correct selector
- 
