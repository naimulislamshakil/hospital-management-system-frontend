import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { HomePage, LoginPage, PatientsPage, RegisterPage } from './Route';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Routes>
				{/* <Route path="/" element={<h />} /> */}
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<HomePage />}>
					<Route index element={<Dashboard />} />
					<Route path="/dashboard/patients" element={<PatientsPage />} />
					{/* <Route
						path="/dashboard/patient/view/:id"
						element={<SinglePatient />}
					/> */}
					{/* <Route path="/dashboard/appointments" element={<Appointments />} />
					<Route path="/dashboard/payments" element={<Payments />} />
					<Route path="/dashboard/invoices" element={<Invoices />} />
					<Route path="/dashboard/services" element={<Services />} />
					<Route path="/dashboard/medicines" element={<Medicine />} />
					<Route path="/dashboard/campaings" element={<Campaings />} />
					<Route path="/dashboard/settings" element={<Settings />} /> */}
				</Route>
				{/* <Route path="/login" element={<Singin />} />
				<Route path="/singup" element={<Singup />} />
				<Route path="/solution" element={<ComingSoon />} />
				<Route path="/resource" element={<ComingSoon />} />
				<Route path="/developers" element={<ComingSoon />} />
				<Route path="/pricing" element={<ComingSoon />} /> */}
			</Routes>

			<Toaster />
		</div>
	);
}

export default App;
