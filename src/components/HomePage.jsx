import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToast } from '../lib/toast';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const Home = () => {
	const navigate = useNavigate();

	const {
		data: results,
		error,
		isLoading,
		refetch,
		remove,
	} = useQuery({
		queryKey: 'get',
		queryFn: async () => {
			axios.defaults.withCredentials = true;
			const res = await axios.get(
				'http://localhost:5000/api/v1/user/current_user'
			);

			return res.data;
		},
	});

	const {
		data: accessResults,
		error: accessError,
		isLoading: accessLoading,
		mutate,
		reset,
	} = useMutation({
		queryKey: 'get',
		queryFn: async () => {
			axios.defaults.withCredentials = true;
			const res = await axios.post(
				'http://localhost:5000/api/v1/user/refresh_token'
			);

			return res.data;
		},
	});

	console.log({ results, isLoading });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (results?.success === false) {
		mutate();
		// clear();
	}

	console.log({ accessError, accessLoading, accessResults });

	if (accessResults?.success === false) {
		navigate('/login');
		errorToast(accessResults?.error);
		// clear();
	}

	return <div>Home</div>;
};

export default Home;
