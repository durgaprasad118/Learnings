# Table of contents

- [React](#react)
  - [JSX](#jsx)
  - [Components](#components)
  - [style](#style)
  - [props](#props)
  - [Config driven UI](#config-driven-ui)
- [keys](#keys)
- [Let's get Hooked](#lets-get-hooked)
  - [Cleaning code](#cleaning-code)
  - [imp exp](#imp-exp)
  - [export - 2 ways](#export---2-ways)
  - [Folder Structure](#folder-structure)
  - [rendering](#rendering)
  - [Filter option](#filter-option)
- [Hooks](#hooks)
  - [loading](#loading)
  - [conditional rendering](#conditional-rendering)
  - [component composition](#component-composition)
- [Exploring the world `useState()`](#exploring-the-world-usestate)
  - [Important](#important)
  - [Search input](#search-input)
  - [number of renders](#number-of-renders)
- [Routing](#routing)
  - [building header constant and displaying the respective things in the body](#building-header-constant-and-displaying-the-respective-things-in-the-body)
  - [linking to the anchor tags](#linking-to-the-anchor-tags)
  - [In the end it is converted to anchor tag in html so for removing blue links use td:none, and color;black](#in-the-end-it-is-converted-to-anchor-tag-in-html-so-for-removing-blue-links-use-tdnone-and-colorblack)
  - [React is known as single page application](#react-is-known-as-single-page-application)
- [Class based components](#class-based-components)
  - [state in react](#state-in-react)
  - [Life cycle methods](#life-cycle-methods)
  - [apart from constructor and render method class based component also has `componentDidMount()` =\> _this will be called once the component is mounted_](#apart-from-constructor-and-render-method-class-based-component-also-has-componentdidmount--this-will-be-called-once-the-component-is-mounted)
  - [when both has mounts then](#when-both-has-mounts-then)
  - [if there are multiple childs](#if-there-are-multiple-childs)
  - [This is done because=\>](#this-is-done-because)
  - [componentDidMount()](#componentdidmount)
  - [parent - child =\> inner child(child)](#parent---child--inner-childchild)
  - [important](#important-1)
  - [componentdidmount](#componentdidmount-1)

# React
- React element => object
- when we render this into the dom then it becomes html element

## JSX

- JSX (javaScript xml) => (not react)
- **JSX stands for "JavaScript XML," and it is a syntax extension used primarily with React, a popular JavaScript library for building user interfaces. JSX allows developers to write HTML-like code within their JavaScript files, making it easier to create and compose UI components.**
- => JSX is html like syntax
- => JSX is not html in js
- => Not a proper js because js engine cannot undersatnd jsx
- => parcel(Babel) transpiles jsx to smthing js engine can understand
- => JSX =>(babel) react.createElement => object => html element
- camelCase is used for attributes

## Components

- class based components (old way)
- functional component (new way)
  FUNCTIONAL COMPONENT => JS FUNCTION which returns some piece of jsx
- USE captial letter
- if single line no need of return as it is arrow function
- if multi line ( ) used
- method 1 `<Heading Component/>`
- Method 2 `<HeadingComponent></HeadingComponent>`
- we can pass element or functional component in one another
- fucntional component returns only one
- WE can call component using `{func()}`

## style

- for writing style inline
- `style={{bgc:"red",....}}`

## props
- arguments to a function => while calling function we do `func(2)` here 2 is argument in react we call it as props
- prop is an object
- so we destructure for easier writing since it is an object
- destructing ` const {name, cuisine}=props`
- instead of `(props)` we write `({name, cuisine, rating, time})`
- while accessing instead of writing `prop.name` we can write `name`

## Config driven UI

- driven by config (lastest practice used )
- config is given by api
- diferent for delhi, kolkata, etc..
- if offers are there in banglore it shows in carousel if im veiewing for kolkata it doesnt show

# keys
- to identify uniqely the child
- if keys are not there then all childs are treated same and rerenders everything
- if key is there then it uniquely identifies and renders that particular thing insted of re-rednering all items
- index is not used because => react documentation says using index is bad practice
- Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.
  - Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
  - **You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the *order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered*. Index as a key often leads to subtle and confusing bugs**.
  - **Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. *This will cause keys to never match up between renders*, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.**
  - Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.
- Easy example
- Imagine that files on your desktop didn’t have names. Instead, you’d refer to them by their order — the first file, the second file, and so on. You could get used to it, but once you delete a file, it would get confusing. The second file would become the first file, the third file would be the second file, and so on.
- File names in a folder and JSX keys in an array serve a similar purpose. They let us uniquely identify an item between its siblings. A well-chosen key provides more information than the position within the array. Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.
- Key must be linked to parent jsx

# Let's get Hooked

- frameworks make developer experience easier
- anything that react does can be done by HTML, CSS, JS

## Cleaning code

- Seperate files for separate **components**
- `.js` or `.jsx` doesn't matter
- keep it simple and don't overthink

## imp exp

- Before `importing` file we need to `export` => first `give` and then `take`

## export - 2 ways

- `export default Component` - default export
- `import Component from "path"` for **default export**
- in the end of the path if we use or don't use extension it doesn't matter
- we can only have one default export in a file
- `named export` - when you need to export multiple things
- `just write export infront of the component or variable`
- for importing `import {name} from "path"`
- **You can use named export and default export together**
- we can import multiple components at once if they are from same path
- `import Component(from default) , {url} from "path" `

---

- links and hard coded data in separate folder => `utils` and in that `constants.jsx`
- it's good to use capital letters and snake case for urls
- while using links use `{}` because it is given as `variable in js`

## Folder Structure

- **src** folder contains source code
- **utils** contain all the hard coded data

## rendering

- we can render to root in two ways

1.  create root and then `root.render(<Component/>)`
2.  ```js
    ReactDOM.createRoot(document.getElementById("root")).render(
      <AppLayout></AppLayout>
    );
    ```

## Filter option

- in order to filter the top rated restaurants on clicking the button we need to change the restaurant list that is being passed to the card with the required logic
- it only updates the data but `ui doesn't update`

- **React is fast in dom manipulation**
- **UI and data are working in sync with each other**

# Hooks

- **HOOK** is a normal js function which has some pre-written logic
- **state variable** => (maintains state)

1. useState() - _for superpowerful variable_
2. useEffect()

- first we need to import ` named import` these hooks
- `const [listofrest,setList]= useState(default)`
- we cannot modify directly the listofrest
- we can use function as second parameter
- `const [listofrest,setList]= useStateof(default)`
- if we need to update the `listofrest` then we use `setList([])`

- ```js
       const [A,setA]=useState(a);
       <!-- this is same as -->
       const arr= useState(a);
       <!-- useState() returns an array of two elements first one is state variable and 2nd is used to set the state -->
       const [A,setA] = arr;
       const A= arr[0];
       const B = arr[1];
  ```

- **render- when ever state variable changes react rerender it's components**

# Reconciliation ( aka => react fiber(in react 16))

- The algorithm React uses to diff one tree with another to determine which parts need to be changed.=> **Reconciliation**
- react fiber => new way of finding the difference in dom and updating the DOM
- Virtual DOM (_React element=>actually its a js object_)- representation of actual DOM
- **Diff algorithm**- finds out the difference between the updated virtual dom and the previous virtual dom and then actually updates the dom on every render cycle
- Finding out the difference between two `html elements` is hard but that of two `objects is easier`

## why is react fast

- it is doing effiecient dom manipulation
- it has virtual dom (object)
- it has `diff algorithm` => finds out the difference between updated virtual dom and previous virtual dom and then actually updates the dom on every render cycle
- **Finding out the difference and then updating**

## Monolith architecture

- We have api, ui code, frontend, backend, authentication code, database connectivity code in our project
- if we have to make minor changes we have to compile and deploy the whole Bulky project

## Microservice architecture

- we have different service for different things
- All these combine to form a big app
- can have different tech stacks frontend `react`, backend in `java` and run on their `specific ports`
- `Seperate of concerns` and follows `single responsibility principle`
- Now these several services need to talk to each other => Make calls to different api's

# fetching data => API Call

- Two approaches

1. When to make an api call- (as soon as page loads)=> (we make api call) => (then we render data)
2. ( As soon as page loads) => (we quickly render UI) => (we make api call) => (we re-render new data)

- we use 2nd approach mostly
- gives better `UX` => renders whatever we can and see something and then slowly website loads after api call is made -` Rendering two doesn't matter in react`

# useEffect()

- named import
- syntax
- two arguments we pass into `useEffect`

  1. callback function
  2. dependency array

  ```js
  useEffect(() => {
    console.log("useEffect() was called");
  }, []);
  ```
- useEffect is called after component renders then the callback function is called
- if we need to do something after rendering we write in `useEffect()`
- if we console somthing else it prints first then `useEffect`

- so to make an api call using second method(load-render-api-rerender) we fetch the data using `useEffect()` just after rendering we make api call and  then re render

- `fetch` -> given by browser => fetches data from api 
- returns a promise .then() or catch() or use `async await`
- then convert to `json` data
- we get cors error => to bypass erros  we use cors blocker extension 




## loading
- it takes few seconds to fetch the data so in mean time we can show some `spinner like animation`
- but it is not a good practice
- **Shimmer UI** => resembles pages actual UI, so users will understand how quickly the web will load 
> if the api is taking time to load then use shimmer UI 

## conditional rendering
- rendering on the basis of condition
- Eg. rendering the shimmer UI if the `restaurants.length ==0`


## component composition
- component inside another component 




# Exploring the world `useState()`
- [Search filtering](#search-input)
- Why we need to use state variable instead of normal js variable `useState()`
  - Normal variable gets updated but the UI doesn't update
  - Our component won't get refreshed
  - This is why js variable doesn't work in such cases
  - if we use `useState()` which is a special variable which can be changed using second parameter of the `useState()` which is a function
  - `Normal variable` doesn't get tracked where as `state variable` setA("") is tracked by react and react will trigger the render process
  - _whenever there is change in state variable react re renders the components=> react triggers reconciliation cycle_
  - **The whole component is re-rendered which has updated values using diff-algorithm (react-fiber)**
    ### **Even though it is const it is able to change because it is re-rendering the whole component once again so the const variable is a new variable**
- What is the need of` useEffect()`
  - **Need** - we render in react - load=> render => api => rerender
  - `useEffect()`
  - **useEffect is called after component renders then the callback function is called**
  - **if we need to do something after rendering we write in `useEffect()`**
  - if we console somthing else it prints first then `useEffect`
  - so to make an api call using second method(load-render-api-rerender) we fetch the data using `useEffect()` just after rendering we make api call and then re render
  ## Important
- When is useEffect() called
  - everytime the render of the component then useEffect() is called
  - it takes two parameters `callback(mandatory) and dependecny array(not mandatory)`
  - The dependency array changes the behaviour of it's render
  - if no dependency array `useEffect()` is called every render
  - When there is an empty dependency array => [] then `useEffect()` is called `only in the intial render and just once`
  - When something is there in dependency array[btnNameReact] => the `useEffect()` is called only when the dependency array changes , everytime btnNameReact changes
- useState()
  - try to call these hooks at the start of the component to avoid inconsistencies
  - Never use `useState()` outside the component
  - Never use `useState()` inside `if Else conditions, for loops, functions`
  - purpose => to create a local state variable in functional component

## Search input

- we bind the input value to a state variable
- while entering text it doesn't update because it doesn't change
- so we use `onchage` to `set` the value of the variable so that it updates
- **Even when we enter something in the input value it re-renders the whole component**
- **Make both to one case while checking them to avoid case errors**
- Next thing is your Ui gets updated then u need the previous data for the search again
- now we have only few restaurants to search but we need to check in total restaurants so we need to update the list of restaurants
- So make a copy of filtered and store it filterdarray
- use filtered array for showing the data and updating always
- use the original list has all data and this is used for filtering
- from the original array the data is filtered

## number of renders

> react is finding the difference between older and newer virtual dom => re-renders the whole component but updates the difference only

- first renders after loading
- when api call is made then re-renders
- when we click the top rated restaurants then re-renders `state variable changes`
- when we type in input box then re-renders `state variable changes`
# Routing
- `npm install react-router-dom`
- Named import

```js
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
```

- whenever we need to create route we need to write routing configuration
- We create configuration(some info that will tell what will happen on a specific route)
- `createBrowserRouter` takes a list of [path(an object ) , what should happen on path]
- while rendering use `<RouterProvider router={appRouter}/>`
- ErrorELement => if something wrong happens it goes to this specific page
- `reacter-router-dom` also gives `useRouterError` hook
- this gives more information about the error

## building header constant and displaying the respective things in the body

- to do this we need to create childern routes
- we use `outlet`
- according to the path it fills there

## linking to the anchor tags
- `in the end it is anchor tag`
- if we use `a and href="path"` it will take to the desired page but
- NEVER USE Anchor tag for navigatig
- if we use that whole page gets refreshed
- so react helps to navigate without getting whole page refreshed
- router helps => to use links
- `Link to="path from router"` to easily make them clickable
- using this the whole page doesn't load only the requried thing loads
## In the end it is converted to anchor tag in html so for removing blue links use td:none, and color;black
## React is known as single page application

- 2 types of routing in webapps
  1. **client side routing - we don't make network calls because all components are already loaded**
     - single page application we use `client side routing`
  2. server side routing - make a network call and the about us page comes from server

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Nav from "./Nav";
import About from "./About.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./COntactUs.jsx";
import Error from "./Error.jsx";

const Applayout = () => {
  return (
    <div className="app">
      <Nav />
      {/* {- Outlet acts as tunnel which ever path is clicked it makes it pass accordingly} */}
      <Outlet />
    </div>
  );
};
// import { Link } from "react-router-dom";

// - `import { Link } from "react-router-dom"`;
// - instead of `a`- it refreshes whole page while Link doesn't
// -  `import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"`;
//link to="path where to navigate"

/*

 <nav>
      <h3>Logo</h3>
      <ul>
        <li>
        to home page
          <Link to="/">Home</Link>
        </li>
        <li>
        to about page 
          <Link to="/about">About</Link>
        </li>
        <li>
        to contact us page
          <Link to="/contact">Contact us</Link>
        </li>
        <li>Login</li>
      </ul>
    </nav>


*/

// configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    //1st path is main path
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
// react provider helps to render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);


```

# Class based components

- `Functional component`- normal js function which returns some piece of jsx
- **Class based component**- class based component is a class which has a render method which returns a piece of jsx
- we will have a render method inside , this returns a piece of `jsx`
- use `extends React.component` to make class based component
- `React.component` is imported from `react`

- How do we receive props

  - we will create a constructor to receive props
  - we need to use `super`
  - Super props in class components refers to a method that is used to access the props of the parent component inside the constructor of the child component. When creating a class component, the constructor is responsible for initializing the component's state and binding event handlers. However, before we can access the props in the constructor, we need to call the super() method, which is used to call the constructor of the parent class (React.Component).

- By calling super(props), we pass the props object to the parent class's constructor, allowing the child component to access the props. This is especially useful when we need to set the initial state of the component based on the props passed down from the parent.

- **for passing props we create a constructor and use super(props)**
-

## state in react

- Earlier there are no hooks
- Loading a class based component is creating an `new instance of the class`
- if we need to create state variable we do it constructor

- ```js
     constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2:1,
    };
  }

  ```

- we need to create `useState` two times in functional component but here only one is used
- for updating `this.setState({ count: count + 1 })`

## Life cycle methods

- While rendering if it encounters `class based component` a new instance of a class is created , `then the constructor is called` and `then render is called`
- if the parent is also class based component
  1. new instance of parent class is created
  2. `parent constructor` is called
  3. `parent render` is called
  4. `child constructor` is called
  5. `child render` is called

## apart from constructor and render method class based component also has `componentDidMount()` => _this will be called once the component is mounted_

1. component is called\*
2. render method is called
3. componentDidMount is called

## when both has mounts then

1. parent constructor
2. parent render
3. child constructor
4. child render
5. child mount
6. parent mount

## if there are multiple childs

1. parent constructor
2. parent render
   - **render phase of both children**
3. child 1 constructor
4. child 1 render
5. child 2 constructor
6. child 2 render
   - **DOM UPDATED - Batching**
7. child 1 mount
8. child 2 mount
9. parent mount

- This happended because render is done first of both childs and batches the render pahse of two childs
- _this two childs render phase is happened and then commit phase is batched_
- batching render phases of children
- then commit phase batchesup and start updating the `dom`

## This is done because=>

## componentDidMount()

## parent - child => inner child(child)

- parent constructor
- parent render
- child constructor
- child render
- inner child constructor
- inner child rnder
- inner child component did mount
- child component did mount
- parent component did moutn

- This will be called once the component is mounted
- This is used to make an Api call
- The way we call is `load -> render -> api call -> re-render`
- in the similar way of `useEffect()`

## important

- two phases
  1. render phase
     - `constructor is called`
     - `render is called`
  2. commit phase
     - DOM updates
     - componentDid Mount is called

## componentdidmount

- we can make this async function
  1. first constructor is called
  2. then render is clled with some dummy data
  3. now component did mount is called an api call is made
  4. Now we call `this.setState`
  -Till here mounting life cycle
  5. When we call the set state the it triggers reconciliation process now update cylce starts -> render method is started
  6. this render(api data) state variable updates **whenever there is a change in state variable react rerenders the components**
  7. Now user sees with New data(api data)
  8. Now `component did update is called`
  9. `Component will unmount is called when we unmount` like when we change the page
