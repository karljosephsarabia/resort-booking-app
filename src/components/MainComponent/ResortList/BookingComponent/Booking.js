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
        'guest-adult': '',
        'guest-child': '',
        'room-type': [],
        name: [],
        address: [],
        phone: '',
        'email-address': ''
    });

    const [reservationError, setReservationError] = useState({});
    console.log(reservation);
    console.log(reservationError);

    const { sectionIdToScrollTo } = useSelector(state => state.booking);
    console.log(sectionIdToScrollTo);

    useEffect(() => {
        if (sectionIdToScrollTo) {
            const sectionElement = document.getElementById(sectionIdToScrollTo);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    const handleNext = () => {
        let hasError = false;
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
            setReservation(prevState => ({
                ...prevState,
                'check-in': e.$d.toDateString()
            }));
        } else if (input === 'check-out') {
            setReservation(prevState => ({
                ...prevState,
                'check-out': e.$d.toDateString()
            }));
        } else {
            setReservation(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }));
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
                                        {activeStep === 0 && <ChooseDate onChange={handleOnInput} reservationError={reservationError} reservation={reservation} />}
                                        {activeStep === 1 && <SelectRoom key={activeStep} selectedResort={selectedResort} onChange={handleRoom} reservationError={reservationError} />}
                                        {activeStep === 2 && <CustomerDetails key={activeStep} onChange={handleOnCustomerInfo} reservationError={reservationError} />}
                                                            </div>
                                                            <Checkbox />
                                                        </div>
                                                    </div>
                                                </div>))}
                                            </div>
                                        </Stack>}
                                    {activeStep === 2 && <Typography sx={{ mt: 2, mb: 1 }}>Step 3</Typography>}
                                    {activeStep === 3 && <Typography sx={{ mt: 2, mb: 1 }}>Step 4</Typography>}
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleNext}>
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </React.Fragment>
                            )}
                        </Box>
                    </Col>
                    <Col sc={5} className='d-flex justify-content-end'>
                        <CloseButton className='mt-2' onClick={HandleCloseBook} />
                    </Col>
                </Row>}
            </Container>
        </>
    );
}