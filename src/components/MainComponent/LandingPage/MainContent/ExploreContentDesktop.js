import { Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function ExploreContentDesktop() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/resort-booking-app/resortList');
    }
    return (
        <>
            <Col xs={5} className="my-5">
                <h3 className="text-uppercase main-content-text-desktop">Book your Next Destination</h3>
                <h6 className="text-uppercase main-content-quote-desktop mt-2 mb-4">"Discover the beaty of Philippines"</h6>
                <Button variant="contained" className="d-flex gap-1" size="large" onClick={handleClick}>EXPLORE NOW<ZoomInIcon></ZoomInIcon></Button>
            </Col>
        </>
    );
}