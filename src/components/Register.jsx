import React, { useState } from 'react';
import { errorToast, successToast } from '../lib/toast';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

const Register = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const navigate = useNavigate();

	const data = { email, password, firstName, lastName };
	const {
		data: results,
		mutate,
		isLoading,
	} = useMutation({
		mutationFn: async () => {
			const res = await fetch('http://localhost:5000/api/v1/user/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});

			return res.json();
		},
	});

	

	if (results?.success === true) {
		successToast(results?.message);
		navigate('/login');
	}

	if (results?.success === false) {
		errorToast(results?.error);
	}

	const onSubmit = (event) => {
		event.preventDefault();

		mutate(data);
	};

	return (
		<section class="bg-primary">
			{/* navbar */}

			<nav class="navbar container ">
				<div class="container-fluid">
					<Link to="/" class="navbar-brand">
						Navbar
					</Link>
					<form class="d-flex">
						<input
							class="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button class="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
			<div className="p-3 p-md-4 p-xl-5">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5">
							<div class="card border-0 shadow-sm rounded-4">
								<div class="card-body p-3 p-md-4 p-xl-5">
									<div class="row">
										<div class="col-12">
											<div class="mb-5">
												<h2 class="h3 text-uppercase">Registration</h2>
												<h3 class="fs-6 fw-normal text-secondary m-0">
													Enter your details to register!!
												</h3>
											</div>
										</div>
									</div>
									<form onSubmit={onSubmit}>
										<div class="row gy-3 overflow-hidden">
											<div class="col-12">
												<div class="form-floating mb-3">
													<input
														type="text"
														class="form-control"
														name="firstName"
														id="firstName"
														placeholder="First Name"
														onChange={(e) => setFirstName(e.target.value)}
													/>
													<label for="firstName" class="form-label">
														First Name
													</label>
												</div>
											</div>
											<div class="col-12">
												<div class="form-floating mb-3">
													<input
														type="text"
														class="form-control"
														name="lastName"
														id="lastName"
														placeholder="First Name"
														onChange={(e) => setLastName(e.target.value)}
													/>
													<label for="lastName" class="form-label">
														Last Name
													</label>
												</div>
											</div>
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
											<div class="col-12 text-center">
												<div class="form-check">
													<input
														class="form-check-input text-center"
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
														value="Create a Account🥰"
													/>
												</div>
											</div>
										</div>
									</form>
									<div class="row">
										<div class="col-12">
											<hr class="mt-5 mb-4 border-secondary-subtle" />
											<p class="m-0 text-secondary text-center">
												Already have an account?{' '}
												<Link
													to="/login"
													class="link-primary text-decoration-none"
												>
													Sign in
												</Link>
											</p>
										</div>
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

export default Register;
