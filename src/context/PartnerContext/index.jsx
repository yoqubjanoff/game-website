import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const PatrnerContext = createContext();

export const usePartnerContext = () => useContext(PatrnerContext);

export const PartnerContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <PatrnerContext.Provider value={[state, dispatch]}>
      {children}
    </PatrnerContext.Provider>
  );
};
