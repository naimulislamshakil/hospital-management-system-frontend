import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/loginData', async (data) => {
	
	const responce = await fetch('http://localhost:5000/api/v1/user/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return responce.json();
});

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		isLoading: false,
		error: null,
		results: {},
	},

	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.error = null;
				state.isLoading = false;
				state.results = null;
				state.results = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.error = null;
				state.error = action.error;
				state.isLoading = false;
				state.results = {};
			});
	},
});

export default loginSlice.reducer;
