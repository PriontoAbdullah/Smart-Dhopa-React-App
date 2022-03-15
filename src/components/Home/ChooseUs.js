import { faLeaf, faLiraSign, faMedal, faMoneyBillAlt, faSoap, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import '../../App.css';

const service = [
	{
		src: <FontAwesomeIcon icon={faTruck} /> ,
		name: 'Free Pickup & Delivery ',
		title: 'Doorstep Pickup and Your clothes will be delivered at your doorstep on time and as fresh as daisy.'
	},
	{
		src: <FontAwesomeIcon icon={faSoap} /> ,
		name: 'Hygienic',
		title: 'Your clothes are hygienically washed so they are germ free and clean. The way you think about laundry!.'
	},
	{
		src: <FontAwesomeIcon icon={faLiraSign} /> ,
		name: 'Affordable',
		title: 'No Additional Cost! You pay just as same as the price set by your selected laundry vendor.'
	},
	{
		src: <FontAwesomeIcon icon={faLeaf} /> ,
		name: 'Eco Friendly',
		title: 'Local residents love on our reliable laundry & dry cleaning services for the fast, accurate, top quality results.'
	},
	{
		src: <FontAwesomeIcon icon={faMedal} /> ,
		name: 'Quality Guarantee',
		title: 'We are professionals in the laundry business, which means we always up to date on the latest technologies.'
	},
	{
		src: <FontAwesomeIcon icon={faMoneyBillAlt} /> ,
		name: 'Transparent Pricing',
		title: 'In Affordable price our services in the same budget or less than any other local laundry services near you.'
	}
];

const ChooseUs = () => {
    return (
        <section className="mb-3" id="ChooseUs">
        <Container>
            <div className="d-flex justify-content-center mt-5">
                <h2 className="text-danger head-title">Why Choose Us</h2>
            </div>
            <Row>
                {service.map(item => 
                    <Col md={4} className="d-flex justify-content-center mt-4" key={item.name}>
                        <Card style={{ width: '20rem' }}>
                            <CardHeader className="text-center mt-2 text-danger"><span className="icon-size">
                            {item.src}
                            </span></CardHeader>
                            <CardBody>
                                <CardTitle tag="h4" >{item.name}</CardTitle>
                                <CardText className="text-secondary">{item.title}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    </section>
    );
};

export default ChooseUs;