import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LoginIcon from '@mui/icons-material/Login';

export default function HeaderMobileView() {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 bg-transparent">
                    <Container fluid className='align-items-center'>
                        <Navbar.Brand href="#" className='fs-5'>LOGO</Navbar.Brand>
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
                                <Nav className="justify-content-center align-items-center flex-grow-1">
                                    <Nav.Link href="#action1" className='text-uppercase fs-5'>Home</Nav.Link>
                                    <Nav.Link href="#action2" className='text-uppercase fs-5'>Destination</Nav.Link>
                                    <Nav.Link href="#action2" className='text-uppercase fs-5'>About</Nav.Link>
                                    <Nav.Link href="#action2" className='text-uppercase fs-5'>Contact</Nav.Link>
                                </Nav>

                                <Button variant='primary' size='lg' style={{ width: "10rem" }} 
                                        className='align-items-center d-flex gap-2 mx-auto justify-content-center'><LoginIcon></LoginIcon>LOGIN</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}