import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './components/Authentication/useAuth';
import Login from './components/Authentication/Login';
import Header from './components/Header/Header';
import About from './components/Home/About';
import ChooseUs from './components/Home/ChooseUs';
import ContactUs from './components/Home/ContactUs';
import Footer from './components/Home/Footer';
import Hero from './components/Home/Hero';
import Review from './components/Home/Review';
import Services from './components/Home/Services';
import Works from './components/Home/Works';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Header />
							<Hero />
							<About />
							<Services />
							<Works />
							<ChooseUs />
							<Review />
							<ContactUs />
							<Footer />
						</Route>

						<Route path="/login">
							<Login />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
