## Callbacks, promises, async await

```js
function c1(cb) {
  setTimeout(() => {
    console.log('c1 called')
    cb()
  }, 1000)
}

function c2(cb) {
  setTimeout(() => {
    console.log('c2 called')
    cb()
  }, 1000)
}
function c3(cb) {
  setTimeout(() => {
    console.log('c3 called')
    cb()
  }, 1000)
}

c1(() => {
  c2(() => {
    c3(() => {
      console.log('done all three')
    })
  })
})

function P1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p1 called')
      resolve()
    }, 1000)
  })
}

function P2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p2 called')
      resolve()
    }, 1000)
  })
}

function P3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('p3 called')
      resolve()
    }, 1000)
  })
}

P1()
  .then(() => P2())
  .then(() => P3())
  .then(() => {
    console.log('all threetasks are done')
  })

async function K() {
  await P1()
  await P2()
  await P3()
  console.log('all threetasks are done')
}
K()
```

## Classbased Components

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
---
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

## React.memo

```js
// memo => skips re-renders a component when the props are unchanged
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

## useReducer

```js
//useReducer
// Lets you add reducer  to your component
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

```js
//context

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

```js

//useEffect and cleanup
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      let Interval = setInterval(() => {
        setCount((count) => count + 1);
        console.log(count);
      }, 1000);
    return () => clearInterval(Interval)
  },[]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;




//good example of useEffect
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  const [num, setNum] = useState(1);


  async function fetchData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${num}`,
    );
    const data = await response.json();
    setUser(data);
  }
  useEffect( () => {
   fetchData()
  }, [num]);

  return (
    <div>
      <h1>Hello {user?.username}</h1>
      <button
        onClick={() => {
          num <= 10 ? setNum(num + 1) : setNum(1);
        }}
      >
        Change User
      </button>
    </div>
  );
}
export default App;
```

## useRef

````js
//hook that gvies reference to a value that  is not needed for re-rendering
// focusing on input
function App() {
  const ref = useRef(null);
  return (
    <div>
      <h1>Hello </h1>
      <input type="text" ref={ref}/>
      <button
        onClick={() => {
          ref.current.focus()
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default App;




import "./App.css";
import { useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const renderCount = useRef(1);
  const [a, setA] = useState("");
  console.log(`The component is rendered ${renderCount.current} times`);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        gap: "3px",
      }}
    >
      <input
        type="text"
        ref={ref}
        value={a}
        onChange={(e) => {
          setA(e.target.value);
          renderCount.current= renderCount.current + 1;
        }}
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(ref.current.value);
          alert(`The text copied is:  ${ref.current.value}`);
        }}
      >
        Click me to copy from input
      </button>
    </div>
  );
}
export default App;


## useCallback

```js
/*
Caches the function definition between  the re-renders.
- here the button component doesn’t need to re-render every time, though we use memo ,cz of reference type it re-renders
- using useCallback hook fixes this
- So button is rendered initially only

*/
import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { memo } from "react";
const Button = memo(({ children, onclick }) => {
  console.log("Rendered Button component");
  return <button onClick={onclick}>{children}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count=>count + 1);
  // }
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <h1>The value of the count is : {count}</h1>
      <Button onclick={handleClick}>Inc</Button>
    </div>
  );
}
export default App;


````

## useMemo

```js
/*
useMemo hook :
- caches the result of a calculation between re-renders
- We can see the time difference of  todo app while switching filters
- useMemo(()=>{},[dep Array])
- on the initial render it calculates with no arguments and if the dep array changes then it calculates

*/

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

## Lazy Loading

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

## Routing

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

## Context

### Theme Context

# App

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

## Button

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

## Data fetching and posting

## Getting data

> In fetch we werite url, {method, headers:{},body:JSON.stringify({})}
> `fetch(url,{method:"POST/PUT/DELETE",
headers:{},body:JSON.stringify({})})`

> in axios we write url,{body:{}},{headers:{}}
> `axios.get/post/put(url,{body:{}},{headers:{{}}})`

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

# Posting data

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

## Loading, error - Tanstack query

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

## Debounce , ThrottleSearch

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
