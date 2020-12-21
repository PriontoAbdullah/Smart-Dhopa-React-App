import React from 'react';
import { Col, Row } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
	backgroundColor: '#F4FDFB',
	height: '100vh'
};

const Support = () => {
	return (
		<section>
			<div style={containerStyle}>
				<Row>
					<Col md={2}>
						<Sidebar />
					</Col>
					<Col md={10}>
						<div className="row mt-5">
							<div className="col-md-10 ml-5 mt-3">
								<div>
									<div
										className="jumbotron card card-image ml-3 mt-5"
										style={{
											backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`
										}}
									>
										<div class="text-white text-center py-5 px-4">
											<div>
												<h2 class="card-title h1-responsive pt-3 mb-5 font-bold">
													<strong>Smart Dhopa Live Customer Support</strong>
												</h2>
												<p class="mx-5 mb-5">
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
												</p>
												<a class="btn btn-outline-white btn-md">
													<i class="fas fa-clone left" /> Open Messenger
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default Support;
