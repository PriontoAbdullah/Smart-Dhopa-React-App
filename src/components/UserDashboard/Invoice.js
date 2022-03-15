import React from 'react';
import { Table } from 'reactstrap';
import Logo from '../../images/logo.png';
import './dashboard.css';

const Invoice = (props) => {
    
	const singleOrder = {...props.viewOrder}

	const { fullName, email, mobileNumber, road, flat, address, getDate, getTime } = singleOrder.shipment;
    const { subTotal, deliveryCharge, grandTotal } = singleOrder.price;
	let count = 0;

	return (
		<div className="print-container">
			<div className="d-flex justify-content-center mb-4">
				<h2 className="text-danger head-title mt-5">Smart Dhopa Online Laundry Service</h2>
			</div>
			<div className="row">
				<div className="col-md-8">
					<h3>
						<span className="text-secondary">Order Number: </span>#{singleOrder.orderDetails}
					</h3>
					<h4>
						<span className="text-secondary">Name: </span>
						{fullName}
					</h4>
					<h5 className="py-3">
						<span className="text-secondary">Email: </span>
						{email}
					</h5>
					<p>
						<span className="text-secondary">Mobile Number: </span>
						{mobileNumber}
					</p>
					<p>
						<span className="text-secondary">Road Number: </span>
						{road}
					</p>
					<p>
						<span className="text-secondary">Flat / Room Number: </span>
						{flat}
					</p>
					<p>
						<span className="text-secondary">Address: </span>
						{address}
					</p>
					<p>
						<span className="text-secondary">Payment Method: </span>Cash on Delivery
					</p>
					<p>
						<span className="text-secondary">Pickup Date: </span>
						{getDate}
					</p>
					<p className="mb-4">
						<span className="text-secondary">Pickup Time: </span>
						{getTime}
					</p>
				</div>

				<div className=" col-md-4">
					<img src={Logo} alt="Logo" />
					<p>
						Our Vision is to -
						<strong className="text-dark">
							clean laundry in the shortest possible turnaround time.
							<i className="now-ui-icons ui-2_favourite-28" />
						</strong>
					</p>
				</div>

				<Table>
					<thead className="mt-5">
						<tr>
							<th>#</th>
							<th>Service</th>
							<th>Category</th>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{singleOrder.products.map((item) => (
							<tr key={item.id}>
								<th scope="row">{(count = count + 1)}</th>
								<td>{item.service}</td>
								<td>{item.category}</td>
								<td>{item.name}</td>
								<td>{item.quantity}</td>
								<td>৳ {item.price * item.quantity}</td>
							</tr>
						))}

						<tr>
							<td colSpan="4" />
							<th>Sub Total:</th>
							<th>৳ {subTotal}</th>
						</tr>
						<tr>
							<td colSpan="4" />
							<th>Delivery Charge: </th>
							<th>৳ {deliveryCharge}</th>
						</tr>
						<tr>
							<td colSpan="4" />
							<th>Grand Total: </th>
							<th>৳ {grandTotal}</th>
						</tr>
					</tbody>
				</Table>
			</div>
			<hr />
			<div className="d-flex justify-content-center mb-4">
				<h3 className="text-danger head-title mt-5">
					Thank you for shopping here <i className="now-ui-icons ui-2_favourite-28" />
				</h3>
			</div>
			<div className="row">
				<div className="col-md-7">
					<div className="my-5">
						<h3 className="text-primary">Get in touch, send us an email or call us</h3>
						<p>
							Questions? Enquiries? Suggestions? Existential doubts? <br />Our teams are ready to hear
							about them!
						</p>
					</div>
				</div>
				<div className="col-md-5 mt-5">
					<h4 className="text-dark mt-3">
						<i className="now-ui-icons tech_mobile" />+8809-6380-79309
					</h4>
					<h4 className="text-dark">
						<i className="now-ui-icons ui-1_email-85" /> smartdhopa.support@gmail.com
					</h4>
				</div>
			</div>
		</div>
	);
};

export default Invoice;
