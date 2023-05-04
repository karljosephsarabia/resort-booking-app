import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

export default function HeroBannerDesktop() {
    return (
        <>
            <Row>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="hero-banner-name-desktop position-relative">Dora<span className="hero-banner-text-desktop">Explore and Travel</span></h1>
                </Col>
            </Row>
        </>
    );
}