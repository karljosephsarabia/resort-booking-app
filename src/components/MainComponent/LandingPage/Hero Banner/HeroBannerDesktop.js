import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

export default function HeroBannerDesktop() {
    return (
        <>
            <Row>
                <Col className="d-flex flex-column align-items-center">
                    <h5 className="hero-banner-name-desktop position-relative"><span className="hero-banner-text-desktop">Experience the magic of the beach with</span>Tropicana Getaway</h5>
                </Col>
            </Row>
        </>
    );
}