import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { resetPassword, useAuth } from '../../Authentication/useAuth';
import './Signin.css';

const AdminLogin = () => {
	const { register, handleSubmit, watch, errors } = useForm();

	const auth = useAuth();

	const onSubmit = (data) => {
		if (data.email && data.password) {
			auth.signInAdmin(data.email, data.password);
		}
	};

	return (
			<div className="sign-up">
				<div className="container">
					<div className="text-center py-4">
						<Link to="/admin" class="text-info nav-link">
							<h2>Smart Dhopa Admin Pannel</h2>
						</Link>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="py-3">
						<h1 className="lead text-center py-3">Welcome back!</h1>
						{auth.user != null && <p className="text-danger"> {auth.user.error}</p>}

						<div className="form-group my-4">
							<input
								name="email"
								className="form-control"
								value="smart.dhopa@gmail.com"
								ref={register({ required: true })}
								placeholder="Email"
							/>
							{errors.email && <span className="error">Email is required</span>}
						</div>

						<div className="form-group my-4">
							<input
								type="password"
								name="password"
								value="Smart@123"
								className="form-control"
								ref={register({ required: true })}
								placeholder="Password"
							/>
							{errors.password && <span className="error">Password is required</span>}
						</div>
						<p className="forget-text" onClick={() => resetPassword(auth.user.email)}>Forgot your password?</p>

						<div className="form-group text-center">
							<button className="btn btn-primary w-25" type="submit">
								Log In
							</button>
						</div>
					</form>
				</div>
			</div>
	);
};

export default AdminLogin;




