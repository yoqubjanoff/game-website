import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './ToastStyle';
import { ToastContainer } from 'react-toastify';

function ToastProvider({ children }) {
	return (
		<Container>
			{children}
			<ToastContainer />
		</Container>
	);
}
export default ToastProvider;