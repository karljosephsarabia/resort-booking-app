import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Hero Banner/style.css';

export default function HeroBannerMobile() {
    return (
        <>
            <Row>
                <Col className="d-flex flex-column align-items-center">
                    <h1 className="hero-banner-name-mobile position-relative">Dora<span className="hero-banner-text-mobile">Travel and explore</span></h1>
                </Col>
            </Row>
        </>
    );
}