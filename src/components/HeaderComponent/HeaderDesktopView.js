import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginIcon from '@mui/icons-material/Login';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logoImage from './Tropicana_Getaway.png';
import axios from 'axios';
import { setUserInfo, setUserToken } from '../../store/ResponsiveSlice';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';


export default function HeaderDesktopView() {
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleLogOut = () => {
        setShow(false);
        dispatch(setUserInfo([]));
        dispatch(setUserToken(''));

    // const handleLogIn = () => navigate('/login');
    const handleLogIn = () => {
        window.location.href = 'http://127.0.0.1:8000/api/user';
    };


    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-0 bg-transparent p-0">
                    <Container fluid className='align-items-center mx-5'>
                        <Navbar.Brand href="#" className='fs-5'>
                            <img src={logoImage} alt="Tropicana Getaway" style={{ width: '125px', height: '125px' }} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center align-items-center flex-grow-1 pe-3 gap-5">
                                    <Nav.Link href="/resort-booking-app" className='text-uppercase fs-5'>Home</Nav.Link>
                                    <Nav.Link href="/resortList" className='text-uppercase fs-5'>Destination</Nav.Link>
                                    <Nav.Link href="/AboutUsPage" className='text-uppercase fs-5'>About</Nav.Link>
                                    <Nav.Link href="/ContactPage" className='text-uppercase fs-5'>Contact</Nav.Link>
                                </Nav>
                                <Button variant='primary' size='lg' style={{ width: "8rem" }} className='align-items-center d-flex gap-2' onClick={handleLogIn}><LoginIcon></LoginIcon>LOGIN</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Wishlist" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Book Status" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Book History" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    {userInfo.user_type === 'resort-owner' && <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Resort List" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Booking List" />
                            </ListItemButton>
                        </ListItem>
                    </List>}

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Logout" className='text-uppercase' onClick={handleLogOut} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}