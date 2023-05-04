import { Typography } from '@mui/material';
import { Col, Row, Nav, Stack, Tab, Tabs, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function ResortModal({ onHide, resort, show }) {
    console.log(resort);
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
                <Modal.Body style={{height: "488px"}} className='mb-4'>
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
                                                    style={{ height: "431px" }}
                                                />
                                            </Carousel.Item>
                                        ))
                                        }
                                    </Carousel>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="description" title="Description">
                            {resort.description }
                        </Tab>
                        <Tab eventKey="accomodation" title="Accommodation">
                            Tab content for Profile
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
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}