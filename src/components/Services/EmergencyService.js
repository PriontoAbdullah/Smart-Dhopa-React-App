import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Col,
	Container,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
	UncontrolledDropdown
} from 'reactstrap';
import { DataContext } from '../../App';
import houseDress from '../../images/icon/household.png';
import manDress from '../../images/icon/man.png';
import womanDress from '../../images/icon/woman.png';
import Cart from '../CartAndShipment/Cart';
import Preloader from '../Preloader/Preloader';
import OrderAndProcess from './OrderAndProcess';
import './Services.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	heading: {
		fontSize: theme.typography.pxToRem(19),
		fontWeight: theme.typography.fontWeightRegular
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}));

const EmergencyService = (props) => {
	const classes = useStyles();

	const ContextData = useContext(DataContext);

	const EmergencyServiceMan = ContextData.products.filter(
		(pd) => pd.service === 'Emergency Service' && pd.category === "Men's Wear"
	);

	const EmergencyServiceWoman = ContextData.products.filter(
		(pd) => pd.service === 'Emergency Service' && pd.category === "Women's Wear"
	);

	const EmergencyServiceHouse = ContextData.products.filter(
		(pd) => pd.service === 'Emergency Service' && pd.category === 'Household'
	);

	const handleAddToCart = (currentItem) => {
		currentItem.ac = 'd-none';
		currentItem.dc = 'd-block';

		props.handleAddProduct(currentItem);
	};

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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="WashAndIron">
			<Container>
				<div className="row justify-content-between py-3">
					<div className="col-md-8">
						<h2 className="text-danger">Emergency Service</h2>
					</div>
					<div className="col-md-4">
						<span className="mr-3">Want to go another service?</span>
						<UncontrolledDropdown className="btn-group">
							<DropdownToggle
								aria-expanded={false}
								aria-haspopup={true}
								caret
								color="danger"
								data-toggle="dropdown"
								type="button"
							>
								Select Service
							</DropdownToggle>
							<DropdownMenu>
								<Link to="/wash-and-iron">
									<DropdownItem>Wash & Iron</DropdownItem>
								</Link>
								<Link to="/wash-and-fold">
									<DropdownItem>Wash & Fold</DropdownItem>
								</Link>
								<Link to="/iron-and-fold">
									<DropdownItem>Iron & Fold</DropdownItem>
								</Link>
								<Link to="/dry-cleaning">
									<DropdownItem>Dry Cleaning</DropdownItem>
								</Link>
								<Link to="/subscription-based">
									<DropdownItem>Subscription Based</DropdownItem>
								</Link>
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
				</div>
				<Row className="mb-4">
					<Col md={7} className="my-3">
						<div className={classes.root}>
							<Accordion className="p-2">
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<img src={manDress} className="mr-3" />
									<Typography className={classes.heading}>Men's Wear</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<List component="nav" className={classes.root} aria-label="mailbox folders">
										{!ContextData.products.length && <Preloader />}
										{EmergencyServiceMan.map((item) => (
											<div key={item.id}>
												<Divider className="mb-3" />
												<ListItem>
													<h5 className="item-name">{item.name}</h5>
													<ListItemText primary="" />
												</ListItem>
												<ListItem>
													<ListItemText secondary={item.subservice} />
												</ListItem>
												<ListItem>
													<Typography className={classes.secondaryHeading}>
														<span className="price">৳ {item.price}</span> / piece
													</Typography>
													<ListItemText secondary="" />
													<div className={item.ac}>
														<Button
															className="btn-round"
															color="danger"
															onClick={() => handleAddToCart(item)}
														>
															<i className="now-ui-icons shopping_bag-16 mr-2" />
															Add to bag
														</Button>
													</div>

													<div className={item.dc}>
														<div className="cart-controller">
															{item.quantity > 1 ? (
																<button
																	onClick={() =>
																		handleProductQuantity(
																			item.id,
																			item.quantity - 1
																		)}
																	className="btnQ"
																>
																	-
																</button>
															) : (
																<button
																	className="btnQ"
																	onClick={() => removeItemFromCart(item)}
																>
																	-
																</button>
															)}
															<span className="quantity"> {item.quantity}</span>
															<button
																className="btnQ"
																onClick={() =>
																	handleProductQuantity(item.id, item.quantity + 1)}
															>
																+
															</button>
														</div>
													</div>
												</ListItem>
											</div>
										))}
									</List>
								</AccordionDetails>
							</Accordion>
							<Accordion className="p-2">
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<img src={womanDress} className="mr-3" />
									<Typography className={classes.heading}>Women's Wear</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<List component="nav" className={classes.root} aria-label="mailbox folders">
										{!ContextData.products.length && <Preloader />}
										{EmergencyServiceWoman.map((item) => (
											<div key={item.id}>
												<Divider className="mb-3" />
												<ListItem>
													<h5 className="item-name">{item.name}</h5>
													<ListItemText primary="" />
												</ListItem>
												<ListItem>
													<ListItemText secondary={item.subservice} />
												</ListItem>
												<ListItem>
													<Typography className={classes.secondaryHeading}>
														<span className="price">৳ {item.price}</span> / piece
													</Typography>
													<ListItemText secondary="" />
													<div className={item.ac}>
														<Button
															className="btn-round"
															color="danger"
															onClick={() => handleAddToCart(item)}
														>
															<i className="now-ui-icons shopping_bag-16 mr-2" />
															Add to bag
														</Button>
													</div>

													<div className={item.dc}>
														<div className="cart-controller">
															{item.quantity > 1 ? (
																<button
																	onClick={() =>
																		handleProductQuantity(
																			item.id,
																			item.quantity - 1
																		)}
																	className="btnQ"
																>
																	-
																</button>
															) : (
																<button
																	className="btnQ"
																	onClick={() => removeItemFromCart(item)}
																>
																	-
																</button>
															)}
															<span className="quantity"> {item.quantity}</span>
															<button
																className="btnQ"
																onClick={() =>
																	handleProductQuantity(item.id, item.quantity + 1)}
															>
																+
															</button>
														</div>
													</div>
												</ListItem>
											</div>
										))}
									</List>
								</AccordionDetails>
							</Accordion>
							<Accordion className="p-2">
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<img src={houseDress} className="mr-3" />
									<Typography className={classes.heading}>Household & Accessories</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<List component="nav" className={classes.root} aria-label="mailbox folders">
										{!ContextData.products.length && <Preloader />}
										{EmergencyServiceHouse.map((item) => (
											<div key={item.id}>
												<Divider className="mb-3" />
												<ListItem>
													<h5 className="item-name">{item.name}</h5>
													<ListItemText primary="" />
												</ListItem>
												<ListItem>
													<ListItemText secondary={item.subservice} />
												</ListItem>
												<ListItem>
													<Typography className={classes.secondaryHeading}>
														<span className="price">৳ {item.price}</span> / piece
													</Typography>
													<ListItemText secondary="" />
													<div className={item.ac}>
														<Button
															className="btn-round"
															color="danger"
															onClick={() => handleAddToCart(item)}
														>
															<i className="now-ui-icons shopping_bag-16 mr-2" />
															Add to bag
														</Button>
													</div>

													<div className={item.dc}>
														<div className="cart-controller">
															{item.quantity > 1 ? (
																<button
																	onClick={() =>
																		handleProductQuantity(
																			item.id,
																			item.quantity - 1
																		)}
																	className="btnQ"
																>
																	-
																</button>
															) : (
																<button
																	className="btnQ"
																	onClick={() => removeItemFromCart(item)}
																>
																	-
																</button>
															)}
															<span className="quantity"> {item.quantity}</span>
															<button
																className="btnQ"
																onClick={() =>
																	handleProductQuantity(item.id, item.quantity + 1)}
															>
																+
															</button>
														</div>
													</div>
												</ListItem>
											</div>
										))}
									</List>
								</AccordionDetails>
							</Accordion>
						</div>
					</Col>

					<Col md={5}>
						<Cart
							cart={props.cart}
							handleAddProduct={props.handleAddProduct}
							handleRemoveProduct={props.handleRemoveProduct}
						/>
					</Col>

					<OrderAndProcess />
				</Row>
			</Container>
		</section>
	);
};

export default EmergencyService;
