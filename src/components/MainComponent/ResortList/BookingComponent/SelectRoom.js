import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';


const SelectRoom = (props) => {
    console.log(props);

    return (
        <>
            <Stack className='mt-5 mb-3'>
                <Typography variant='h6' className='mb-2'>Available Room</Typography>
                <div>
                    {props.selectedResort.room.map((room, index) => (
                        <FormControlLabel control={
                            <div key={index} className="card mb-3" sx={{ maxWidth: "540px" }} onChange={(e) => props.onChange(e)} >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={room.images} className="img-fluid rounded-start h-100" alt={room.title} />
                                    </div>
                                    <div className="col-md-8 d-flex">
                                        <div className="card-body">
                                            <h5 className="card-title">{room.title}</h5>
                                            {room.features.map((feature, index) => (
                                                <Chip label={feature} key={index} className='m-1'/>
                                            ))}
                                            < p className="card-text d-flex justify-content-end"><small className="text-body-secondary">PRICE: {room.price}</small></p>
                                        </div>
                                        <Checkbox name={room.title} value={room.price} />
                                    </div>
                                </div>
                            </div>} />))}
                    {props.reservationError['room-type'] && <Typography className='mt-0 text-danger text-uppercase' variant='caption'>You did not select your room</Typography>}
                </div>
            </Stack >
        </>
    );
};

export default SelectRoom;