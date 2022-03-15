import React from 'react';
import { Table } from 'reactstrap';
import './Orders.css';

const OrderDetails = (props) => {
	const singleOrder = { ...props.viewOrder };

	const { fullName, email, mobileNumber, road, flat, address, getDate, getTime } = singleOrder.shipment;
	const { subTotal, deliveryCharge, grandTotal } = singleOrder.price;

	let count = 0;

	return (
		<div className="p-5 single-order">
			<div className=" ">
				<h3 className="text-info mb-2 text-center">Order Details</h3>
				<button
					type="button"
					className="close mt-0 pt-0"
					data-dismiss="modal"
					aria-label="Close"
					onClick={() => props.setModalIsOpen(false)}
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<Table striped>
				<thead className="mt-5">
					<tr>
						<th>Order Number</th>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile Number</th>
						<th>Payment Method</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">{singleOrder.orderDetails}</th>
						<td>{fullName}</td>
						<td>{email}</td>
						<td>{mobileNumber}</td>
						<td>Cash on Delivery</td>
					</tr>
				</tbody>
			</Table>

			<div className="d-flex justify-content-center ">
				<h4 className="text-info">Customer Address</h4>
			</div>

			<Table striped>
				<thead className="mt-5">
					<tr>
						<th>Road Number</th>
						<th>Flat / Room Number</th>
						<th>Address</th>
						<th>Pickup Date</th>
						<th>Pickup Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{road}</td>
						<td>{flat}</td>
						<td>{address}</td>
						<td>{getDate}</td>
						<td>{getTime}</td>
					</tr>
				</tbody>
			</Table>

			<div className="d-flex justify-content-center ">
				<h4 className="text-info">Product Information</h4>
			</div>

			<Table bordered>
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
	);
};

export default OrderDetails;
