import React from "react";

const Card1 = ({ name, price }) => {
  return (
    <div className="border border-black text-blue-500 h-40 w-60  flex flex-col items-center gap-4">
      <h1>{name}</h1>
      <p>{price}</p>
      <button className="px-4 py-2 rounded-md bg-blue-300 hover:bg-blue-400 ">
        Buy
      </button>
    </div>
  );
};

export default Card1;
