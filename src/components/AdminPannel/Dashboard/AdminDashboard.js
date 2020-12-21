import React from 'react';
import { Col, Row } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';
import StaticalView from './StaticalView';

const containerStyle = {
	backgroundColor: '#F4FDFB',
	height: '100vh'
};

const AdminDashboard = () => {
	return (
		<section>
			<div style={containerStyle}>
				<Row>
					<Col md={2}>
						<Sidebar />
					</Col>
					<Col md={10}>
						<StaticalView />

						<div className="row">
							<div className="col-md-7">
								<LineGraph />
							</div>
							<div className="col-md-5 ">
								<PieGraph />
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default AdminDashboard;
