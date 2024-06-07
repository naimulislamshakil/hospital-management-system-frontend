import React from 'react';
import logo from '../images/logo.png';

const Logo = () => {
	return (
		<div className="d-flex justify-content-center align-items-center flex-row mt-3">
			<img
				src={logo}
				class="rounded-circle"
				style={{ width: '120px' }}
				alt="Avatar"
			/>
		</div>
	);
};

export default Logo;
