import React from 'react';
import { Col, Container, Row, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const services = [
	{
		src: require('../../images/service/wash-iron.jpeg'),
		name: 'Wash & Iron',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: require('../../images/service/wash-fold.jpg'),
		name: 'Wash & Fold',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: require('../../images/service/iron-fold.jpg'),
		name: 'Iron & Fold',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: require('../../images/service/dry-cleaning.webp'),
		name: 'Dry Cleaning',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: require('../../images/service/emergency.jpg'),
		name: 'Emergency Service',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: require('../../images/service/subscription.jpg'),
		name: 'Subscription Based',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	}
];

const Services = () => {
	return (
		<section className="mb-3" id="services">
			<Container>
				<div className="d-flex justify-content-center mt-5">
					<h2 className="text-danger head-title">Our Services</h2>
				</div>
				<Row>
					{services.map(service => 
						<Col md={4} className="d-flex justify-content-center mt-4" key={service.src}>
							<Card style={{ width: '20rem' }}>
								<CardImg className="service-image" src={service.src} top />
								<CardBody>
									<CardTitle tag="h3" className="text-danger">{service.name}</CardTitle>
									<CardText>{service.title}</CardText>
									<Button color="danger" className="service-button" onClick={(e) => e.preventDefault()}>
									<i className="now-ui-icons arrows-1_minimal-right"></i>
									<span className="nav-name"> Select Service</span> 
									</Button>
								</CardBody>
							</Card>
						</Col>
					)}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
