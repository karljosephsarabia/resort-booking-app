import { Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import './style.css';

export default function ExploreContentMobile() {
    return (
        <>
            <Col xs={12} className="my-5" style={{ width: "351px" }}>
                <h3 className="text-uppercase main-content-text-mobile text-center">Book your Next Destination</h3>
                <h6 className="text-uppercase main-content-quote-mobile text-center mt-2 mb-4">"Discover the beaty of Philippines"</h6>
                <Button variant="contained" className="d-flex gap-1 mx-auto">EXPLORE NOW<ZoomInIcon></ZoomInIcon></Button>
            </Col>
        </>
    );
}