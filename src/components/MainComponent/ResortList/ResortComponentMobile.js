import { Col, Row } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';

export default function ResortComponentMobile() {
    return (
        <>
            <Col sm={12} className="mb-5">
                <Row className="gy-4">
                    <Col className="d-flex justify-content-center">
                        <Card sx={{ width: 163 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>Boracay</Typography>
                                    <Typography variant="h6">Savoy Hotel</Typography>
                                    <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                                    <hr />
                                    <Typography variant="h5" className="d-flex align-items-center">P1000<Typography>(as Low)</Typography></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>

                    <Col className="d-flex justify-content-center">
                        <Card sx={{ width: 163 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>Boracay</Typography>
                                    <Typography variant="h6">Savoy Hotel</Typography>
                                    <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                                    <hr />
                                    <Typography variant="h5" className="d-flex align-items-center">P1000<Typography>(as Low)</Typography></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card sx={{ width: 163 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>Boracay</Typography>
                                    <Typography variant="h6">Savoy Hotel</Typography>
                                    <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                                    <hr />
                                    <Typography variant="h5" className="d-flex align-items-center">P1000<Typography>(as Low)</Typography></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card sx={{ width: 163 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>Boracay</Typography>
                                    <Typography variant="h6">Savoy Hotel</Typography>
                                    <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                                    <hr />
                                    <Typography variant="h5" className="d-flex align-items-center">P1000<Typography>(as Low)</Typography></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card sx={{ width: 163 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image="https://escales.ponant.com/wp-content/uploads/2020/12/plage.jpg.webp"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="subtitle2" sx={{ color: "grey" }}><LocationOnIcon sx={{ fontSize: "1rem" }}></LocationOnIcon>Boracay</Typography>
                                    <Typography variant="h6">Savoy Hotel</Typography>
                                    <Typography variant="subtitle2" className="d-flex gap-1"><Rating name="read-only" value={5} size="small" readOnly />5.0</Typography>
                                    <hr />
                                    <Typography variant="h5" className="d-flex align-items-center">P1000<Typography>(as Low)</Typography></Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </>
    );
}