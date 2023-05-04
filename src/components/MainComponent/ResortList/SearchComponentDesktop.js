import { Col } from "react-bootstrap";
import React from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Box, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import TextField from '@mui/material/TextField';
import NearMeIcon from '@mui/icons-material/NearMe';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Calendar from '@mui/icons-material/Event';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';


export default function SearchComponentDesktop() {
    const [destination, setDestination] = React.useState('');

    const handleChange = (event) => {
        setDestination(event.target.value);
    };

    return (
        <>
            <Col sm={12} className="my-5 d-flex justify-content-center">
                <FormControl fullWidth sx={{ width: 1150, backgroundColor: "rgba(22%, 61%, 61%, 0.6)" }} className="d-flex flex-row align-items-end justify-content-between px-3 pb-3 rounded-3 gap-3">
                    <Box>
                        <InputLabel id="destination" sx={{ position: "relative" }}>Destination</InputLabel>
                        <Select
                            id="destination"
                            label="Destination"
                            value={destination}
                            className="bg-white"
                            onChange={handleChange}
                            sx={{ width: "15vw" }}
                        >

                            <MenuItem value={"Palawan"}><LocationOnIcon></LocationOnIcon>Palawan</MenuItem>
                            <MenuItem value={"Cebu"}><LocationOnIcon></LocationOnIcon>Cebu</MenuItem>
                            <MenuItem value={"Negros Oriental"}><LocationOnIcon></LocationOnIcon>Negros Oriental</MenuItem>
                        </Select>
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['SingleInputDateRangeField']} sx={{ backgroundColor: "white", paddingTop: 0, marginTop: "8px", borderRadius: "3px", width: "25vw" }}>
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
                            <TextField id="outlined-number" label="Adult Qty" type="number" InputLabelProps={{ shrink: true }} className="bg-white rounded-2" sx={{ width: "8vw" }} defaultValue={1} />
                            <TextField id="outlined-number" label="Child Qty" type="number" InputLabelProps={{ shrink: true }} className="bg-white rounded-2" sx={{ width: "8vw" }} defaultValue={1} />
                        </div>
                    </fieldset>
                    <Button variant="contained" className="d-flex gap-2 mt-3 py-3" size="large" sx={{ width: "15vw" }}>Seach Now<NearMeIcon></NearMeIcon></Button>
                </FormControl>
            </Col>
        </>
    );
}