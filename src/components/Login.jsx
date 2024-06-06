import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../lib/toast';
import { useMutation } from 'react-query';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const data = { email, password };

	const {
		data: results,
		mutate,
		isLoading,
		reset,
	} = useMutation({
		mutationFn: async () => {
			axios.defaults.withCredentials = true;
			const res = await axios.post(
				'http://localhost:5000/api/v1/user/login',
				data
			);

			console.log({ res });

			

			return res.data;
		},
	});
	console.log({ results });

	if (results?.success === true) {
		successToast(results?.message);
		navigate('/');
	}

	if (results?.success === false) {
		errorToast(results?.error);
		reset();
	}

	const onSubmit = (event) => {
		event.preventDefault();

		mutate(data);
	};
	return (
		<section class="bg-primary p-3 p-md-4 p-xl-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
						<div class="card border-0 shadow-sm rounded-4">
							<div class="card-body p-3 p-md-4 p-xl-5">
								<div class="row">
									<div class="col-12">
										<div class="mb-5">
											<h2 class="h3 text-uppercase">Login</h2>
											<h3 class="fs-6 fw-normal text-secondary m-0">
												Enter your details to login!!
											</h3>
										</div>
									</div>
								</div>
								<form onSubmit={onSubmit}>
									<div class="row gy-3 overflow-hidden">
										<div class="col-12">
											<div class="form-floating mb-3">
												<input
													type="email"
													class="form-control"
													name="email"
													id="email"
													placeholder="name@example.com"
													onChange={(e) => setEmail(e.target.value)}
												/>
												<label for="email" class="form-label">
													Email
												</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-floating mb-3">
												<input
													type="password"
													class="form-control"
													name="password"
													id="password"
													placeholder="*********"
													onChange={(e) => {
														setPassword(e.target.value);
													}}
												/>
												<label for="password" class="form-label">
													Password
												</label>
											</div>
										</div>
										<div class="col-12">
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value=""
													name="iAgree"
													id="iAgree"
													required
												/>
												<label
													class="form-check-label text-secondary"
													for="iAgree"
												>
													I agree to the{' '}
													<a
														href="#!"
														class="link-primary text-decoration-none"
													>
														terms and conditions
													</a>
												</label>
											</div>
										</div>
										<div class="col-12">
											<div class="d-grid">
												<input
													disabled={isLoading}
													class="btn bsb-btn-2xl btn-primary"
													type="submit"
													value="Login🥰"
												/>
											</div>
										</div>
									</div>
								</form>
								<div class="row">
									<div class="col-12">
										<hr class="mt-5 mb-4 border-secondary-subtle" />
										<p class="m-0 text-secondary text-center">
											Haven't any account'?{' '}
											<Link
												to="/register"
												class="link-primary text-decoration-none"
											>
												Register
											</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
