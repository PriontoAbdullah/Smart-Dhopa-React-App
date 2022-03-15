import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Carousel, CarouselIndicators, CarouselItem, Col, Container, Row } from 'reactstrap';

const items = [
	{
		src: require('../../images/hero/undraw_Online_shopping_re_k1sv.svg')
	},
	{
		src: require('../../images/hero/undraw_add_to_cart_vkjp.svg')
	},
	{
		src: require('../../images/hero/undraw_web_shopping_dd4l.svg')
	},
	{
		src: require('../../images/hero/undraw_On_the_way_re_swjt.svg')
	},
	{
		src: require('../../images/hero/undraw_window_shopping_b96y.svg')
	},
	{
		src: require('../../images/hero/undraw_takeout_boxes_ap54.svg')
	},
	{
		src: require('../../images/hero/undraw_meet_the_team_e5b7.svg')
	}
];

const Hero = () => {
	const [ activeIndex, setActiveIndex ] = React.useState(0);
	const [ animating, setAnimating ] = React.useState(false);

	const onExiting = () => {
		setAnimating(true);
	};
	const onExited = () => {
		setAnimating(false);
	};
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};
	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	return (
		<section id="hero">
			<Container>
				<Row className="py-4">
					<Col md={6} className="py-5">
						<h2>
							Best <span className="text-danger"> Wash & Iron service </span> <br /> in your doorstep
						</h2>
						<p className="text-justify my-3">
							Smart Dhopa is the first Online Laundry Platform in DIU with the latest technology in
							washing, dry cleaning and laundry. Our services combine our expertise and experience
							acquired over a period of time to provide you with clean laundry in the shortest possible
							turnaround time.
						</p>
						<Link to="/services">
							<Button className="nav-name my-4" color="danger">
								View Services
							</Button>
						</Link>
					</Col>

					<Col md={6}>
						<Carousel activeIndex={activeIndex} next={next} previous={previous}>
							<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
							{items.map((item) => {
								return (
									<CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
										<img
											src={item.src}
											alt={item.altText}
											height="400px"
											width="600px"
											className="p-5"
										/>
									</CarouselItem>
								);
							})}
							<a
								className="carousel-control-prev"
								data-slide="prev"
								onClick={(e) => {
									e.preventDefault();
									previous();
								}}
								role="button"
							>
								<i className="now-ui-icons arrows-1_minimal-left" />
							</a>
							<a
								className="carousel-control-next"
								data-slide="next"
								onClick={(e) => {
									e.preventDefault();
									next();
								}}
								role="button"
							>
								<i className="now-ui-icons arrows-1_minimal-right" />
							</a>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Hero;
