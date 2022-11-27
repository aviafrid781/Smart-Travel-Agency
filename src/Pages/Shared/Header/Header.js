import React from 'react';
// import { Button } from 'react-bootstrap';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {

    //const { user, logOut } = useFirebase();
    const { user, logOut } = useAuth();
    return (
        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">SMART Travels</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as="/home">Home</Nav.Link> */}
                        < Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user?.email ? <>
                            < Nav.Link as={Link} to="/addServices">Add Services</Nav.Link>
                            < Nav.Link as={Link} to="/myOrder">My Order</Nav.Link>
                            < Nav.Link as={Link} to="/manageOrder">Manages Oders</Nav.Link>
                            <Button onClick={logOut} className='btn btn-danger' variant="outline-success"> Logout</Button>

                        </> :
                            < Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {
                            user.email && <span className="text-light me-4">welcome {user.email.substring(0, user.email.lastIndexOf("@"))} </span>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;