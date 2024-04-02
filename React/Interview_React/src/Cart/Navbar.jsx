import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/c")} className="fixed top-0 bg-blue-400 ">
      Cart {cart.length}
    </div>
  );
};

export default Navbar;
