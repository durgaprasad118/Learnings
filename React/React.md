- [React](#react)
  - [JSX](#jsx)
  - [Components](#components)
  - [style](#style)
  - [props](#props)
  - [Config driven UI](#config-driven-ui)
  - [keys](#keys)
  - [loading](#loading)
  - [conditional rendering](#conditional-rendering)
  - [component composition](#component-composition)
  - [imp exp](#imp-exp)
  - [export - 2 ways](#export---2-ways)
  - [utils](#utils)
  - [Folder Structure](#folder-structure)
  - [number of renders](#number-of-renders)
  - [React is known as single page application](#react-is-known-as-single-page-application)
- [Hooks](#hooks)
  - [useState](#usestate)
  - [useRef](#useref)
  - [React.memo](#reactmemo)
  - [useCallback](#usecallback)
  - [useMemo](#usememo)
  - [useReducer](#usereducer)
  - [useContext](#usecontext)
  - [Theme context](#theme-context)
  - [Customhook of context creation](#customhook-of-context-creation)
  - [setting theme](#setting-theme)
  - [Custom hooks](#custom-hooks)
- [Routing](#routing)
  - [way 1](#way-1)
  - [way 2](#way-2)
  - [Outlet](#outlet)
  - [useNavigate](#usenavigate)
  - [Routing to specific page and fetching useParams()](#routing-to-specific-page-and-fetching-useparams)
- [Reconciliation ( aka =\> react fiber(in react 16))](#reconciliation--aka--react-fiberin-react-16)
  - [why is react fast](#why-is-react-fast)
- [fetching data =\> API Call](#fetching-data--api-call)
  - [axios v fetch](#axios-v-fetch)
  - [fetching data](#fetching-data)
  - [posting data](#posting-data)
- [Loading, error - Like Tanstack query](#loading-error---like-tanstack-query)
  - [Lazy Loading](#lazy-loading)
  - [HOC](#hoc)
  - [usage](#usage)
- [Debounce , ThrottleSearch](#debounce--throttlesearch)
    - [debouncing](#debouncing)
    - [throttling](#throttling)
  - [Image Slider\_ Carousal](#image-slider_-carousal)
- [Features](#features)
  - [Online Offline **important**](#online-offline-important)
- [Class based components](#class-based-components)
    - [state in react](#state-in-react)
  - [Life cycle methods](#life-cycle-methods)
    - [when both has mounts then](#when-both-has-mounts-then)
    - [if there are multiple childs](#if-there-are-multiple-childs)
    - [This is done because=\>](#this-is-done-because)
  - [componentDidMount()](#componentdidmount)
  - [parent - child =\> inner child(child)](#parent---child--inner-childchild)
    - [important](#important)
  - [componentdidmount](#componentdidmount-1)
  - [Harkirat explanation](#harkirat-explanation)
  - [lifeCycle Events in ClassBased Components](#lifecycle-events-in-classbased-components)
- [Redux](#redux)
  - [Redux Toolkit (RTK)](#redux-toolkit-rtk)
  - [Redux store](#redux-store)
  - [how it is done](#how-it-is-done)
  - [Code](#code)
  - [store](#store)
  - [provide](#provide)
  - [slice](#slice)
  - [IMP](#imp)
- [recoil](#recoil)
  - [invalidating queries](#invalidating-queries)
  - [suspense](#suspense)
  - [loading hasValue](#loading-hasvalue)
  - [Atom Family](#atom-family)
  - [atom and atom family](#atom-and-atom-family)
  - [async atomfamily and atoms](#async-atomfamily-and-atoms)

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

## keys

- to identify uniqely the child
- if keys are not there then all childs are treated same and rerenders everything
- if key is there then it uniquely identifies and renders that particular thing insted of re-rednering all items
- index is not used because => react documentation says using index is bad practice
- Keys tell React which array item each component corresponds to, so that it can match them up later. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.
  - Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
  - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
  - **You might be tempted to use an item’s index in the array as its key. In fact, that’s what React will use if you don’t specify a key at all. But the _order in which you render items will change over time if an item is inserted, deleted, or if the array gets reordered_. Index as a key often leads to subtle and confusing bugs**.
  - **Similarly, do not generate keys on the fly, e.g. with key={Math.random()}. _This will cause keys to never match up between renders_, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.**
  - Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.

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

## utils

- links and hard coded data in separate folder => `utils` and in that `constants.jsx`
- it's good to use capital letters and snake case for urls
- while using links use `{}` because it is given as `variable in js`

## Folder Structure

- **src** folder contains source code
- **utils** contain all the hard coded data
- links and hard coded data in separate folder => `utils` and in that `constants.jsx`
- it's good to use capital letters and snake case for urls
- while using links use `{}` because it is given as `variable in js`

## number of renders

> react is finding the difference between older and newer virtual dom => re-renders the whole component but updates the difference only

- first renders after loading
- when api call is made then re-renders
- when we click the top rated restaurants then re-renders `state variable changes`
- when we type in input box then re-renders `state variable changes`

## React is known as single page application

- 2 types of routing in webapps
  1. **client side routing - we don't make network calls because all components are already loaded**
     - single page application we use `client side routing`
  2. server side routing - make a network call and the about us page comes from server

# Hooks

- try to call these hooks at the start of the component to avoid inconsistencies
- **React is fast in dom manipulation**
- **UI and data are working in sync with each other**
- **HOOK** is a normal js function which has some pre-written logic
- **state variable** => (maintains state)

## useState

> useState is a React Hook that lets you add a state variable to your component.

- Never use `useState()` outside the component
- Never use `useState()` inside `if Else conditions, for loops, functions`
- purpose => to create a local state variable in functional component
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

- Why we need to use state variable instead of normal js variable `useState()`
  - Normal variable gets updated but the UI doesn't update
  - Our component won't get refreshed
  - This is why js variable doesn't work in such cases
  - if we use `useState()` which is a special variable which can be changed using second parameter of the `useState()` which is a function
  - `Normal variable` doesn't get tracked where as `state variable` setA("") is tracked by react and react will trigger the render process
  - _whenever there is change in state variable react re renders the components=> react triggers reconciliation cycle_
  - **The whole component is re-rendered which has updated values using diff-algorithm (react-fiber)**
    **Even though it is const it is able to change because it is re-rendering the whole component once again so the const variable is a new variable**

## useEffect()
> useEffect is a React Hook that lets you synchronize a component with an external system.


- named import
- syntax
- two arguments we pass into `useEffect`

  1. callback function
  2. dependency array

  ```js
  useEffect(() => {
    console.log('useEffect() was called')
  }, [])
  ```

- useEffect is called after component renders then the callback function is called
- if we need to do something after rendering we write in `useEffect()`
- if we console somthing else it prints first then `useEffect`

- so to make an api call using second method(load-render-api-rerender) we fetch the data using `useEffect()` just after rendering we make api call and then re render

- `fetch` -> given by browser => fetches data from api
- returns a promise .then() or catch() or use `async await`
- then convert to `json` data
- we get cors error => to bypass erros we use cors blocker extension

- What is the need of` useEffect()`

  - **Need** - we render in react - load=> render => api => rerender
  - `useEffect()`
  - **useEffect is called after component renders then the callback function is called**
  - **if we need to do something after rendering we write in `useEffect()`**
  - if we console somthing else it prints first then `useEffect`
  - so to make an api call using second method(load-render-api-rerender) we fetch the data using `useEffect()` just after rendering we make api call and then re render

- When is useEffect() called
  - everytime the render of the component then useEffect() is called
  - it takes two parameters `callback(mandatory) and dependecny array(not mandatory)`
  - The dependency array changes the behaviour of it's render
  - if no dependency array `useEffect()` is called every render
  - When there is an empty dependency array => [] then `useEffect()` is called `only in the intial render and just once`
  - When something is there in dependency array[btnNameReact] => the `useEffect()` is called only when the dependency array changes , everytime btnNameReact changes

```js
//good example of useEffect
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
function App() {
  const [user, setUser] = useState({})
  const [num, setNum] = useState(1)
  async function fetchData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${num}`,
    )
    const data = await response.json()
    setUser(data)
  }
  useEffect(() => {
    fetchData()
  }, [num])

  return (
    <div>
      <h1>Hello {user?.username}</h1>
      <button
        onClick={() => {
          num <= 10 ? setNum(num + 1) : setNum(1)
        }}
      >
        Change User
      </button>
    </div>
  )
}
export default App
```

## useRef
> useRef is a React Hook that lets you reference a value that’s not needed for rendering.

- focus on the input

```js
function App() {
  const ref = useRef(null)
  return (
    <div>
      <h1>Hello </h1>
      <input
        type="text"
        ref={ref}
      />
      <button
        onClick={() => {
          ref.current.focus()
        }}
      >
        Click me
      </button>
    </div>
  )
}
export default App
```

- Render count

```js
import './App.css'
import { useRef, useState } from 'react'

function App() {
  const ref = useRef(null)
  const renderCount = useRef(1)
  const [a, setA] = useState('')
  console.log(`The component is rendered ${renderCount.current} times`)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        gap: '3px',
      }}
    >
      <input
        type="text"
        ref={ref}
        value={a}
        onChange={(e) => {
          setA(e.target.value)
          renderCount.current = renderCount.current + 1
        }}
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(ref.current.value)
          alert(`The text copied is:  ${ref.current.value}`)
        }}
      >
        Click me to copy from input
      </button>
    </div>
  )
}
export default App
```

- copy to clipboard

```js
import './App.css'
import { useRef, useState } from 'react'

function App() {
  const ref = useRef(null)
  const renderCount = useRef(1)
  const [a, setA] = useState('')
  console.log(`The component is rendered ${renderCount.current} times`)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        gap: '3px',
      }}
    >
      <input
        type="text"
        ref={ref}
        value={a}
        onChange={(e) => {
          setA(e.target.value)
          renderCount.current = renderCount.current + 1
        }}
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(ref.current.value)
          alert(`The text copied is:  ${ref.current.value}`)
        }}
      >
        Click me to copy from input
      </button>
    </div>
  )
}
export default App
```

## React.memo

> memo => skips re-renders a component when the props are unchanged

```js
// in the below only Greeting re-renders when the name changes and not when adress changes
import { useState, memo } from 'react'
import './App.css'

const App = () => {
  const [name, setName] = useState('')
  const [ad, setAd] = useState('')
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        gap: '10px',
      }}
    >
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={ad}
        onChange={(e) => setAd(e.target.value)}
        type="text"
        placeholder="address"
      />
      <Greeting name={name} />
    </div>
  )
}

// const Greeting = ({ name }) => {
//   console.log("re-rendered!!!");
//   return <div>Hello {name}</div>;
// };
const Greeting = memo(({ name }) => {
  console.log('render')
  return <div>Hello {name}</div>
})

export default App
```

## useCallback
> useCallback is a React Hook that lets you cache a function definition between re-renders. 
- here the button component doesn’t need to re-render every time, though we use memo ,cz of reference type it re-renders
- using useCallback hook fixes this
- So button is rendered initially only

```js
import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { memo } from 'react'
const Button = memo(({ children, onclick }) => {
  console.log('Rendered Button component')
  return <button onClick={onclick}>{children}</button>
})

function App() {
  const [count, setCount] = useState(0)
  // function handleClick() {
  //   setCount(count=>count + 1);
  // }
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])
  return (
    <div>
      <h1>The value of the count is : {count}</h1>
      <Button onclick={handleClick}>Inc</Button>
    </div>
  )
}
export default App
```

## useMemo
> useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

- We can see the time difference of todo app while switching filters
- useMemo(()=>{},[dep Array])
- on the initial render it calculates with no arguments and if the dep array changes then it calculates

```js
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import todoFilter from './TodoFilter'
import { useMemo } from 'react'

const Show = ({ tab = 'all' }) => {
  const todoList = useSelector((state) => state.todos.todos)
  //NOTE: without Memo
  console.time('without memo')
  const todosWithoutMemo = todoFilter(todoList, tab)
  console.timeEnd('without memo')

  //NOTE: with memo
  console.time('with memo')
  const todos = useMemo(() => {
    return todoFilter(todoList, tab)
  }, [tab, todoList])
  console.timeEnd('with memo')
  return (
    <div>
      {todos.map((x) => {
        return (
          <TodoItem
            key={x.id}
            {...x}
          />
        )
      })}
    </div>
  )
}

export default Show
```

## useReducer
> caches the result of a calculation between re-renders
```js
import { useState, memo, useReducer } from 'react'
import './App.css'
//defining reducer
const reducer = (state, action) => {
  if (action.type == 'inc') {
    return {
      count: state.count + 1,
    }
  }
  if (action.type == 'dec') {
    return {
      count: state.count - 1,
    }
  }
  if ((action.type = 'reset')) {
    return {
      count: 0,
    }
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: 'inc',
          })
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'res',
          })
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'dec',
          })
        }}
      >
        Dec
      </button>
    </div>
  )
}
export default App
```

## useContext
> useContext is a React Hook that lets you read and subscribe to context from your component.


```js
import { createContext, useContext, useState } from 'react'
import './App.css'

const countContext = createContext({})
const countContextProvider = countContext.Provider
const useCount = () => {
  return useContext(countContext)
}
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        <Counter />
      </countContext.Provider>
    </div>
  )
}

const Counter = () => {
  const { count, setCount } = useCount()
  return (
    <div>
      <h1>count is :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increase
      </button>
    </div>
  )
}
export default App
```

## Theme context

```js
import React, { useState } from 'react'
import { ThemeContextProvider } from './ThemeContext'
import Page from './Page'

const Appp = () => {
  const [theme, setTheme] = useState('dark')
  return (
    <div>
      <ThemeContextProvider
        value={{
          theme,
          setTheme,
        }}
      >
        <Page />
      </ThemeContextProvider>
    </div>
  )
}

export default Appp
```

## Customhook of context creation

```js
import { createContext, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeContextProvider = ThemeContext.Provider

const useTheme = () => {
  return useContext(ThemeContext)
}
export default useTheme
```

```js
import Button from './Button'
import useTheme from './ThemeContext'
const Page = () => {
  const { theme } = useTheme()
  return (
    <div
      className={`h-[98vh] w-full ${
        theme == 'dark' ? 'bg-gray-700' : 'bg-white'
      } `}
    >
      <Button />
    </div>
  )
}

export default Page
```

## setting theme

```js
import useTheme from './ThemeContext'

const Button = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
      className="px-4 w-20 py-2 border bg-blue-500 hover:bg-blue-700"
    >
      Button
    </div>
  )
}

export default Button
```

## Custom hooks
- Internally uses useEffect or useState or another custom Hooks
  -- uses
- cleaner
- if there is a change needed , we can change in customhook instead of chaning in multiple places

> Data fetching Hooks
- useTodos
- whenever we are using a state varaible in useEffect it should be added as a dependency
- if you are using `setTimeout or setInterval` and the value changes using dep then => use return (clearInterval or clearTimout) to remove the previous timers
- this is to make one active clock

```js
import axios from "axios";
import { useEffect, useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDt = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://sum-server.100xdevs.com/todos");
      setTodos(data.todos);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDt();
  }, []);
  return {
    todos,
    loading,
  };
};

export default useTodos;
```

# Routing

- `npm install react-router-dom`
- Named import

## way 1

```js
<BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<Wrapper />}
    >
      <Route
        path="/"
        element={<Page />}
      />
      <Route
        path="/c"
        element={<CHnage />}
      />
    </Route>
  </Routes>
</BrowserRouter>
```

## way 2

```js
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
```

- whenever we need to create route we need to write routing configuration
- We create configuration(some info that will tell what will happen on a specific route)
- `createBrowserRouter` takes a list of [path(an object ) , what should happen on path]
- while rendering use `<RouterProvider router={appRouter}/>`
- ErrorELement => if something wrong happens it goes to this specific page
- `reacter-router-dom` also gives `useRouterError` hook
- this gives more information about the error
- create browser router - creates a routing configuration
- returns a list

```js
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
])
```

## Outlet

- acts as a passage tunnel
- header and footer remains same based on the route paths Outlet is rendered

```js
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Wrapper = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Wrapper
```

## useNavigate

- it's used for navigating to other pages

```js
import { useNavigate } from 'react-router-dom'
const Page = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Home page</h2>
      <button
        onClick={() => {
          navigate('/c')
        }}
        className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700"
      >
        Go to change page
      </button>
    </div>
  )
}

export default Page
```

## Routing to specific page and fetching useParams()

- suppose you have a item where you get data and you want to go to that page on clicking and get data fetched there then do this

```js
// route

<Route path="/p/:id" element={<DisplayJust />} />;

// component
export const TodoItem = ({ title = "", id }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/p/${id}`);
  }
  return (
    <h1 onClick={handleClick} className="text-xl text-gray-600">
      {title}
    </h1>
  );
};

// getting id

import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { particularTodo } from "./Atom";
export const DisplayJust = () => {
  const { id } = useParams();
  const { state, contents } = useRecoilValueLoadable(particularTodo(id));
  if (state == "hasValue") {
    console.log(contents);
  }
  return (
    <div className="flex w-full h-[100vh] items-center justify-center">
      <h1 className="text-2xl font-bold"> {contents.title}</h1>
    </div>
  );
};
```

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

# fetching data => API Call

- Two approaches

1. When to make an api call- (as soon as page loads)=> (we make api call) => (then we render data)
2. ( As soon as page loads) => (we quickly render UI) => (we make api call) => (we re-render new data)

- we use 2nd approach mostly
- gives better `UX` => renders whatever we can and see something and then slowly website loads after api call is made -` Rendering two doesn't matter in react`

## axios v fetch

> In fetch we werite url, {method, headers:{},body:JSON.stringify({})}
> `fetch(url,{method:"POST/PUT/DELETE",
headers:{},body:JSON.stringify({})})`

> in axios we write url,{body:{}},{headers:{}}
> `axios.get/post/put(url,{body:{}},{headers:{{}}})`

## fetching data

```js
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  //using axios
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      console.log(data)
    } catch (er) {
      console.log(er)
    }
  }

  //fetch
  const fetchUsingFetch = async () => {
    try {
      const resonse = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await resonse.json()
      console.log('using f', data)
    } catch (er) {
      console.log(er)
    }
  }
  //.then
  const fetchDt = () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())

        .then((data) => console.log(data))
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(() => {
    // fetchData();
    // fetchUsingFetch();
    fetchDt()
  }, [])
  return <></>
}

export default App
```

## posting data

```js
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  //using axios post data
  const fetchData = async () => {
    try {
      const { data } = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          body: {
            body: 'xyz',
            title: 'xyz',
            userId: 2,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      console.log(data)
    } catch (er) {
      console.log(er)
    }
  }

  //fetch
  const fetchUsingFetch = async () => {
    try {
      const resonse = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            body: 'xyz',
            title: 'xyz',
            userId: 2,
          }),
        },
      )
      const data = await resonse.json()
      console.log('using f', data)
    } catch (er) {
      console.log(er)
    }
  }
  useEffect(() => {
    // fetchData();
    // fetchUsingFetch();
    // fetchDt()
  }, [])
  return (
    <>
      <button
        onClick={() => {
          // fetchData();
          fetchUsingFetch()
        }}
      >
        Click to post the data
      </button>
    </>
  )
}

export default App
```

# Loading, error - Like Tanstack query

```js
//Custom Hook
import axios from "axios";
import { useEffect, useState } from "react";
function customFetch(url) {
  const [a, setA] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setErr(false);
      setLoading(true);
      const { data } = await axios.get(url);
      setA(data);
      setLoading(false);
    } catch (er) {
      setErr(true);
      setLoading(false);
      console.log(er);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [a, err, loading];
}

export default customFetch;


//component
import customFetch from "./custom.jsx";
const Disp = () => {
  const [a, err, loading] = customFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  if (err) {
    return <h1>Error occured</h1>;
  }
  if (loading) {
    return <h1>Loading......</h1>;
  }

  return <div>the length of the post array is : {a.length}</div>;
};
export default Disp;
```

## Lazy Loading
> lazy lets you defer loading component’s code until it is rendered for the first time.

```js
import "./App.css";
import { lazy, Suspense, useState } from "react";

const LazyC = lazy(() => import("./Lazy"));
// import LazyC from './Lazy'
export default function App() {
  const [count,setCount]= useState(0);
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyC count={count} />
      </Suspense>
      <button onClick={()=>setCount(count+1)}>Click to Inc</button>
      This is a from App.jsx
    </main>
  );
}



function sum() {
  let ans = 0;
  for (let i = 0; i < 99_999_999; i++) {
    ans += i;
  }
  return ans;
}
export default sum;



import sum from "./sum"
const LazyC = ({count})=>{
  const answer = useMemo(()=>sum(),[])
  console.log(answer);
  return (
    <div>
      <h1> The sum is : {answer}</h1>
      <p>the value of count is : {count}</p>
    </div>
  )
}
export default LazyC


```

## HOC
> a higher-order component is a function that takes a component and returns a new component.
```js
const EnhancedCard = (OldComponent) => {
  return function NewComponent(props) {
    return (
      <div className="relative ">
        <div className=" absolute top-2 left-2 p-2 bg-red-400 rounded w-24 ">
          Enhanced
        </div>
        <OldComponent {...props} />
      </div>
    )
  }
}

export default EnhancedCard
```

```js
import React from 'react'

const Card1 = ({ name, price }) => {
  return (
    <div className="border border-black text-blue-500 h-40 w-60  flex flex-col items-center gap-4">
      <h1>{name}</h1>
      <p>{price}</p>
      <button className="px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-400 ">
        Buy
      </button>
    </div>
  )
}

export default Card1
```

## usage

```js
const HOC = EnhancedCard(Card1)

<HOC {...prps}/>
```

# Debounce , ThrottleSearch

- Debounce - introduces delay before calling the function
- throttling - unlike debouncing, throttling ensures function calls after regular intervals

### debouncing

```js
import { useEffect, useState } from 'react'
const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    setTimeout(() => {
      const timeout = setDebouncedValue(value)
      return () => {
        clearTimeout(timeout)
      }
    }, 1000)
  })
  return debouncedValue
}

export default useDebounce

// instead of making api calls for every letter typing it delays a bit and only one call is made after few seconds
// This makes optimization
```

### throttling

```js
import { useEffect, useState } from 'react'

const useThrottle = (value) => {
  const [val, setVal] = useState('')
  useEffect(() => {
    let lastCall = 0
    function Outer() {
      let a = 1
      function Inner() {
        console.log(a)
      }
      return Inner
    }

    let closure = Outer()

    console.log(closure())
    const throttle = () => {
      const now = Date.now()
      if (now - lastCall > 1000) {
        lastCall = now
        setVal(value)
      }
    }
    const timer = setTimeout(throttle, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [value])
  return val
}
export default useThrottle
// makes call after every interval not after delay
```

```js
import { useState } from "react";
import "./App.css";
import Input from "./Input"
import Display from "./Display";
import useDebounce from "./DebounceSearch";
import useThrottle from "./ThrottleSearch";
export default function App() {
  let [a, setA] = useState("");
  const value = useDebounce(a);
  const values = useThrottle(a);
  return (
    <main>
     <Input value={a} setValue={setA}/>
      <Display value={values}/>
    </main>
  );
}

import { useState, useEffect } from "react";
import { data } from "./Data.js";
const Display = ({ value }) => {
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    const Items = data.filter((x) => x.name.toLowerCase().includes(value));
    setSearched(Items);
  }, [value]);
  if (searched.length == 0) {
    return <h1>No Results Found</h1>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {searched.map((x) => {
        return <p key={x?.name}>{x.name}</p>;
      })}
    </div>
  );
};
export default Display;
```

## Image Slider\_ Carousal

```js
import React, { useEffect, useState } from 'react'
import Button from './Button'

const Wrapper = () => {
  const images = [
    {
      img_link:
        'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      img_link:
        'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      img_link:
        'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      img_link:
        'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]
  const [item, setItem] = useState(0)
  function handlePrev() {
    item !== 0 ? setItem(item - 1) : setItem(images.length - 1)
  }
  {
    /*
     NOTE:  after every 5 seconds it changes thee images
     * */
  }
  useEffect(() => {
    const Time = setTimeout(() => {
      item === images.length - 1 ? setItem(0) : setItem(item + 1)
    }, 5000)
    return () => {
      clearTimeout(Time)
    }
  }, [item])
  function handleNext() {
    item === images.length - 1 ? setItem(0) : setItem(item + 1)
  }
  return (
    <div className=" h-96 mt-10 flex items-center  justify-center ">
      <Button onClick={handlePrev}>Prev</Button>
      {/* <img className="" src={images[item].img_link} alt="sliderImages" /> */}
      {/*
NOTE:
        Optimization:
        first load all the images and based on the index we show and hide the required
*/}
      {images.map((x, i) => {
        return (
          <img
            className={`w-[700px] h-[500px] object-contain  ${
              i === item ? 'block' : 'hidden'
            }`}
            key={x.img_link}
            src={x.img_link}
            alt="sliderImages"
          />
        )
      })}
      <Button onClick={handleNext}>Next</Button>
    </div>
  )
}

export default Wrapper
```

# Features

## Online Offline **important**

- whether users internet is online or offline
- instead of showing home page it shows you are offline
- online eventListener
- we will use `useEffect` for calling once
- and in the body we will import it and check if it is false we will show like you are offline
- we can show good images or UI something

```js
import { useState, useEffect } from 'react'
const useOnlineStatus = () => {
  //initially the online status is true
  const [status, setState] = useState(true)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setState(false)
    })
    window.addEventListener('online', () => {
      setState(true)
    })
  }, [])
  return status
}
export default useOnlineStatus
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

### state in react

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

## Example code

```js
import React from "react";
class Show extends React.Component {
  render() {
    return (
      <div>
        <h1> The value of the count is{this.props.count}</h1>
      </div>
    );
  }
}
export default Show;
------
import React from "react";
import Show from "./Show";
import Button from "./Button";
class Wrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decCount = () => {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <Show count={count} />
        <p
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          +
        </p>
        <Button Inc={this.incCount} />
      </>
    );
  }
}

export default Wrapper;
```

## Life cycle methods

- While rendering if it encounters `class based component` a new instance of a class is created , `then the constructor is called` and `then render is called`
- if the parent is also class based component

  1. new instance of parent class is created
  2. `parent constructor` is called
  3. `parent render` is called
  4. `child constructor` is called
  5. `child render` is called

- **apart from constructor and render method class based component also has `componentDidMount()` => _this will be called once the component is mounted_**

1. component is called
2. render method is called
3. componentDidMount is called

### when both has mounts then

1. parent constructor
2. parent render
3. child constructor
4. child render
5. child mount
6. parent mount

### if there are multiple childs

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

### This is done because=>

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

### important

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

## Harkirat explanation

1. component mounted
   if the dependency array changes then
1. return function called
1. useEffect funcion runs

```js
import { FunctioalC } from './Functional'
const CUstom = () => {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, 10000)
  }, [])
  return <div>{visible ? <FunctioalC /> : <div>Gone</div>}</div>
}
// firstTime logs => component mounted
//after 10secs => component unmounted
```

```js
function FunctioalC() {
  const [a, setA] = useState('')
  useEffect(() => {
    console.log('initial render')
    console.log(a)
    return () => {
      console.log('return thng called')
    }
  }, [a])

  return (
    <div>
      <input
        type="text"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border border-black px-3"
        placeholder="test"
      />
    </div>
  )
}

export { FunctioalC }
```

## lifeCycle Events in ClassBased Components

```js
import React from 'react'
class MyClassComponent extends React.Component {
  //inital render
  componentDidMount() {
    console.log('mounted Component')
  }
  //when unmounted
  componentWillUnmount() {
    console.log('unmounted component')
  }

  //when props or sate changes
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Component updated - Previous count:',
      prevState.count,
      'Current count:',
      this.state.count,
    )
  }
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  Inc = () => {
    this.setState({ count: this.state.count + 1 })
  }
  Dec = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Inc}>inc</button>
        <br />
        <button onClick={this.Dec}>Dec</button>
      </div>
    )
  }
}
export { MyClassComponent }
```


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




# recoil

## invalidating queries

- suppose after a post request if you want to refetch the data

```js

  const refresh = useRecoilRefresher_UNSTABLE(atom to be cllaed again);
  refresh()
```

## suspense

```js
<Suspense fallback ={"loading..."}>
//wrap here
</Suspense/>
```

## loading hasValue

```js
const { state, contents } = useRecoilValueLoadable(allTodos);
if (state === "loading") {
  return <div>Loading....</div>;
}
return (
  <div>
    <Addtodo />
    <div className="flex items-center w-1/2 flex-col gap-10">
      {contents.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  </div>
);
```

## Atom Family

- returns a funciton that returns a writable `RecoilState` atom
- returns same value for a particular input

```js

```

## atom and atom family

```js
import { atomFamily } from "recoil";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "todo 1 description",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "todo 2 description",
    completed: false,
  },
];
// default isn't a value anymore it is a function
// returns cached value
// returns actullay a atom
export const todosAtom = atomFamily({
  key: "todosAtom",
  default: (id) => {
    return todos.find((x) => x.id === id);
  },
});
```

```js
import { useRecoilValue } from "recoil";
import { todosAtom } from "./TodoAtomFamily";

const Show = () => {
  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
    </div>
  );
};

const Todo = ({ id }) => {
  const todo = useRecoilValue(todosAtom(id));
  return (
    <div className="flex gap-4">
      <h1> {todo.title}</h1>
      <h1> {todo.description}</h1>
    </div>
  );
};
export default Show;
```


## async atomfamily and atoms

```js
import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
export const allTodos = atom({
  key: "allTodosAtom",
  default: selector({
    key: "allTodosSelector",
    get: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
      );
      return data;
    },
  }),
});

export const particularTodo = atomFamily({
  key: "particularTodo",
  default: selectorFamily({
    key: "particularTodoSelector",
    get: (id) => async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      return data;
    },
  }),
});
```
