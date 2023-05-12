import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginIcon from '@mui/icons-material/Login';
import './style.css';
// import { useNavigate } from 'react-router-dom';
import logoImage from './Tropicana_Getaway.png';
// import axios from 'axios';

export default function HeaderDesktopView() {
    // const navigate = useNavigate();


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
        </>
    );
}