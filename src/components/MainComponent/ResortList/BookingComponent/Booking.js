import { Col, Container, Row, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CloseButton from 'react-bootstrap/CloseButton';
import { setBook } from '../../../../store/ResponsiveSlice';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContent from '@mui/material/CardContent';

import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import ChooseDate from './ChooseDate';
import SelectRoom from './SelectRoom';
import CustomerDetails from './CustomerDetails';


export default function Booking() {
    const book = useSelector(state => state.book);
    const { bookStatus, selectedResort } = book;
    const [activeStep, setActiveStep] = useState(0);
    const dispatch = useDispatch();
    const [reservation, setReservation] = useState({
        'check-in': '',
        'check-out': '',
        'total-night': '',
        'total-room': '',
        'guest-adult': 0,
        'guest-child': 0,
        'room-type': [],
        name: [],
        address: [],
        phone: '',
        'email-address': '',
        'total-amount': 0
    });
    console.log(reservation);

    const [reservationError, setReservationError] = useState({});
    const { sectionIdToScrollTo } = useSelector(state => state.booking);

    useEffect(() => {
        if (sectionIdToScrollTo) {
            const sectionElement = document.getElementById(sectionIdToScrollTo);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    const steps = ['Choose Date', 'Select a Room', 'Customer Details', 'Payment Method'];

    let hasError = false;

    const handleNext = () => {

        if (activeStep === 0) {
            if (!reservation['check-in']) {
                setReservationError(prevState => ({ ...prevState, 'check-in': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'check-in': false }));
                hasError = false;
            }

            if (!reservation['check-out']) {
                setReservationError(prevState => ({ ...prevState, 'check-out': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'check-out': false }));
                hasError = false;
            }

            if (!reservation['total-room']) {
                setReservationError(prevState => ({ ...prevState, 'total-room': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'total-room': false }));
                hasError = false;
            }

            if (!reservation['guest-adult']) {
                setReservationError(prevState => ({ ...prevState, 'guest-adult': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'guest-adult': false }));
                hasError = false;
            }

            if (!reservation['guest-child']) {
                setReservationError(prevState => ({ ...prevState, 'guest-child': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'guest-child': false }));
                hasError = false;
            }

            if (!hasError) {
                const checkOutDate = new Date(Date.parse(reservation['check-out']));
                const checkInDate = new Date(Date.parse(reservation['check-in']));

                const diffInTime = checkOutDate.getTime() - checkInDate.getTime();
                const diffInDays = diffInTime / (1000 * 3600 * 24);
                setReservation(prevState => ({ ...prevState, 'total-night': diffInDays }));

                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        } else if (activeStep === 1) {
            console.log(reservation);

            if (reservation['room-type'].length === 0) {
                setReservationError(prevState => ({ ...prevState, 'room-type': true }));
                hasError = true;
            } else {
                setReservationError(prevState => ({ ...prevState, 'room-type': false }));
                hasError = false;
            }

            if (!hasError) {
                let totalPrice = [];
                totalPrice = reservation['room-type'].map(room => {
                    return (parseInt(room.price.replace(/,/g, '')) * reservation['total-night'] * reservation['total-room']);
                });
                const totalAmount = totalPrice.reduce((sum, price) => sum + price, 0);
                setReservation(prevState => ({ ...prevState, "total-amount": totalAmount }));
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        } else if (activeStep === 2) {
            if (reservation.name.length !== 2) {
                console.log(reservation.name['first-name']);
                if (!reservation.name['first-name'] || reservation.name['first-name'] === undefined) {
                    setReservationError(prevState => ({ ...prevState, 'first-name': true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, 'first-name': false }));
                    hasError = false;
                }

                if (!reservation.name['last-name'] || reservation.name['last-name'] === undefined) {
                    setReservationError(prevState => ({ ...prevState, 'last-name': true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, 'last-name': false }));
                    hasError = false;
                }

                if (!reservation.address['home-address'] || reservation.address['home-address'] === undefined) {
                    setReservationError(prevState => ({ ...prevState, 'home-address': true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, 'home-address': false }));
                    hasError = false;
                }

                if (!reservation.address.city || reservation.address.city === undefined) {
                    setReservationError(prevState => ({ ...prevState, city: true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, city: false }));
                    hasError = false;
                }

                if (!reservation.address.state || reservation.address.state === undefined) {
                    setReservationError(prevState => ({ ...prevState, state: true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, state: false }));
                    hasError = false;
                }

                if (!reservation.address.zipcode || reservation.address.zipcode === undefined) {
                    setReservationError(prevState => ({ ...prevState, zipcode: true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, zipcode: false }));
                    hasError = false;
                }

                if (!reservation.phone || reservation.phone === undefined) {
                    setReservationError(prevState => ({ ...prevState, phone: true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, phone: false }));
                    hasError = false;
                }

                if (!reservation['email-address'] || reservation['email-address'] === undefined) {
                    setReservationError(prevState => ({ ...prevState, 'email-address': true }));
                    hasError = true;
                } else {
                    setReservationError(prevState => ({ ...prevState, 'email-address': false }));
                    hasError = false;
                }

                if (!hasError) {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }
            }
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const HandleCloseBook = () => {
        dispatch(setBook({
            bookStatus: false,
            selectedResort: []
        }));
        setActiveStep(0);
    };

    const handleOnInput = (e, input) => {
        console.log(e);
        if (input === 'check-in') {
            setReservation(prevState => ({ ...prevState, 'check-in': e.$d.toDateString() }));
            setReservationError(prevState => ({ ...prevState, 'check-in': false }));

        } else if (input === 'check-out') {
            setReservation(prevState => ({ ...prevState, 'check-out': e.$d.toDateString() }));
            setReservationError(prevState => ({ ...prevState, 'check-out': false }));
        } else {
            setReservation(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
            setReservationError(prevState => ({ ...prevState, [e.target.name]: false }));
        }
    };

    const handleRoom = (e) => {
        if (e.target.checked) {
            setReservation(prevState => {
                const newReservation = { ...prevState, 'room-type': [...prevState['room-type'], { title: e.target.name, price: e.target.value }] };
                return newReservation;
            });
        } else {
            const updatedRoomTypes = reservation['room-type'].filter(roomType => roomType.title !== e.target.name);
            setReservation({ ...reservation, 'room-type': updatedRoomTypes });
        }
    };

    const handleOnCustomerInfo = (e) => {
        console.log(e);
        if (e.target.name === 'first-name' || e.target.name === 'last-name') {
            setReservation(prevState => {
                const newName = { ...prevState, name: { ...prevState.name, [e.target.name]: e.target.value } };
                return newName;
            });
        } else if (e.target.name === 'home-address' || e.target.name === 'city' || e.target.name === 'state' || e.target.name === 'zipcode') {
            setReservation(prevState => {
                const newAddress = { ...prevState, address: { ...prevState.address, [e.target.name]: e.target.value } };
                return newAddress;
            });
        } else {
            setReservation(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        }
    };

    return (
        <>
            <Container fluid >
                {bookStatus &&
                    <Row className='bg-white' id='booking'>
                        <Col xs={8} className='d-flex justify-content-center py-5 border'>
                            <Box sx={{ width: '75%' }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {activeStep === 0 && <ChooseDate key={0} onChange={handleOnInput} reservationError={reservationError} reservation={reservation} />}
                                        {activeStep === 1 && <SelectRoom key={1} selectedResort={selectedResort} onChange={handleRoom} reservationError={reservationError} />}
                                        {activeStep === 2 && <CustomerDetails key={2} onChange={handleOnCustomerInfo} reservationError={reservationError} />}
                                        {activeStep === 3 &&
                                            <Card className='mt-5 mb-3'>
                                                <Stack>
                                                    <Row className=''>
                                                        <RadioGroup
                                                            aria-labelledby="demo-radio-buttons-group-label"
                                                            defaultValue="paypal"
                                                            name="radio-buttons-group">
                                                            <Col className='border-bottom d-flex justify-content-between align-items-center px-5 py-2'>
                                                                <div className='d-flex flex-column'>
                                                                    <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                                                                    <Typography variant={'caption'} className='ms-4 w-75 text-secondary'>Paypal is a secure way to pay online with your credit card without sharing information directly with the merchant.</Typography>
                                                                </div>
                                                                <div style={{ width: "156px" }} className='d-flex justify-content-center'>
                                                                    <i className="fa-brands fa-cc-paypal fa-2xl"></i>
                                                                </div>
                                                            </Col>
                                                            <Col className='border-bottom d-flex justify-content-between align-items-center px-5 py-2'>
                                                                <div className='d-flex flex-column'>
                                                                    <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
                                                                    <Typography variant={'caption'} className='ms-4 w-75 text-secondary'>A credit card allows you to make secure and convenient online purchases by entering your card information at checkout.</Typography>
                                                                </div>
                                                                <div className='d-flex gap-1' style={{ width: "156px" }}>
                                                                    <i className="fa-brands fa-cc-visa fa-2xl"></i>
                                                                    <i className="fa-brands fa-cc-mastercard fa-2xl"></i>
                                                                    <i className="fa-brands fa-cc-jcb fa-2xl"></i>
                                                                    <i className="fa-brands fa-cc-amex fa-2xl"></i>
                                                                </div>
                                                            </Col>
                                                        </RadioGroup>
                                                    </Row>
                                                    <div>
                                                        <Stack className='my-5'>
                                                            <div className='mx-5'>
                                                                <Typography variant='subtitle2'>CREDIT CARD NUMBER</Typography>
                                                                <TextField variant="outlined" size='small' fullWidth />
                                                            </div>
                                                            <div className='mx-5 d-flex gap-5 my-4'>
                                                                <Typography variant='subtitle2'>CVV CODE <TextField variant="outlined" size='small' fullWidth /></Typography>
                                                                <Typography variant='subtitle2'>EXPIRY DATE<TextField variant="outlined" size='small' fullWidth /></Typography>
                                                            </div>
                                                            <div className='mx-5'>
                                                                <Typography variant='subtitle2'>NAME ON CARD</Typography>
                                                                <TextField variant="outlined" size='small' fullWidth />
                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                            </Card>}
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Button
                                                color="primary"
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                                variant='contained'
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button onClick={handleNext} variant='contained'>
                                                {activeStep === steps.length - 1 ? 'Confirm Payment' : 'Continue'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </Box>
                        </Col>
                        <Col sx={4} className='d-flex flex-column'>
                            <div className='d-flex justify-content-end'>
                                <CloseButton className='mt-2 d-flex flex-row-reverse' onClick={HandleCloseBook} />
                            </div>
                            <Card className='my-4 mx-5'>
                                <CardContent>
                                    <Typography className='text-center border-bottom pb-3 text-uppercase'>Reservation Details</Typography>
                                    <Typography className='text-center py-4 text-uppercase px-4' variant='h5'>{selectedResort.title}</Typography>
                                    <div className='my-1 mx-4'>
                                        <Typography className='d-flex justify-content-between text-uppercase'>Check-In
                                            {activeStep > 0 && <Typography>{reservation['check-in']}</Typography>}
                                        </Typography>
                                        <Typography className='d-flex justify-content-between my-3 text-uppercase'>Check-Out
                                            {activeStep > 0 && <Typography>{reservation['check-out']}</Typography>}
                                        </Typography>
                                        <Typography className='d-flex justify-content-between text-uppercase'>Total Nights
                                            {activeStep > 0 && <Typography>{reservation['total-night']}</Typography>}
                                        </Typography>
                                        <Typography className='d-flex justify-content-between my-3 text-uppercase'>Total Rooms
                                            {activeStep > 0 && <Typography>{reservation['total-room']}</Typography>}
                                        </Typography>
                                        <Typography className='d-flex justify-content-between border-bottom pb-4 text-uppercase'>Guest
                                            {activeStep > 0 && <Typography>{reservation['guest-adult']} Adult {reservation['guest-child']} Child</Typography>}
                                        </Typography>
                                    </div>
                                    <div className='mx-4'>
                                        {activeStep > 1 && (
                                            <div className='my-4'>
                                                <Typography className='text-uppercase' variant='h6' style={{ textAlign: 'center' }}>Total Price</Typography>
                                                <Typography className='d-flex flex-column align-items-center' variant='h4'>
                                                    <span>{reservation['total-amount'].toLocaleString()}</span>
                                                </Typography>
                                            </div>
                                        )}
                                        {activeStep > 1 &&
                                            <Accordion>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="room-types-content" id="room-types-header">
                                                    <Typography variant='h5'>Room Types</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {reservation['room-type'].map(room =>
                                                        <div key={room.id} className='my-4'>
                                                            <div>
                                                                <Typography variant='h6'>{room.title} <span>{room.price}</span></Typography>
                                                            </div>
                                                            <div>
                                                                <Typography className='d-flex justify-content-end' variant='caption'>({reservation['total-night']} Night + {reservation['total-room']} Room)</Typography>
                                                            </div>
                                                            <div>
                                                                <Typography className='d-flex justify-content-between' variant='button'>Subtotal <span>{(parseInt(room.price.replace(/,/g, '')) * reservation['total-night'] * reservation['total-room']).toLocaleString()}</span></Typography>
                                                            </div>
                                                        </div>
                                                    )}
                                                </AccordionDetails>
                                            </Accordion>
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        </Col>
                    </Row>}
            </Container>
        </>
    );
}