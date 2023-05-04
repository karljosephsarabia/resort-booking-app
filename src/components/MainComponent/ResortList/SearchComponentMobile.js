import { Col } from "react-bootstrap";
import React from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';
import NearMeIcon from '@mui/icons-material/NearMe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Calendar from '@mui/icons-material/Event';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';


export default function SearchComponentMobile() {

    const [destination, setDestination] = React.useState('');

    const handleChange = (event) => {
        setDestination(event.target.value);
    };

    return (
        <>
            <Col sm={12} className="my-5 d-flex justify-content-center">
                <FormControl fullWidth sx={{ width: 351 }}>
                    <InputLabel id="destination" >Destination</InputLabel>
                    <Select
                        id="destination"
                        label="Destination"
                        value={destination}
                        className="bg-white"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Palawan"}><LocationOnIcon></LocationOnIcon>Palawan</MenuItem>
                        <MenuItem value={"Cebu"}><LocationOnIcon></LocationOnIcon>Cebu</MenuItem>
                        <MenuItem value={"Negros Oriental"}><LocationOnIcon></LocationOnIcon>Negros Oriental</MenuItem>
                    </Select>

                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['SingleInputDateRangeField']} sx={{ backgroundColor: "white", paddingTop: 0, marginTop: "8px", borderRadius: "3px" }}>
                            <DateRangePicker
                                slots={{ field: SingleInputDateRangeField }}
                                slotProps={{ textField: { InputProps: { endAdornment: <Calendar /> } } }}
                                label="Check In - Check Out"
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <fieldset>
                        <legend className="fs-6 mb-2 mt-2">Guest</legend>
                        <div className="d-flex flex-row gap-3">
                            <TextField id="outlined-number" label="Adult Qty" type="number" InputLabelProps={{ shrink: true }} className="bg-white rounded-2" defaultValue={1}/>
                            <TextField id="outlined-number" label="Child Qty" type="number" InputLabelProps={{ shrink: true }} className="bg-white rounded-2" defaultValue={1}/>
                        </div>
                    </fieldset>
                    <Button variant="contained" className="d-flex gap-2 mt-3" size="large">Seach Now<NearMeIcon></NearMeIcon></Button>
                </FormControl>
            </Col>
        </>
    );
}