import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Show = () => {
  const value = useSelector((state) => state.counter.count);
  return <div>The value of the count is:{value}</div>;
};

export default Show;
