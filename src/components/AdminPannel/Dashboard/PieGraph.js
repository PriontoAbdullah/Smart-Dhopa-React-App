import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Legend, RadialBar, RadialBarChart } from 'recharts';

const useStyles = makeStyles({
	root: {
		width: '90%',
		marginLeft: '-20px',
		marginTop: '20px'
	}
});

const PieGraph = () => {
	const classes = useStyles();
	const [ progress, setProgress ] = React.useState(0);

	const [ buffer, setBuffer ] = React.useState(10);

	const progressRef = React.useRef(() => {});
	React.useEffect(() => {
		progressRef.current = () => {
			if (progress > 100) {
				setProgress(0);
				setBuffer(10);
			} else {
				const diff = Math.random() * 10;
				const diff2 = Math.random() * 10;
				setProgress(progress + diff);
				setBuffer(progress + diff + diff2);
			}
		};
	});

	React.useEffect(() => {
		const timer = setInterval(() => {
			progressRef.current();
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const pidata = [
		{
			name: 'Margin',
			uv: 31.47,
			pv: 2400,
			fill: '#8884d8'
		},
		{
			name: 'Placed',
			uv: 26.69,
			pv: 4567,
			fill: '#83a6ed'
		},
		{
			name: 'Picked',
			uv: 15.69,
			pv: 8398,
			fill: '#8dd1e1'
		},
		{
			name: 'Progress',
			uv: 18.22,
			pv: 9800,
			fill: '#82ca9d'
		},
		{
			name: 'Delivered',
			uv: 13.63,
			pv: 3908,
			fill: '#a4de6c'
		},
		{
			name: 'Completed',
			uv: 12.63,
			pv: 4800,
			fill: '#d0ed57'
		},
		{
			name: 'Revenue',
			uv: 10.67,
			pv: 4800,
			fill: '#ffc658'
		}
	];

	const style = {
		top: -270,
		left: 310,
		lineHeight: '30px'
	};

	return (
		<div>
			<h4 className="mt-2 py-3">Business Report</h4>
			<RadialBarChart
				width={500}
				height={300}
				cx={150}
				cy={150}
				innerRadius={20}
				outerRadius={140}
				barSize={10}
				data={pidata}
			>
				<RadialBar
					minAngle={15}
					label={{ position: 'insideStart', fill: '#fff' }}
					background
					clockWise
					dataKey="uv"
				/>
				<Legend
					iconSize={10}
					width={120}
					height={140}
					layout="vertical"
					verticalAlign="middle"
					wrapperStyle={style}
				/>
			</RadialBarChart>

			<div className={classes.root}>
				<LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
			</div>

			<div className="footer-bottom d-flex justify-content-center mt-4">
				<p className="text-secondary mt-5 mr-5 pr-5">Copyright &copy; 2020 Developed by Prionto Abdullah </p>
			</div>
		</div>
	);
};

export default PieGraph;
