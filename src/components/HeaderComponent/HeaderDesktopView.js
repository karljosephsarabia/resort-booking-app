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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userToken = useSelector(state => state.userToken);
    const userInfo = useSelector(state => state.userInfo);
    console.log(userInfo);



    const [show, setShow] = useState(false);

    useEffect(() => {
        if (userToken) {
            console.log('user is logged in');
            axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }).then(response => {
                const { data } = response;
                dispatch(setUserInfo(data));
            }).catch(err => {
                console.error(err);
            });
        } else {
            console.log('user is Not logged in');
        }
    }, [dispatch, userToken]);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLogIn = () => navigate('/login');

    const handleLogOut = () => {
        setShow(false);
        dispatch(setUserInfo([]));
        dispatch(setUserToken(''));

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
                                {!userToken && <Button variant='primary' size='lg' style={{ width: "8rem" }} className='align-items-center d-flex gap-2' onClick={handleLogIn}><LoginIcon></LoginIcon>LOGIN</Button>}
                                {userToken && <Button variant='light' size='medium' className='d-flex flex-row align-items-center gap-2 rounded-pill' onClick={handleShow}><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />Welcome, {userInfo.name}</Button>}
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