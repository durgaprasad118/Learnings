import React, { useEffect, useState } from "react";

const useInterval = () => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setVal((val) => val + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setVal]);
  return val;
};

export default useInterval;
