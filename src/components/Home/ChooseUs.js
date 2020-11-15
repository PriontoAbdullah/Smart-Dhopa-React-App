import React from 'react';
import '../../App.css';
import { Col, Container, Row, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faSoap } from '@fortawesome/free-solid-svg-icons'
import { faLiraSign } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'

const service = [
	{
		src: <FontAwesomeIcon icon={faTruck} /> ,
		name: 'Free Pickup & Delivery ',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: <FontAwesomeIcon icon={faSoap} /> ,
		name: 'Hygienic',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: <FontAwesomeIcon icon={faLiraSign} /> ,
		name: 'Affordable',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: <FontAwesomeIcon icon={faLeaf} /> ,
		name: 'Eco Friendly',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: <FontAwesomeIcon icon={faMedal} /> ,
		name: 'Quality Guarantee',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
	},
	{
		src: <FontAwesomeIcon icon={faMoneyBillAlt} /> ,
		name: 'Transparent Pricing',
		title: 'lorem ipsum demet hau mau khau, manusher gondo pau.'
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