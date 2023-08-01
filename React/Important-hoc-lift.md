# Table of contents

- [HOC](#higher-order-component-normal-js-function)
- [promoted](#promoted-restaurants)
- [Data Managing](#data-managing)
- [Accordian](#accordian)
-

## Higher order component (Normal js function)

- HOC is a function that takes a function and returns a function
- Takes the component and enhances the component and returns it back

## Promoted restaurants

- we will write a function and give the card which gives the card with promoted label
- input - restaurantCard => rescard promoted
- after creating export it and import at desired place
- Now name it and pass the component as argument
- Now utilise it by checking the desired condition

## important

- when we pass props in hoc we receive in return ()
- next return the desired thing and pass props in card also

```js
export const withPromoted = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-10 bg-slate-700 px-3 py-1 rounded-md -left-3 text-white">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};
```

# Data Managing

- To make UI dynamic `data` is responsible
- Two types of layers
  - `Data` layer
  - `UI` layer
- Data layer is responsible for the fastness of our application
- `props and state`

## Accordian

- open and close section
- two
  - accordian header
  - accordian data

## toggle feature

- SetShow(!show)
- if show is false set it to true
- if show is true then set it to false

## hiding and showing

- use &&
- (show && <div>)
- if show is true then shows the div else hides it

## Controlled and uncontrolled component

- if parent controls the child then it is controlled component
- if parent doesn't control the child then it is uncontrolled component

## feature => lifting the state (child to parent)

- if one is opened other should close
- Menu should control the accordian
- using indexes `index===0?true:false` => if index is 0 send true else false
- same can be written as `index===0 && true`

## note

- at a time one accordian should be opened
- so in the parent keep a variable state and by `default keep it as zero` if `we keep it null nothing appears` so first will be opened `index===0?true:false`
- and pass the `setValue` which is a function with index as paramter as props to the children
- and call it where it is clicked
- by default first will be opened
- when ever a particular accordian is clicked **the setValue sets the index and it is passed false so it opens there**

## Mostly data flows in one direction (from parent to children =>....)

- we can't directly jump to last children
- we need to pass the data first to second to third....
- **This concept is props drilling**
- whereever i am at we can access directly by using `react context`
- no need to pass always as props so we `use context which is like global space`

## Solves

- props drilling

## User context (like central global object)

- has `consumer` and `provider`
- named import
- creating context

```js
import { createContext } from "react";
```

- using context

```js
import { useContext } from "react";
import UserContext from "../../utils/userContext"; // the component
```

- we can use any number of context and any where required

- IN CLASS BASED COMPONENTS

  - import directly from path
  - create a div and get by callback and `Consumer`
  - ```js
    <UserContext.Consumer>
    {(data)=>{console.log(data)}}
    <UserContext.Consumer/>
    ```

- **If we want to change the context**
- wrap in `UserContext.provider value ={{logedin:userName}}`
- what ever you wrap inside it will be applicable
- if we wrap only on header it will be applicable over header only
- if we provide some value to the whole app -> whole app gets the value
- but if we separatley nest it and change for particular
