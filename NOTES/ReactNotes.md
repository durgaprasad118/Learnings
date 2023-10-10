## Use State Hook

- named Import
- useState() returns an array of two elements first one is state variable and 2nd is used to set the state
- const [value,setValue] = useState(initialValue);
- `The above is destructured`

```js
const arr = useState(initialValue)
const value = arr[0]
const setValue = arr[1]
```

- React stores the initial state in the intial time and ignores in the rest of the renders
- `useState(Math.random())`
- Even if we ue `Math.random()` only what is rendered initially that is only stored

- We can't modify value directly we need to sue `setValue()` to change

## Reacting to the input with State

- **Step 1: Identify your component’s different visual states**

## Routing

- `npm i react-router-dom`
- Majorly no need of App.jsx
- But we can use it for making layout
- In `app.jsx` import the Navbar and footer of the Website
- Also `import {Outlet} from 'react-router-dom'`
- While returning it return

```js
<Navbar>
<Outlet>// this acts as a tunnel
<Footer>
```

- in main.jsx

```js
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
```

- Define routing configuration

```js
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="/"
        element={<Hero />}
      ></Route>
      <Route
        path="/about"
        element={<About />}
      ></Route>
      <Route
        path="/contact"
        element={<Contact />}
      ></Route>
    </Route>,
  ),
)
```

- while rendering into the dom do this

```js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
```

- On clicking button in navbar use `Link` , imported from react-router-dom and `to="/path"`
- Okay now in the navbar it also gives `NavLink` which is used to show which page is active
- use the below method to show which navlink is active

```js
  <NavLink
          to="/about"
          className={({ isActive }) =>
            `btn ${isActive ? 'text-orange-700' : 'text-black'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `btn ${isActive ? 'text-orange-700' : 'text-black'}`
          }
        >
          Contact
        </NavLink>
```

## Custom Hooks

- Find out the end goal
-



## Important

- While using loops use keys
- While taking input number convert to number to avoid string cases
  - `Number(e.target.value)`
