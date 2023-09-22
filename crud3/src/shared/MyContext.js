import React, { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext(null);

export default function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
}
