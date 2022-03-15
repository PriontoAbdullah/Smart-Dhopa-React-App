import Typography from '@material-ui/core/Typography';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import { Button, Card, CardBody, Col, Container, Row, UncontrolledCollapse } from 'reactstrap';
import './Services.css';

const faq = [
	{
		id: 'toggle01',
		question: 'How many days you will take to deliver?',
		answer:
			'Our experts will return your valuable clothes within 72 to 96 hours. But if your clothing needs special washing then it might take an extended time. Furthermore, delivery time will take longer for any road crisis (strike, blockage, traffic).'
	},
	{
		id: 'toggle02',
		question: 'Will you iron/pack my clothes after washing?',
		answer:
			'Yes! We will iron and pack your clothes after washing them if you mention it during order processing period.'
	},
	{
		id: 'toggle03',
		question: 'Will you wash out every stains from my clothes?',
		answer:
			'Our service providers offer a safe cleaning guarantee. This does not mean we will remove every stain from your clothes. If our professionals state that stain removal will be unsafe, or will damage your clothes then the stain will remain.'
	},
	{
		id: 'toggle04',
		question: 'What if I leave my personal items with clothes?',
		answer:
			'Our professional Service providers will check your clothes before preparing to wash. If they find anything they will collect and will return them to you with your washed clothes'
	},
	{
		id: 'toggle05',
		question: 'What if my clothes get missing?',
		answer:
			'Our Service Providers are experts in their services. However, accidents might occur for any reason. For this you need to contact the Service Provider you took service from. They will find out the solution. For any damage, loss, missing and defect during process of laundry, dry cleaning and pressing, compensation to the extent of 10 (Ten) times of service charge will be provided after proper investigation of the claim.'
	}
];

const OrderAndProcess = () => {
	return (
		<Container>
			<Row className="my-2">
				<Col md={6}>
					<h2 className="text-danger head-title mt-5">How to order</h2>

					<Timeline className="orderList">
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<AssignmentTurnedInIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Select Service
								</Typography>
								<Typography>From the category, select the service you are looking for.</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<ScheduleIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Set Schedule
								</Typography>
								<Typography>Select your convenient time slot.</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<LocalMallIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Place Order
								</Typography>
								<Typography>Confirm your order by clicking ‘Place order’.</Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>

					<div>
						<h2 className="text-danger head-title mt-3">Terms & Condition</h2>
						<div className="terms mb-5">
							<li className="mt-3">
								After service completion you have to pay through online or Cash on Delivery.
							</li>
							<li className="mt-3">
								Price may differ due to product fabrication and measurement of their length. It will be
								based on our respective Service Provider’s inspection.
							</li>
							<li className="mt-3">
								Service Delivery time might extended or changes due to product fabrics as in leather
								Jacket, Carpet etc.
							</li>
							<li className="mt-3">
								Delivery time also might changed upon transportation crisis like strikes and road
								blocks.
							</li>
							<li className="mt-3">
								Minimum Order Amount is BDT 100 for free pick and drop service, otherwise you have to
								pay additional BDT 20 as charge.
							</li>
						</div>
					</div>
				</Col>

				<Col md={6} className="mobileView">
					<h2 className="text-danger head-title mt-5 ml-5">Details of Services</h2>
					<p className="text-justify story ml-5">
						Smart Dhopa help you find laundry service near you and ensure that your clothes ar led by
						professional and experienced Service Providers. Our quality services are quick and simple. Every customer’s laundry is washed with extreme care to preserve their clothes’ quality. After washing your clothes our Service Providers folds, packs and deliver at your doorstep.
						<li className="mt-3">Trusted, Certified and Skilled Launder.</li>
						<li>Best Product, Best Service.</li>
						<li>Guaranteed Customer Satisfaction.</li>
					</p>

					<div className="ml-5 my-5">
						<h2 className="text-danger head-title mt-5">FAQ of Our Service</h2>

						{faq.map((item) => (
							<div className="terms" key={item.id}>
								<Button
									className="btn-round"
									color="danger"
									outline
									id={item.id}
									style={{ marginBottom: '1rem', fontSize: '19px' }}
								>
									{item.question}
								</Button>
								<UncontrolledCollapse toggler={`#${item.id}`}>
									<Card>
										<CardBody>
											{item.answer}
										</CardBody>
									</Card>
								</UncontrolledCollapse>
							</div>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default OrderAndProcess;
