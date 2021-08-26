import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customers from './components/AdminPannel/Customer/Customers';
import AdminDashboard from './components/AdminPannel/Dashboard/AdminDashboard';
import AdminLogin from './components/AdminPannel/Login/AdminLogin';
import Registration from './components/AdminPannel/Login/Registration';
import Orders from './components/AdminPannel/Orders/Orders';
import Product from './components/AdminPannel/Products/Products';
import Support from './components/AdminPannel/Support/Support';
import Login from './components/Authentication/Login';
import { AuthProvider, PrivateRoute } from './components/Authentication/useAuth';
import Bag from './components/CartAndShipment/Bag';
import Header from './components/Header/Header';
import About from './components/Home/About';
import ChooseUs from './components/Home/ChooseUs';
import ContactUs from './components/Home/ContactUs';
import Footer from './components/Home/Footer';
import Hero from './components/Home/Hero';
import Review from './components/Home/Review';
import Services from './components/Home/Services';
import Works from './components/Home/Works';
import Preloader from './components/Preloader/Preloader';
import DryCleaning from './components/Services/DryCleaning';
import EmergencyService from './components/Services/EmergencyService';
import IronAndFold from './components/Services/IronAndFold';
import SubscriptionBased from './components/Services/SubscriptionBased';
import WashAndFold from './components/Services/WashAndFold';
import WashAndIron from './components/Services/WashAndIron';
import Dashboard from './components/UserDashboard/Dashboard';
import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from './utilities/databaseManager';
export const DataContext = createContext();

function App() {
	const [ cart, setCart ] = useState([]);
	const [ order, setOrder ] = useState([]);
	const [ products, setProducts ] = useState([]);
	const [ preLoaderVisibility, setPreLoaderVisibility ] = useState(true);

	useEffect(
		() => {
			fetch('https://smart-dhopa-server.herokuapp.com/allOrders')
				.then((res) => res.json())
				.then((data) => setOrder(data));
		},
		[ order.length ]
	);

	useEffect(
		() => {
			fetch('https://smart-dhopa-server.herokuapp.com/products')
				.then((res) => res.json())
				.then((data) => setProducts(data));
			setPreLoaderVisibility(false);
		},
		[ products.length ]
	);

	const contextData = { order, setOrder, products, setProducts };

	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);

		if (products.length > 0) {
			const previousCart = productKeys.map((existingKey) => {
				const product = products.find((productItem) => productItem.key === existingKey);
				// console.log(existingKey, savedCart[existingKey]);
				product.quantity = savedCart[existingKey];
				return product;
			});
			setCart(previousCart);
		}
	}, []);

	const handleAddProduct = (currentProduct) => {
		const alreadyAdded = cart.find((item) => item.id === currentProduct.id);

		if (alreadyAdded) {
			const reamingCarts = cart.filter((item) => item.id !== currentProduct);
			setCart(reamingCarts);
			addToDatabaseCart(currentProduct.id, currentProduct.quantity);
		} else {
			const newCart = [ ...cart, currentProduct ];
			setCart(newCart);
			addToDatabaseCart(currentProduct.id, currentProduct.quantity);
		}
	};

	const handleRemoveProduct = (currentProduct) => {
		const reamingProducts = cart.filter((item) => item.id !== currentProduct.id);
		setCart(reamingProducts);
		removeFromDatabaseCart(currentProduct.id);
	};

	const [ selectedDate, setSelectedDate ] = useState(new Date());

	let exactDate = '';

	{
		selectedDate.getDate() > 9 ? (exactDate = selectedDate.getDate()) : (exactDate = `0${selectedDate.getDate()}`);
	}

	const getDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${exactDate}`;
	const getTime = `${selectedDate.getHours() + 1}:00`;

	const [ deliveryDetails, setDeliveryDetails ] = useState({
		fullName: null,
		email: null,
		mobileNumber: null,
		toDoor: 'Delivery To Door',
		road: null,
		address: null,
		getDate: getDate,
		getTime: getTime
	});

	const deliveryDetailsHandler = (data) => {
		setDeliveryDetails(data);
	};

	const clearCart = () => {
		setCart([]);
		processOrder();
	};

	const clearDeliveryDetails = () => {
		setDeliveryDetails({
			fullName: null,
			email: null,
			mobileNumber: null,
			toDoor: 'Delivery To Door',
			road: null,
			address: null,
			getDate: getDate,
			getTime: getTime
		});
	};

	return (
		<div>
			{preLoaderVisibility ? (
				<div style={{ marginTop: '200px' }}>
					<Preloader />
				</div>
			) : (
				<AuthProvider>
					<DataContext.Provider value={contextData}>
						<Router>
							<Switch>
								<Route exact path="/">
									<Header cart={cart} />
									<Hero />
									<About />
									<Services />
									<Works />
									<ChooseUs />
									<Review />
									<ContactUs />
									<Footer />
								</Route>

								<Route exact path="/services">
									<Header cart={cart} />
									<Services />
									<Review />
									<Footer />
								</Route>

								<Route exact path="/wash-and-iron">
									<Header cart={cart} />
									<WashAndIron
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<Route exact path="/wash-and-fold">
									<Header cart={cart} />
									<WashAndFold
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<Route exact path="/iron-and-fold">
									<Header cart={cart} />
									<IronAndFold
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<Route exact path="/dry-cleaning">
									<Header cart={cart} />
									<DryCleaning
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<Route exact path="/subscription-based">
									<Header cart={cart} />
									<SubscriptionBased
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<Route exact path="/emergency-service">
									<Header cart={cart} />
									<EmergencyService
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
									/>
									<Footer />
								</Route>

								<PrivateRoute exact path="/cart-and-shipment">
									<Header cart={cart} />
									<Bag
										cart={cart}
										handleAddProduct={handleAddProduct}
										handleRemoveProduct={handleRemoveProduct}
										deliveryDetails={deliveryDetails}
										deliveryDetailsHandler={deliveryDetailsHandler}
										clearCart={clearCart}
										clearDeliveryDetails={clearDeliveryDetails}
									/>
									<Footer />
								</PrivateRoute>

								<PrivateRoute exact path="/dashboard">
									<Header cart={cart} />
									<Dashboard cart={cart} deliveryDetails={deliveryDetails} />
									<Footer />
								</PrivateRoute>

								<Route exact path="/admin/dashboard">
									<AdminDashboard />
								</Route>

								<Route exact path="/admin/allOrders">
									<Orders />
								</Route>

								<Route exact path="/admin/products">
									<Product />
								</Route>

								<Route exact path="/admin/customers">
									<Customers />
								</Route>

								<Route exact path="/admin/registration">
									<Registration />
								</Route>

								<Route exact path="/admin/support">
									<Support />
								</Route>

								<Route exact path="/login">
									<Login />
								</Route>

								<Route exact path="/admin">
									<AdminLogin />
								</Route>
							</Switch>
						</Router>
					</DataContext.Provider>
				</AuthProvider>
			)}
		</div>
	);
}

export default App;
