import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const HomeContext = createContext();

export const useHomeContext = () => useContext(HomeContext);

export const HomeContexPovider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<HomeContext.Provider value={[state, dispatch]}>
			{children}
		</HomeContext.Provider>
	);
};
