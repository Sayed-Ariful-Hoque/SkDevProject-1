import React from 'react'
import "./Heder.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Heder() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                        </Nav>    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Heder
