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
