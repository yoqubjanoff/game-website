import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';
import { initialState } from './reducer';

export const PcMbContex = createContext();

export const usePcMbContext = () => useContext(PcMbContex);

export const PcMbContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<PcMbContex.Provider value={[state, dispatch]}>
			{children}
		</PcMbContex.Provider>
	);
};
