import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
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


export default function Booking() {
    const book = useSelector(state => state.book);
    const { bookStatus, selectedResort } = book;
    console.log(selectedResort);
    const [totalRoom, setTotalRoom] = React.useState('');
    const dispatch = useDispatch();

    const steps = ['Choose Date', 'Select a Room', 'Customer Details', 'Payment'];

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
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChange = (event) => {
        setTotalRoom(event.target.value);
    };

    const HandleCloseBook = () => {
        dispatch(setBook({
            bookStatus: false,
            selectedResort: []
        }));
        setActiveStep(0);
    };

    return (
        <>
                                        {activeStep === 0 && <ChooseDate onChange={handleOnInput} reservationError={reservationError} reservation={reservation} />}
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