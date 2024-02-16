import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const RecoContext = createContext();

export const useRecoContext = () => useContext(RecoContext);
export const RecoContextPovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <RecoContext.Provider  value={[state, dispatch]}>
      {children}
    </RecoContext.Provider>
  );
};
