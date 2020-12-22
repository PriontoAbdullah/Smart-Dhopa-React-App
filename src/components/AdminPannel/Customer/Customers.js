import React from 'react';
import { Col } from 'reactstrap';
import Row from 'reactstrap/lib/Row';
import Sidebar from '../Sidebar/Sidebar';
import AllCustomer from './AllCustomer';

const containerStyle = {
	backgroundColor: '#F4FDFB',
	height: '100vh'
};

const Orders = () => {
    return (
        <Row style={containerStyle}>
            <Col md={2}>
                <Sidebar />
            </Col>
            <Col md={10} className="pr-5"> 
               <AllCustomer />
            </Col>
        </Row>
    );
};

export default Orders;