import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { DataContext } from '../../App';
import { processOrder } from '../../utilities/databaseManager';
import { useAuth } from '../Authentication/useAuth';
import '../Services/Services.css';
import './Cart.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	dividerFullWidth: {
		margin: `10px 0 0 ${theme.spacing(0)}px`,
		fontSize: theme.typography.pxToRem(16)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}));

const Cart = (props) => {
	const classes = useStyles();
	const auth = useAuth();
	const ContextData = useContext(DataContext);

	const removeItemFromCart = (currentItem) => {
		currentItem.dc = 'd-none';
		currentItem.ac = 'd-block';

		props.handleRemoveProduct(currentItem);
	};

	const handleProductQuantity = (productID, productQuantity) => {
		const newCart = ContextData.products.map((item) => {
			if (item.id === productID) {
				item.quantity = productQuantity;
			}
			return item;
		});

		const filteredCart = newCart.find((item) => item.id === productID);
		props.handleAddProduct(filteredCart);
	};

	const totalQuantity = props.cart.reduce((totalQuantity, product) => {
		return totalQuantity + product.quantity;
	}, 0);

	const subTotal = props.cart.reduce((totalPrice, product) => {
		return totalPrice + product.price * product.quantity;
	}, 0);

	let deliveryCharge = 0;
	if (subTotal > 100) {
		deliveryCharge = 0;
	} else if (subTotal > 0) {
		deliveryCharge = 20;
	}

	let cartHeight = '';

	if (props.cart.length == 0) {
		cartHeight = '300px';
	} else if (props.cart.length == 1) {
		cartHeight = '520px';
	} else if (props.success) {
		cartHeight = '';
	} else {
		cartHeight = '620px';
	}

	const grandTotal = subTotal + deliveryCharge;

	// After Place order button is clicked, this function is worked
	const handleFinalOrder = () => {
		const shipment = props.deliveryDetails;
		const products = props.cart;
		const email = auth.user.email;

		const subTotalCart = subTotal + '';
		const deliveryChargeCart = deliveryCharge + '';
		const grandTotalCart = grandTotal + '';

		const price = {
			subTotal,
			deliveryCharge,
			grandTotal
		};

		const orderDetails = Math.round(Math.random() * 1000000);
		const status = 'Order Placed';
		const progress = 20;

		const orderAdded = { email, shipment, products, price, orderDetails, status, progress };

		fetch('https://smart-dhopa-server.herokuapp.com/addOrders', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(orderAdded)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});

		processOrder();
		props.clearCart();
		props.clearDeliveryDetails();
	};

	return (
		<div className="cartClass" style={{ height: cartHeight }}>
			<h4 className="text-danger d-flex justify-content-center m-2">Your Bag</h4>
			<p className="d-flex justify-content-center m-1">Total Item: {totalQuantity}</p>

			<List className={classes.root}>
				{props.cart.map((item) => (
					<div key={item.id}>
						<Divider />
						<ListItem>
							<Typography
								className={classes.dividerFullWidth}
								color="textSecondary"
								display="block"
								variant="caption"
							>
								{item.category} - {item.service}
							</Typography>
							<ListItemText primary="" />
							<div className="quantity-button">
								{item.quantity > 1 ? (
									<button
										onClick={() => handleProductQuantity(item.id, item.quantity - 1)}
										className="btnQ"
									>
										-
									</button>
								) : (
									<button className="btnQ" onClick={() => removeItemFromCart(item)}>
										-
									</button>
								)}
								<span className="quantity"> {item.quantity}</span>
								<button
									className="btnQ"
									onClick={() => handleProductQuantity(item.id, item.quantity + 1)}
								>
									+
								</button>
							</div>
						</ListItem>
						<ListItem>
							<ListItemText primary={item.name} />
							<ListItemText primary="" />
							<Typography className={classes.secondaryHeading}>
								<span className="price">৳ {item.price * item.quantity}</span>
							</Typography>
						</ListItem>
					</div>
				))}

				<Divider />
				<ListItem>
					<ListItemText primary="Sub Total" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">৳ {subTotal}</span>
					</Typography>
				</ListItem>
				<ListItem>
					<ListItemText primary="Delivery Charge" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">৳ {deliveryCharge}</span>
					</Typography>
				</ListItem>
				<ListItem>
					<ListItemText primary="Grand Total" />
					<ListItemText primary="" />
					<Typography className={classes.secondaryHeading}>
						<span className="price">৳ {grandTotal}</span>
					</Typography>
				</ListItem>
			</List>

			{totalQuantity ? props.success ? (
				<div className="">
					<div className="d-flex justify-content-center">
						<FormGroup check>
							<Label check>
								<Input type="checkbox" defaultChecked />
								<span className="form-check-sign" />
								Agree with Terms and Conditions
							</Label>
						</FormGroup>
					</div>
					<div className="d-flex justify-content-center">
						<Link to="/dashboard">
							<Button className="nav-name my-4" color="danger" onClick={handleFinalOrder}>
								<i className="now-ui-icons arrows-1_share-66" />
								<span className="ml-2">Place Your Order</span>
							</Button>
						</Link>
					</div>
				</div>
			) : (
				<div className="d-flex justify-content-center">
					<Link to="/cart-and-shipment">
						<Button className="nav-name my-4" color="danger">
							<i className="now-ui-icons shopping_bag-16" />
							<span className="ml-2">Check Out Your Order</span>
						</Button>
					</Link>
				</div>
			) : (
				<div />
			)}
		</div>
	);
};

export default Cart;
