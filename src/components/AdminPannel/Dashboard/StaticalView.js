import React, { useContext } from 'react';
import { DataContext } from '../../../App';
import './Dashboard.css';

const StaticalView = () => {
	const ContextData = useContext(DataContext);

	const totalOrder = ContextData.order.length;
	const pendingOrder = ContextData.order.reduce((accu, curr) => {
		if (curr.status !== 'Order Completed') {
			accu += 1;
		}
		return accu;
	}, 0);

	const completedOrder = ContextData.order.reduce((accu, curr) => {
		if (curr.status === 'Order Completed') {
			accu += 1;
		}
		return accu;
	}, 0);

	const totalIncome = ContextData.order.reduce((accu, curr) => {
		accu += parseInt(curr.price.grandTotal);

		return accu;
	}, 0);

	return (
		<div id="statical-dashboard">
			<div className="row d-flex justify-content-between">
				<h3 className="mt-3">Admin Dashboard</h3>
				<h3 className="mr-5 mt-3">
					<i className="now-ui-icons ui-1_bell-53" />
					<i className="ml-3 now-ui-icons loader_refresh spin" />
				</h3>
			</div>

			<div className="row d-flex text-white">
				<div className="col-md-3 mb-3 ">
					<div className="d-flex py-3 rounded pending-appointment align-items-center">
						<i className="ml-2 px-3 now-ui-icons shopping_cart-simple" />
						<h6 className="text-right pr-2">{totalOrder}</h6>
						<p>
							Total <br /> Orders
						</p>
					</div>
				</div>
				<div className="col-md-3 mb-3 ">
					<div className="d-flex today-appointment py-3 rounded align-items-center">
						<i className="ml-2 px-3 now-ui-icons business_chart-pie-36" />
						<h6 className="text-right pr-2">{pendingOrder}</h6>
						<p>
							Order <br /> Pending
						</p>
					</div>
				</div>
				<div className="col-md-3 mb-3 ">
					<div className="d-flex total-appointment py-3 rounded align-items-center">
						<i className="ml-2 px-3 now-ui-icons business_chart-bar-32" />
						<h6 className="text-right pr-2">{completedOrder}</h6>
						<p>
							Order <br /> Completed
						</p>
					</div>
				</div>
				<div className="col-md-3 mb-3 ">
					<div className="d-flex total-patients py-3 rounded align-items-center">
						<i className="ml-2 px-3 now-ui-icons business_money-coins" />
						<h6 className="text-right pr-2">{totalIncome}</h6>
						<p>
							Total <br /> Earning
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StaticalView;
