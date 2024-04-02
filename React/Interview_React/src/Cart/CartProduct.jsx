import React from "react";
import { useDispatch } from "react-redux";
import { plus, minus, removeFromCart } from "./CartSlice";

const CartProduct = ({ Item, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-[75%] h-40 flex items-center justify-between">
      <h1>{Item.title}</h1>
      <h1>{Item.price * qty}</h1>
      <button onClick={() => dispatch(minus(Item.id))}>-</button>
      <h1>{qty}</h1>
      <button onClick={() => dispatch(plus(Item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(Item.id))}>Remove</button>
    </div>
  );
};

export default CartProduct;
