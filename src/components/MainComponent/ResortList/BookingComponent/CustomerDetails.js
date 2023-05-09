import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const CustomerDetails = (props) => {
    return (
        <>
            <Typography sx={{ mt: 2, mb: 1 }}>
                <Stack gap={4}>
                    <div className='d-flex flex-row gap-5 mx-5'>
                        <div className='w-100'>
                            <TextField id="first-name" name='first-name' label="First Name" InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} fullWidth />
                            {props.reservationError['first-name'] && <Typography className='mt-0 text-danger' variant='caption'>First Name Required</Typography>}
                        </div>
                        <div className='w-100'>
                            <TextField id="last-name" label="Last Name" name='last-name' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} fullWidth />
                            {props.reservationError['last-name'] && <Typography className='mt-0 text-danger' variant='caption'>Last Name Required</Typography>}
                        </div>
                    </div>

                    <div className='mx-5'>
                        <TextField id="home-address" label="Home Address" name='home-address' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} fullWidth />
                        {props.reservationError['home-address'] && <Typography className='mt-0 text-danger' variant='caption'>Address Required</Typography>}
                    </div>

                    <div className='d-flex flex-row gap-3 mx-5'>
                        <div className='w-100'>
                            <TextField id="city" label="City" name='city' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} />
                            {props.reservationError.city && <Typography className='mt-0 text-danger' variant='caption'>City Required</Typography>}
                        </div>
                        <div className='w-100'>
                            <TextField id="state" label="State" name='state' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} />
                            {props.reservationError.state && <Typography className='mt-0 text-danger' variant='caption'>State Required</Typography>}
                        </div>
                        <div className='w-100'>
                            <TextField id="zipcode" label="ZipCode" name='zipcode' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} />
                            {props.reservationError.zipcode && <Typography className='mt-0 text-danger' variant='caption'>ZipCode Required</Typography>}
                        </div>
                    </div>

                    <div className='d-flex gap-5 mx-5'>
                        <div className='w-100'>
                            <TextField id="phone" label="Phone" name='phone' type='number' InputLabelProps={{ shrink: true }} size='small' onChange={(e) => props.onChange(e)} fullWidth />
                            {props.reservationError.phone && <Typography className='mt-0 text-danger' variant='caption'>Phone Required</Typography>}
                        </div>
                        <div className='w-100'>
                            <TextField type='email' id="email-address" name='email-address' label="Email Address" InputLabelProps={{ shrink: true }} size='small' fullWidth oonChange={(e) => props.onChange(e)} />
                            {props.reservationError['email-address'] && <Typography className='mt-0 text-danger' variant='caption'>Email Address Required</Typography>}
                        </div>
                    </div>
                </Stack>
            </Typography>
        </>
    );
};

export default CustomerDetails;