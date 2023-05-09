import React from 'react';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const SelectRoom = (props) => {
    console.log(props)
    return (
        <>
            <Stack className='my-5'>
                <div>Available Room</div>
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
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text d-flex justify-content-end"><small className="text-body-secondary">PRICE: {room.price}</small></p>
                                        </div>
                                        <Checkbox name={room.title} value={room.price} />
                                    </div>
                                </div>
                            </div>} />))}
                    { props.reservationError['room-type'] && <Typography className='mt-0 text-danger' variant='caption'>Choose your room</Typography>}
                </div>
            </Stack>
        </>
    );
};

export default SelectRoom;