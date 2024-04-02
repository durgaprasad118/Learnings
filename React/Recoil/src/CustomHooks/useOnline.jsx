import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const status = window.navigator.onLine;
    status ? setOnline(true) : setOnline(false);
  }, [setOnline]);
  return online;
};

export default useOnline;
