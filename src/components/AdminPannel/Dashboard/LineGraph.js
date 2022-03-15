import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const LineGraph = () => {
	const data = [
		{
			name: 'Saturday',
			Order_Placed: 4,
			Order_Completed: 2
		},
		{
			name: 'Sunday',
			Order_Placed: 3,
			Order_Completed: 1
		},
		{
			name: 'Monday',
			Order_Placed: 2,
			Order_Completed: 0
		},
		{
			name: 'Tuesday',
			Order_Placed: 1,
			Order_Completed: 3
		},
		{
			name: 'Wednesday',
			Order_Placed: 1,
			Order_Completed: 1
		},
		{
			name: 'Thursday',
			Order_Placed: 0,
			Order_Completed: 2
		},
		{
			name: 'Friday',
			Order_Placed: 3,
			Order_Completed: 2
		}
	];

	return (
		<div>
			<h4 className="mt-2 py-2">Weekly Orders</h4>
			<BarChart
				width={600}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 1,
					left: 0,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="Order_Placed" fill="#8884d8" />
				<Bar dataKey="Order_Completed" fill="#82ca9d" />
			</BarChart>
		</div>
	);
};

export default LineGraph;
