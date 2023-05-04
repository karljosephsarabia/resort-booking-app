import { Col } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ResortModal from "./ResortModal";


export default function ResortCart({ resort }) {
    const [show, setShow] = useState(false);
    const [selectResort, setselectResort] = useState([]);

    const handleOnClick = () => {
        setShow(state => !state);
        setselectResort(resort)
    };

    return (
        <>
            <Col className="d-flex justify-content-center gap-4">
                <Card sx={{ width: 275 }} onClick={() => handleOnClick()}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={resort.images[0]}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>{resort.location}</Typography>
                            <Typography variant="h6">{resort.title}</Typography>
                            <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Col>

            { show && <ResortModal show={show} onHide={() => setShow(false)} resort = { selectResort }/> }
        </>
    );
}