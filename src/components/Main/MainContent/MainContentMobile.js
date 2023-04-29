import { Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

export default function MainContentMobile() {
    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col xs={12} className="my-5" style={{ width: "351px" }}>
                    <h3 className="text-uppercase main-content-text-mobile text-center">Book your Next Destination</h3>
                    <h6 className="text-uppercase main-content-quote-mobile text-center mt-2 mb-4">"Discover the beaty of Philippines"</h6>
                    <Button variant="contained" className="d-flex gap-1 mx-auto">EXPLORE NOW<ZoomInIcon></ZoomInIcon></Button>
                </Col>
                <Col xs={12}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://gttp.imgix.net/222261/x/0/25-best-beaches-in-the-philippines-white-sand-pink-sand-amp-hidden-beaches-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://gttp.imgix.net/222261/x/0/25-best-beaches-in-the-philippines-white-sand-pink-sand-amp-hidden-beaches-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://gttp.imgix.net/222261/x/0/25-best-beaches-in-the-philippines-white-sand-pink-sand-amp-hidden-beaches-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}