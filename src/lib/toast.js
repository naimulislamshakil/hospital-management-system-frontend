import toast from 'react-hot-toast';

export const successToast = (mesg) => {
	toast.success(mesg, {
		position: 'bottom-center',
		reverseOrder: false,
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
};
export const errorToast = (mesg = 'Pleace check all input field.') => {
	toast.error(mesg, {
		position: 'bottom-center',
		reverseOrder: false,
		style: {
			borderRadius: '10px',
			background: '#333',
			color: '#fff',
		},
	});
};
