import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice/authSlice';
import loginReducer from './Slice/loginSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		login:loginReducer
	},
});

export default store;
