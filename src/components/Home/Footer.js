import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer id="Footer">
            <Container>
                <Row className="py-3">
                    <Col md={6} className="py-3">
                        <h4 class="text-danger">Smart Dhopa Online Laundry Service</h4>
                        <p class="text-white">Email: smartdhopa.support@gmail.com</p>
                        <p class="text-white">Phone: +8809-6380-79309</p>
                    </Col>
                    <Col md={3} className="py-3">
                    <ul className="list-unstyled">
                            <li className="py-2"><a href='/help'>Get Help</a></li>
                            <li className="py-2"><a href='/faq'>Read FAQ</a></li>
                            <li className="py-2"><a href='/templates'>View All Templates</a></li>
                            <li className="py-2"><a href='/aboutus'>About Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="py-3">
                    <ul className="list-unstyled">
                            <li className="py-2"><a href='/policy'>Privacy Policy</a></li>
                            <li className="py-2"><a href='/cookie'>Cookie Policy</a></li>
                            <li className="py-2"><a href='/terms'>Terms of Use</a></li>
                            <li className="py-2"><a href='/contacts'>Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className='footer-bottom d-flex justify-content-center'>
                    <p className='text-secondary'>Copyright &copy; 2020 Smart Dhopa Web App </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;