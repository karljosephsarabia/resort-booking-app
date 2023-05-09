import { Col } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ResortModal from "./ResortModal";
import { useDispatch } from 'react-redux';
import { setBook, scrollToSection } from "../../../store/ResponsiveSlice";
import './style.css';


export default function ResortCard({ resort }) {
    const [show, setShow] = useState(false);
    const [selectResort, setselectResort] = useState([]);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        setShow(state => !state);
        setselectResort(resort);
    };

    const handleOnBook = () => {
        dispatch(setBook({
            bookStatus: true,
            selectedResort: resort
        }));

        dispatch(scrollToSection('booking'));
    };

    return (
        <>
            <Col className="d-flex justify-content-center gap-4">
                <Card sx={{ width: 275 }} className="border border-dark">
                    <CardActionArea onClick={() => handleOnClick()}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={resort.images[0]}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>{resort.location}</Typography>
                            <Typography variant="h6">{resort.title}</Typography>
                            <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="half-rating-read" size="small" defaultValue={resort.rating.rate} precision={0.5} readOnly />{resort.rating.rate}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button variant="contained" sx={{ width: "10rem", marginTop: "0.75rem", display: "block" }} className="mx-auto mt-0 mb-3" onClick={() => handleOnBook()}>Book</Button>
                </Card>
            </Col>

            {show && <ResortModal show={show} onHide={() => setShow(false)} resort={selectResort} />}
        </>
    );
}