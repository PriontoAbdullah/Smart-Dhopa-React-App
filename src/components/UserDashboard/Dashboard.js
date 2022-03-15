import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useReactToPrint } from 'react-to-print';
import { Button, Col, Container, Progress, Row } from 'reactstrap';
import { useAuth } from '../Authentication/useAuth';
import Preloader from '../Preloader/Preloader';
import './dashboard.css';
import Download from './Download';

const Dashboard = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const auth = useAuth();

  const [order, setOrder] = useState([]);
  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    fetch(
      'https://smart-dhopa-server.herokuapp.com/orders?email=' + auth.user.email
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
    setPreLoader(false);
  }, [order.length]);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
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

      {preLoader ? (
        <div className="py-5">
          <Preloader />
        </div>
      ) : null}

      {order.map((item) => (
        <div key={item._id}>
          {item.status !== 'Order Completed' && (
            <div className="jumbotron card card-image mb-5 background-Order">
              <Row className="text-white py-2 px-4">
                <Col md={9}>
                  <h3 className="card-title h1-responsive pt-3 mb-5 font-bold progress-color">
                    Order Details: #{item.orderDetails}
                  </h3>

                  <div className="progress-container">
                    <span className="progress-badge progress-text">
                      {item.status}
                    </span>
                    <Progress max="100" value={`${item.progress}`}>
                      <span className="progress-value progress-text">
                        {item.progress}%
                      </span>
                    </Progress>
                  </div>
                </Col>

                <Col md={3} className="show-details">
                  <h4 className="mt-0 mb-5 show-date">
                    {new Date(`${item.shipment.getDate}`).toDateString()}
                  </h4>
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
            </div>
          )}

          <Modal
            className="modal-xl"
            toggle={() => setModalIsOpen(false)}
            isOpen={modalIsOpen}
          >
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger w-25 mt-4"
                color="danger"
                onClick={handlePrint}
              >
                Download Invoice
              </button>
            </div>

            <Download ref={componentRef} viewOrder={viewOrder} />
          </Modal>
        </div>
      ))}

      {order.map((item) => (
        <div key={item._id}>
          {item.status === 'Order Completed' && (
            <div className="jumbotron card card-image background-Order">
              <Row className="text-white px-4 d-flex align-items-center">
                <Col md={4}>
                  <h3 className="card-title h3-responsive pt-3 font-bold progress-color">
                    Order Details: #{item.orderDetails}
                  </h3>
                </Col>

                <Col md={3}>
                  <div className="progress-container ml-0">
                    <span className="progress-badge progress-text">
                      {item.status}
                    </span>
                  </div>
                </Col>

                <Col md={3} className="ml-0 mt-1">
                  <h4 className="mt-1">
                    {new Date(`${item.shipment.getDate}`).toDateString()}
                  </h4>
                </Col>

                <Col md={2}>
                  <Button
                    className="button-text ml-0 mt-1"
                    color="danger"
                    type="button"
                    onClick={() => openOrderModal(item._id)}
                  >
                    View Details
                  </Button>
                </Col>
              </Row>
            </div>
          )}

          <Modal
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: 'rgba(130,125,125,0.75)',
              },
              content: {
                left: '15%',
                width: '75%',
                top: '12%',
                bottom: '3%',
              },
            }}
            isOpen={modalIsOpen}
          >
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-danger mt-4 button-view"
                color="danger"
                onClick={handlePrint}
              >
                Download Invoice
              </button>
            </div>

            <Download ref={componentRef} viewOrder={viewOrder} />
          </Modal>
        </div>
      ))}
    </Container>
  );
};

export default Dashboard;
