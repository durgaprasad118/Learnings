import { createContext, useContext } from "react";

const countContext = createContext();
export const CountContextProvider = countContext.Provider;

export const useCount = () => {
  return useContext(countContext);
};
