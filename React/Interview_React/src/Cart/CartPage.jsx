import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      {cart.map((x) => {
        return <CartProduct key={x.Item.id} {...x} />;
      })}
    </div>
  );
};

export default CartPage;
