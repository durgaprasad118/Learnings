import React, { useState } from "react";
import { ThemeContextProvider } from "./ThemeContext";
import Page from "./Page";

const Appp = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <ThemeContextProvider
        value={{
          theme,
          setTheme,
        }}
      >
        <Page />
      </ThemeContextProvider>
    </div>
  );
};

export default Appp;
