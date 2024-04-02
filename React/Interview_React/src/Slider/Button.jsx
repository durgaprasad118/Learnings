import React from "react";

const Button = ({ children = "click", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 w-20 py-2 border rounded-md bg-blue-500 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
