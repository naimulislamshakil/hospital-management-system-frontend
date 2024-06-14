import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Patients = () => {
	const [currentDate, setCurrentDate] = useState('');
	const [image, setImage] = useState('');
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			name: '',
			email: '',
			gender: 'male',
			phoneNumber: '',
			emergencyNumber: '',
			address: '',
		},
	});

	const onsubmit = (data) => {
		const date = dayjs(currentDate).format('DD/MM/YYYY');
		const datas = { ...data, dob: date, image };
		console.log({ datas });
		reset();
	};

	return (
		<div
			className="d-flex flex-row justify-content-center align-items-center"
			style={{ minHeight: '100vh' }}
		>
			<div className="card" style={{ width: '65%' }}>
				<div class="card-body">
					<form
						onSubmit={handleSubmit(onsubmit)}
						className="w-75 mx-auto text-center"
					>
						<div className="my-4">
							<h3 className="text-uppercase">Add Patient!!!</h3>
						</div>
						<input
							class="form-control rounded-2"
							type="text"
							placeholder="Patients Name"
							{...register('name')}
						/>
						<input
							class="form-control rounded-2 mt-4"
							type="text"
							placeholder="Enter your Email...."
							{...register('email')}
						/>
						<input
							class="form-control rounded-2 mt-4"
							type="text"
							placeholder="Enter your phone Number..."
							{...register('phoneNumber')}
						/>
						<input
							class="form-control rounded-2 mt-4"
							type="text"
							placeholder="Enter your emergency number...."
							{...register('emergencyNumber')}
						/>

						<select class="form-control rounded-2 mt-4" {...register('gender')}>
							<option selected value="male">
								Male
							</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>

						<DatePicker
							className="w-100 mt-4"
							value={currentDate}
							onChange={(data) => setCurrentDate(data)}
						/>

						<input
							className="border border-2 rounded rounded-1 w-100 mt-4"
							id="file_input"
							type="file"
							onChange={(e) => setImage(e.target.value)}
						/>

						<textarea
							class="form-control rounded-2 mt-4"
							type="text"
							placeholder="Enter your address....."
							{...register('address')}
						/>

						<button class="btn button">Add patient🥰🥰</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Patients;
