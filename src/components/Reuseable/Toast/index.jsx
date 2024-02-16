import { toast } from 'react-toastify';
export default function Toast({ type, message, duration }) {
	toast[`${type}`](message, {
		position: 'top-center',
		autoClose: duration || 2000,
		hideProgressBar: true,
	});
}
