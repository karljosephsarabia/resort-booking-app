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
                                    <Typography sx={{ color: "white", backgroundColor: "black" }}>{resort.description} </Typography>
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
                                                {resortItem.features.map((feature, index) => (
                                                    <ul key={index} className='mb-1'>
                                                        <li >{feature}</li>
                                                    </ul>
                                                ))
                                                }
                                                <h5>Amenities: </h5>
                                                {resortItem.amenities.map((amenity, index) => (
                                                    <ul key={index} className='mb-1'>
                                                        <li>{amenity}</li>
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
                               {resort.title === 'Shangri-La Boracay Resort and Spa' &&
                                <iframe
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8131862248724!2d121.90365387519694!3d11.987424888244794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c79fb9011c1%3A0xdcecb532f50053e5!2sShangri-La%20Boracay!5e0!3m2!1sen!2sph!4v1683978459336!5m2!1sen!2sph'
                                    width='750'
                                    height='170'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>}
                                {resort.title === 'El Nido Resorts Miniloc Island' &&
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5114028577573!2d119.31761797479669!3d11.149720552197795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6538b4462afc3%3A0x27d62b6818064df2!2sEl%20Nido%20Resorts%20-%20Miniloc%20Island!5e0!3m2!1sen!2sph!4v1684051469679!5m2!1sen!2sph"
                                    width='750'
                                    height='170'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>}
                                {resort.title === 'Eskaya Beach Resort and Spa' &&
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.498846051492!2d123.7878127747802!3d9.552194780580441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa5349da01fb89%3A0x2e5a4f606cb29688!2sEskaya%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2sph!4v1684051687820!5m2!1sen!2sph"
                                    width='750'
                                    height='170'
                                    style={{ border: 0 }}
                                    allowFullScreen=''
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'
                                ></iframe>}
                                <Typography variant='h6'>Address: {resort.contacts.address}</Typography>
                                <Typography variant='h6'>Phone: {resort.contacts.phone}</Typography>
                                <Typography variant='h6'>Email: {resort.contacts.email}</Typography>
                            </Stack>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button onClick={() => window.location.href = 'booking.js'} className='px-5'>Book now</Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}