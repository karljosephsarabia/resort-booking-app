import { Col, Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './style.css';

export default function MainContentDesktop() {
    return (
        <>
            <Row className="d-flex justify-content-center">
                <Col xs={6} className="my-5">
                    <h3 className="text-uppercase main-content-text-desktop" style={{ width: "35rem" }}>Book your Next Destination</h3>
                    <h6 className="text-uppercase main-content-quote-desktop mt-2 mb-4">"Discover the beaty of Philippines"</h6>
                    <Button variant="contained" className="d-flex gap-1" size="large">EXPLORE NOW<ZoomInIcon></ZoomInIcon></Button>
                </Col>
                <Col xs={6}>
                    <Carousel>
                        <Carousel.Item className="d-flex">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
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