import { Typography } from '@mui/material';
import { Col, Row, Stack, Tab, Tabs, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function ResortModal({ onHide, resort, show }) {
    const [key, setKey] = useState('overview');
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Stack>
                        <Modal.Title id="contained-modal-title-vcenter"> {resort.title} </Modal.Title>
                        <Typography variant='subtitle2'> {resort.location} </Typography>
                    </Stack>

                </Modal.Header>
                <Modal.Body style={{ height: "488px" }} className='mb-4'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="overview" title="Overview">
                            <Row> 
                                <Col>
                                    <Carousel>
                                        {resort.images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img
                                                    className="d-block w-100"
                                                    src={image}
                                                    alt="First slide"
                                                    style={{ height: "21rem", objectFit: "cover" }}
                                                />
                                            </Carousel.Item>
                                        ))
                                        }
                                    </Carousel>
                                    <Typography sx={{color: "white", backgroundColor: "black"}}>{ resort.description } </Typography>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="accomodation" title="Accommodation">
                            <Carousel fade>
                                {resort.room.map((resortItem, index) => (
                                    <Carousel.Item className='d-flex flex-column mt-3 bg-white' key={index}>
                                        <Typography variant='h5'>{resortItem.title}</Typography>
                                        <div className='d-flex flex-row gap-3'>
                                            <img
                                                className="d-block"
                                                src={resortItem.images}
                                                alt="First slide"
                                                style={{ height: "53vh", width: "33vw" }}
                                            />
                                            <Stack className='d-flex justify-content-between'>
                                            <h5>Features: </h5>
                                            { resortItem.features.map((feature, index) => (
                                                <ul key={index} className='mb-1'>
                                                    <li >{ feature }</li>
                                                </ul>
                                            ))
                                             }
                                                <h5>Amenities: </h5>
                                                { resortItem.amenities.map((amenity, index) => (
                                                <ul key={index} className='mb-1'>
                                                    <li>{ amenity }</li>
                                                </ul>
                                                ))}
                                                
                                            </Stack>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <Stack gap={5} className='mt-5'>
                                <Typography variant='h6'>Address: {resort.contacts.address}</Typography>
                                <Typography variant='h6'>Phone: {resort.contacts.phone}</Typography>
                                <Typography variant='h6'>Email: {resort.contacts.email}</Typography>
                            </Stack>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button onClick={onHide} className='px-5'>Book now</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}