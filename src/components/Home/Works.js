import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../App.css';
import worksImg from '../../images/bg/working.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import VideoPlayer from 'react-video-js-player'; 
import VideoSrc from '../../images/works.mp4';
import Poster from '../../images/videoImg.jpg';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px'
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main
	}
}));

const Works = () => {
    const classes = useStyles();

	return (
		<section id="works" className="mb-5">
			<Container>
				<div className="d-flex justify-content-center mb-4">
					<h2 className="text-danger head-title mt-5">How It Works</h2>
				</div>
				<Row>
					<Col md={6}>
						<Timeline align="alternate">
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot color="secondary">
										<AssignmentTurnedInIcon />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Select Service
										</Typography>
									</Paper>
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
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Place Order
										</Typography>
									</Paper>
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
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Set Schedule
										</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot color="secondary">
										<PlaceIcon />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Pick up
										</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot color="secondary">
										<LocalLaundryServiceIcon />
									</TimelineDot>
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Wash & Iron
										</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineDot color="secondary">
										<DirectionsBikeIcon />
									</TimelineDot>
								</TimelineSeparator>
								<TimelineContent>
									<Paper elevation={3} className={classes.paper}>
										<Typography variant="h6" component="h1">
											Delivery
										</Typography>
									</Paper>
								</TimelineContent>
							</TimelineItem>
						</Timeline>
					</Col>

					<Col md={6} className="d-flex justify-content-center">
						<VideoPlayer src={VideoSrc} poster={Poster} width="720" height="360" className="mt-4"/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Works;
