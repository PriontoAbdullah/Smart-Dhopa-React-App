import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../App.css';
import Logo from '../../images/logo.png';

const About = () => {
	return (
        <section  id="about-us">
		<Container>
			<div className="d-flex justify-content-center mb-4">
				<h2 className="text-danger head-title mt-5">About Us</h2>
			</div>
			<Row>
				<Col md={6} className="d-flex justify-content-center">
					<img src={Logo} alt="Logo"/>
				</Col>
				<Col md={6}>
					<p className="text-justify mb-5">
						Smart Dhopa is the first Online Laundry Platform in DIU with the latest technology in washing,
						dry cleaning and laundry. Our services combine our expertise and experience acquired over a
						period of time to provide you with clean laundry in the shortest possible turnaround time. It
						has partnered up with the top laundry experts of the country and provides you with a free
						Pick-up and Delivery for your dirty laundry. With our Website, Mobile App or Hotline Number, you
						can just schedule an order and we will take it from there!
					</p>
				</Col>
			</Row>
		</Container>
        </section>
	);
};

export default About;
