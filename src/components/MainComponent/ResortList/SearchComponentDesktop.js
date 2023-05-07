import { Col } from "react-bootstrap";
import React from "react";
import { Stack } from 'react-bootstrap';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { setSearch } from '../../../store/ResponsiveSlice';
import Booking from "./BookingComponent/Booking.js";


export default function SearchComponentDesktop() {
    const dispatch = useDispatch();
    const handleOnChange = (e) => dispatch(setSearch(e.target.value));

    return (
        <>
            <Col sm={12} className="d-flex justify-content-center">
                <Stack className="d-flex flex-column align-items-center">
                    <h1 className="hero-banner-name-desktop position-relative mb-5">Dora<span className="hero-banner-text-desktop fs-6 w-100 position-absolute" style={{bottom: "-0.5rem"}}>Travel like dora, discover like an explorer</span></h1>
                    <Booking />
                    <Paper
                        component="form"
                        sx={{ p: '2px 20px', display: 'flex', alignItems: 'center', width: 700, borderRadius: "2rem", zIndex: "100", boxShadow: "inset -5px -5px 10px 0px rgba(255, 255, 255, 0.5), inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3)", background: "rgb(100, 184, 177)" }}
                        className="mt-5"
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Destination"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => handleOnChange(e)}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Stack>
            </Col>
        </>
    );
}