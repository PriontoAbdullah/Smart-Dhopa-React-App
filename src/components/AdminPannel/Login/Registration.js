import { MDBContainer, MDBNotification } from 'mdbreact';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { useAuth } from '../../Authentication/useAuth';
import Sidebar from '../Sidebar/Sidebar';
import './Signin.css';

const Registration = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const auth = useAuth();

	const onSubmit = (data) => {
		if (data.name && data.email && data.password && data.confirm_password) {
			auth.signUp(data.email, data.confirm_password, data.name);
		}
	};

	const containerStyle = {
		backgroundColor: '#F4FDFB',
		height: '100vh'
	};

	return (
		<div style={containerStyle}>
			<Row>
				<Col md={2}>
					<Sidebar />
				</Col>
				<Col md={5}>
					<div className="sign">
						<div className="container">
							<div className="text-center mt-4">
								<Link to="/admin/registration" class="text-info nav-link">
									<h2>Smart Dhopa Admin Registration</h2>
								</Link>
							</div>

							<form onSubmit={handleSubmit(onSubmit)} className="py-2 px-5">
								{auth.user != null && <p className="text-danger">{auth.user.error}</p>}

								<div className="form-group my-4">
									<input
										name="name"
										className="form-control"
										ref={register({
											required: 'Name is required',
											pattern: {
												value: /^(?=^.{6,20}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/i,
												message: 'Name must be 6 - 20 characters & Minimum 2 words'
											}
										})}
										placeholder="Name"
									/>
									<span className="error">{errors.name && errors.name.message}</span>
								</div>

								<div className="form-group my-4">
									<input
										name="email"
										className="form-control"
										ref={register({
											required: 'Email is required',
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: 'Invalid email address'
											}
										})}
										placeholder="Email"
									/>
									<span className="error">{errors.email && errors.email.message}</span>
								</div>

								<div className="form-group my-4">
									<input
										type="password"
										name="password"
										className="form-control"
										ref={register({
											required: 'Password is required',
											pattern: {
												value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&;:])[A-Za-z\d@$!%*#?&;:]{8,}$/i,
												message:
													'Minimum eight characters, at least one letter, one number and one special character'
											}
										})}
										placeholder="Password"
									/>
									<span className="error">{errors.password && errors.password.message}</span>
								</div>

								<div className="form-group my-4">
									<input
										type="password"
										name="confirm_password"
										className="form-control"
										ref={register({
											validate: (value) => value === watch('password')
										})}
										placeholder="Confirm Password"
									/>
									{errors.confirm_password && <span className="error">Passwords don't match.</span>}
								</div>

								<div class="form-group">
									<select class="form-control">
										<option>Moderator</option>
										<option>Editor</option>
										<option>Manager</option>
										<option>Admin</option>
									</select>
								</div>

								<div className="form-group my-4 ">
									<button className="btn btn-primary btn-block w-25" type="submit">
										Sign Up
									</button>
								</div>
							</form>
						</div>
					</div>
				</Col>
				<Col md={5}>
					<MDBContainer className="mt-5">
						<MDBNotification
							show
							fade
							icon="envelope"
							iconClassName="green-text"
							title="New Message"
							message="Hello, user! You have a new message."
							text="just now"
						/>
						<MDBNotification
							show
							fade
							iconClassName="text-info"
							title="Smart Dhopa"
							message="See? Just like this."
							text="just now"
						/>
						<MDBNotification
							show
							fade
							iconClassName="text-info"
							title="Smart Dhopa"
							message="Heads up, toasts will stack automatically"
							text="2 seconds ago"
						/>
					</MDBContainer>
				</Col>
			</Row>
		</div>
	);
};

export default Registration;
