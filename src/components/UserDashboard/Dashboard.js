import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Button, Col, Container, Jumbotron, Modal, Progress, Row } from 'reactstrap';
import { useAuth } from '../Authentication/useAuth';
import './dashboard.css';
import Download from './Download';

const Dashboard = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const auth = useAuth();

	const [ order, setOrder ] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4200/orders?email='+auth.user.email)
		.then((res) => res.json())
		.then((data) => setOrder(data));
	}, []);

	const componentRef = useRef();

	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});
	const [ modalLive, setModalLive ] = React.useState(false);

	
	const [ modalIsOpen, setModalIsOpen ] = useState(false);
	const [viewOrder, setViewOrder] = useState();

	const openOrderModal = (orderId) => {
		setModalIsOpen(true);
		const selectedOrder = order.find((item) => item._id === orderId);
		setViewOrder(selectedOrder);
	};

	return (
		<Container>
			<div className="d-flex justify-content-center mb-4">
				<h2 className="text-danger head-title mt-5">Your Order History</h2>
			</div>

			{ order.map((item) => (
				<Jumbotron className="mb-5" key={item._id}>
					<Row>
						<Col md={9}>
							<h3> Order Details: #{item.orderDetails.number}</h3>

							<div className="progress-container progress-success ">
								<span className="progress-badge progress-text">{item.orderDetails.status}</span>
								<Progress max="100" value="25">
									<span className="progress-value progress-text">{item.orderDetails.progress}%</span>
								</Progress>
							</div>
						</Col>

						<Col md={3} className="pl-5">
							<h4 className="mt-0 mb-5">{new Date(`${item.shipment.getDate}`).toDateString()}</h4>
							<Button
								className="button-text"
								color="danger"
								type="button"
								onClick={() => openOrderModal(item._id)}
							>
								View Details
							</Button>
						</Col>
					</Row>

					<Modal className="modal-xl" toggle={() => setModalIsOpen(false)} isOpen={modalIsOpen}>
						<div className="d-flex justify-content-center">
							<button className="btn btn-danger w-25 mt-4" color="danger" onClick={handlePrint}>
								Download Invoice
							</button>
						</div>

						<Download
							ref={componentRef}
							viewOrder={viewOrder}
						/>
					</Modal>
				</Jumbotron>
			))}
		</Container>
	);
};

export default Dashboard;
