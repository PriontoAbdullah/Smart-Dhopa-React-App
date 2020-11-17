import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import google from '../../images/auth/google.svg';
import facebook from '../../images/auth/facebook.svg';
import login from '../../images/auth/log.svg';
import register from '../../images/auth/register.svg';

const Login = () => {
	const [ toggled, setToggled ] = useState(false);

	const buttonClass = toggled ? 'containerz sign-up-mode' : 'containerz';

	return (
		<section id="Amazing-Login-Page">
			<div className={buttonClass}>
				<div className="forms-containerz">
					<div className="signin-signup">
						<form action="#" className="sign-in-form">
							<h2 className="title">Sign in</h2>
							<div className="input-field">
								<FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
								<input type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<FontAwesomeIcon icon={faLock} className="input-fieldi" />
								<input type="password" placeholder="Password" />
							</div>
							<input type="submit" value="Login" className="btnz solid" />
							<p className="social-text">Or Sign in with social platforms</p>
							<div className="social-media">
								<button className="social-icon">
								<img src={google} width="25px" />
								<span className="mx-2">Sign in with Google</span>
								</button>
								<button className="social-icon">
								<img src={facebook} width="27px" />
								<span className="mx-2">Sign in with Facebook </span>
								</button>
							</div>
						</form>
						<form action="#" className="sign-up-form">
							<h2 className="title">Sign up</h2>
							<div className="input-field">
								<FontAwesomeIcon icon={faUser} className="input-fieldi" />
								<input type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
								<input type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<FontAwesomeIcon icon={faLock} className="input-fieldi" />
								<input type="password" placeholder="Password" />
							</div>
							<div className="input-field">
								<FontAwesomeIcon icon={faLockOpen} className="input-fieldi" />
								<input type="password" placeholder="Re-Password" />
							</div>
							<input type="submit" className="btnz" value="Sign up" />
						</form>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>New here ?</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
							</p>
							<button className="btnz transparent" onClick={() => setToggled(!toggled)} id="sign-up-btn">
								Sign up
							</button>
						</div>
						<img src={login} className="image" alt="" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
							</p>
							<button className="btnz transparent" onClick={() => setToggled(!toggled)} id="sign-in-btn">
								Sign in
							</button>
						</div>
						<img src={register} className="image" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
