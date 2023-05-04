import { Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

export default function CardContentMobile() {
    return (
        <>
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
        </>
    );
}