import firebase from 'firebase/app';
import 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';

//***************** Fire base Initialization ************************
firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = (props) => {
	const auth = Auth();
	return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

//***************** Redirect review item to signIn ************************
export const PrivateRoute = ({ children, ...rest }) => {
	const auth = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export const PrivateAdminRoute = ({ children, ...rest }) => {
	const auth = useAuth();
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.user ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/admin',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
};

export const getUser = (user) => {
	const { email, displayName, photoURL } = user;
	return { email, name: displayName, photo: photoURL };
};

export const resetPassword = (email) => {
	var auth = firebase.auth();

	auth
		.sendPasswordResetEmail(email)
		.then(function() {
			// Email sent.
		})
		.catch(function(error) {
			// An error happened.
		});
};

const Auth = () => {
	const [ user, setUser ] = useState(null);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				const currentUser = user;
				setUser(currentUser);
			}
		});
	}, []);

	const verifyEmail = () => {
		var user = firebase.auth().currentUser;

		user
			.sendEmailVerification()
			.then(function() {
				// Email sent.
			})
			.catch(function(error) {
				// An error happened.
			});
	};

	//***************** sign in with popup Start ************************
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		return firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const signedInUser = getUser(result.user);
				setUser(signedInUser);
				window.history.back();
				return result.user;
			})
			.catch((error) => {
				setUser(null);
				return error.message;
			});
	};

	const signInWithFacebook = () => {
		const fbProvider = new firebase.auth.FacebookAuthProvider();

		return firebase
			.auth()
			.signInWithPopup(fbProvider)
			.then((result) => {
				var token = result.credential.accessToken;

				const fbSignedInUser = getUser(result.user);
				setUser(fbSignedInUser);
				window.history.back();
				return result.user;
			})
			.catch(function(error) {
				setUser(null);
				return error.message;
			});
	};

	const signIn = (email, password) => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				setUser(result.user);
				window.history.back();
			})
			.catch((error) => {
				setUser(null);
				return error.message;
			});
	};

	const signInAdmin = (email, password) => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				setUser(result.user);
				window.location.replace("/admin/dashboard");
			})
			.catch((error) => {
				setUser(null);
				return error.message;
			});
	};

	const signUp = (email, password, name) => {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				firebase
					.auth()
					.currentUser.updateProfile({
						displayName: name
					})
					.then(() => {
						setUser(result.user);
						verifyEmail();
						window.history.back();

					});
			})
			.catch((error) => {
				setUser(null);
				return error.message;
			});
	};

	const signOut = () => {
		return firebase
			.auth()
			.signOut()
			.then((result) => {
				setUser(null);
				return true;
			})
			.catch((error) => {
				console.log(error);
				return error.message;
			});
	};

	return {
		user,
		signIn,
		signInAdmin,
		signUp,
		signOut,
		signInWithGoogle,
		signInWithFacebook
	};
};

export default Auth;
