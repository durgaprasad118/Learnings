import { Provider } from "react-redux";
import { store } from "./store";
import ProductsDisplay from "./ProductsDisplay";
import Items from "./Items";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProduct from "./CartProduct";
import CartPage from "./CartPage";
import Wrap from "./Wrap";

const Wrapper = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrap />}>
            <Route path="/" element={<ProductsDisplay />}></Route>
            <Route path="/c" element={<CartPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Wrapper;
