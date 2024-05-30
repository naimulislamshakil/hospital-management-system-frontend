import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const singup = createAsyncThunk('auth/singUpData', async (data) => {
	console.log({ data });
	const responce = await fetch('http://localhost:5000/api/v1/user/register', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	return responce.json();
});

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoading: false,
		error: null,
		results: {},
	},
	reducers: {
		clearMessage: (state, action) => {
			console.log('object');
			state.error = null;
			state.results = {};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(singup.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(singup.fulfilled, (state, action) => {
				state.error = null;
				state.isLoading = false;
				state.results = null;
				state.results = action.payload;
			})
			.addCase(singup.rejected, (state, action) => {
				state.error = null;
				state.error = action.error;
				state.isLoading = false;
				state.results = {};
			});
	},
});

// export const { clearMessage } = authSlice.;

export default authSlice.reducer;
