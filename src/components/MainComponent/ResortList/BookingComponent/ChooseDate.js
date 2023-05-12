import React from 'react';
import { Stack, Typography, InputLabel, MenuItem, Select, FormControl, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function ChooseDate(props) {
    const minDate = dayjs().startOf('day');
    return (
        <>
            <Stack className='border mt-5 mb-3 w-75 mx-auto'>
                <div className='bg-danger d-flex justify-content-center'>Make Reservation</div>
                <div className='d-flex flex-column my-4'>
                    <h5 className='mx-5 text-uppercase'>You Stay Dates</h5>
                    <div className='d-flex flex-row gap-3 mx-5'>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Check-in" slotProps={{ textField: { size: 'small' } }} onChange={(e) => props.onChange(e, 'check-in')} minDate={minDate} fullWidth />
                                </DemoContainer>
                            </LocalizationProvider>
                            {props.reservationError['check-in'] && <Typography className='mt-0 text-danger' variant='caption'>Check-In date required</Typography>}
                        </div>
                        <div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Check-out" slotProps={{ textField: { size: 'small' } }} onChange={(e) => props.onChange(e, 'check-out')} minDate={minDate} />
                                </DemoContainer>
                            </LocalizationProvider>
                            {props.reservationError['check-out'] && <Typography className='mt-0 text-danger' variant='caption'>Check-Out date required</Typography>}
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5>ROOM & Guest</h5>
                    <div className='d-flex flex-row'>
                        <FormControl size='small' sx={{ width: "29vw" }}>
                            <InputLabel id="demo-simple-select-label">Number of Room</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="total-room"
                                value={props.reservation['total-room']}
                                onChange={(e) => props.onChange(e)}
                                name='total-room'

                            >
                                <MenuItem value={1}>1 Room</MenuItem>
                                <MenuItem value={2}>2 Room</MenuItem>
                                <MenuItem value={3}>3 Room</MenuItem>
                                <MenuItem value={4}>4 Room</MenuItem>
                                <MenuItem value={5}>5 Room</MenuItem>
                            </Select>
                            { props.reservationError['total-room'] && <Typography className='mt-0 text-danger' variant='caption'>Number of rooms required</Typography>}
                        </FormControl>
                    </div>
                    <div className='d-flex flex-row gap-3 mx-5 mt-4 mb-5'>
                        <div className='d-flex flex-column'>
                            <h5>Adult</h5>
                            <TextField name='guest-adult' label="adult" variant="outlined" size='small' type='number' onChange={(e) => props.onChange(e)} />
                            { props.reservationError['guest-adult'] && <Typography className='mt-0 text-danger' variant='caption'>Adult count required</Typography>}
                        </div>
                        <div className='d-flex flex-column'>
                            <h5>Child</h5>
                            <TextField name='guest-child' label="child" variant="outlined" size='small' type='number' onChange={(e) => props.onChange(e)} />
                            { props.reservationError['guest-child'] && <Typography className='mt-0 text-danger' variant='caption'>Child count required</Typography>}
                        </div>
                    </div>
                </div>
            </Stack>
        </>
    );
}